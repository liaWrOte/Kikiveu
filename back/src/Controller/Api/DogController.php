<?php

namespace App\Controller\Api;

use App\Entity\Dogs;
use App\Form\DogType;
use App\Form\DogEditType;
use App\Repository\DogsRepository;
use App\Service\UploadFile;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpKernel\KernelInterface;

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
    public function add(Request $request, NormalizerInterface $normalizer, UploadFile $uploadFile): Response
    {
        $json = $request->getContent();

        $dogArray = json_decode($json, true);
        $cleanDogArray = UploadFile::cleanArray($dogArray);
        
        $dog = new Dogs();
        
        $form = $this->createForm(DogType::class, $dog, ['csrf_protection' => false]);
        $form->submit($cleanDogArray);
        
        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $dog->setCreatedAt(new \DateTime());
            $em->persist($dog);
            $uploadFile->saveUpload($json, $dog);
            $em->flush();

            $json = $normalizer->normalize(
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
     * @Route("/edit/{id}", name="edit", methods={"PUT"}, requirements={"id" = "\d+"})
     */
    public function edit(Dogs $dogs, NormalizerInterface $normalizer, Request $request, UploadFile $uploadFile): Response
    {
        $json = $request->getContent();

        $dogArray = json_decode($json, true);
        $cleanDogArray = UploadFile::cleanArray($dogArray);

        $form = $this->createForm(DogEditType::class, $dogs, ['csrf_protection' => false]);

        $form->submit($cleanDogArray);

        if ($form->isValid()) {
            $dogs->setUpdatedAt(new \DateTime());
            $em = $this->getDoctrine()->getManager();
            $em->flush();

            if (array_key_exists('filename', $dogArray) && array_key_exists('data')) {    
                $uploadFile->saveUpload($json, $dogs);
            }

            $json = $normalizer->normalize(
                $dogs,
                'json',
                ['groups' => 'edit_dog']
            );
            
            return $this->json($json, 200);
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
