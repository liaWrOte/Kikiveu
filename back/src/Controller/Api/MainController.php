<?php

namespace App\Controller\Api;

use App\Entity\Users;
use App\Form\UsersType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/v1/", name="api_v1_")
 */
class MainController extends AbstractController
{
    /**
     * @Route("signin", name="signin", methods={"POST"})
     */
    public function signin(Request $request, UserPasswordEncoderInterface $userPasswordEncoder, SerializerInterface $serializer): Response
    {
        $json = $request->getContent();
        $newUserArray = json_decode($json, true);

        $user = new Users();
        $form = $this->createForm(UsersType::class, $user, ['csrf_protection' => false]);
        $form->submit($newUserArray);
        // TODO Voir pour le slug !!!
        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $password = $form->get('password')->getData();
            
            if ($password != null) {
                $user->setPassword($userPasswordEncoder->encodePassword($user, $password));
            }

            $user->setCreatedAt(new \Datetime());
            $em->persist($user);
            $em->flush();

            return $this->json($user);
        } else {
            return $this->json(
                [
                    'errors' => (string) $form->getErrors(true, false)
                ],
                400
            );
        }
    }
}
