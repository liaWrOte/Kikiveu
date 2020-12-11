<?php

namespace App\Controller\Api;

use App\Entity\Dogs;
use App\Form\DogType;
use App\Repository\DogsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/v1/dog", name="api_v1_dog_")
*/
class DogController extends AbstractController
{   
    /**
     * @Route("/{id}", name="read", methods={"GET"}, requirements={"id" = "\d+"})
     */
    public function read(DogsRepository $dogsRepository, $id): Response
    {
        // On a accès à l'avatar, a castrate, au moodId, au stateId et au pseudo
        $dog = $dogsRepository->findById($id);

        if ($dog === null) {
            throw $this->createNotFoundException('Le chien demandé n\'éxiste plus');
        }

        return $this->json($dog);
    }

    /**
     * @Route("/add", name="add", methods={"POST"})
     */
    public function add(Request $request,  SerializerInterface $serializer): Response
    {
        $json = $request->getContent();
        $dogArray = json_decode($json, true);
        
        $dog = new Dogs();
        
        $form = $this->createForm(DogType::class, $dog, ['csrf_protection' => false]);
        $form->submit($dogArray);
        
        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $dog->setCreatedAt(new \DateTime());
            $em->persist($dog);
            $em->flush();

            $json = $serializer->serialize(
                $dog,
                'json',
                ['groups' => 'add_dogs']
            );

            return $this->json($json, 200);
        } else {
            return $this->json(
                [
                    'errors' => (string) $form->getErrors(true, false)
                ],
                400
            );
        }
    }

    /**
     * @Route("/edit/{id}", name="edit", methods={"POST"}, requirements={"id" = "\d+"})
     */
    public function edit(Dogs $dogs, Request $request): Response
    {
        $json = $request->getContent();
        
        $dogArray = json_decode($json, true);

        $form = $this->createForm(DogType::class, $dogs, ['csrf_protection' => false]);

        $form->submit($dogArray);

        if ($form->isValid()) {
            $dogs->setUpdatedAt(new \DateTime());
            $em = $this->getDoctrine()->getManager();
            $em->flush();

            

            return $this->json(200);
        } else {
            return $this->json(
                [
                'errors' => (string) $form->getErrors(true, false),
                ],
                400
            );
        }
    }
}
