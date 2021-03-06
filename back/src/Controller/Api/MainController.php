<?php

namespace App\Controller\Api;

use App\Entity\Users;
use App\Form\UsersType;
use App\Repository\UsersRepository;
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
    public function signin(Request $request, UsersRepository $usersRepository, UserPasswordEncoderInterface $userPasswordEncoder, SerializerInterface $serializer): Response
    {
        $json = $request->getContent();
        $newUserArray = json_decode($json, true);

        $usersExist = $usersRepository->findByEmail($newUserArray['email']);
        
        if ($usersExist === []) {
            $user = new Users();
            $form = $this->createForm(UsersType::class, $user, ['csrf_protection' => false]);
            $form->submit($newUserArray);
            
            if ($form->isValid()) {
                $em = $this->getDoctrine()->getManager();
                $password = $form->get('password')->getData();
                
                if ($password != null) {
                    $user->setPassword($userPasswordEncoder->encodePassword($user, $password));
                }
                
                $user->setCreatedAt(new \Datetime());
                $em->persist($user);
                $em->flush();
            
                return $this->json($user, 200, ['signin' => true]);
            } else {
                return $this->json(
                    [
                        'errors' => (string) $form->getErrors(true, false)
                    ],
                    400
                );
            }
        } else {
            return $this->json(
                ['error' => 'l\'utilisateur existe déjà en BDD'],
                400
            );
        }
    }
}
