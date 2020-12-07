<?php

namespace App\Controller\Api;

use App\Entity\Users;
use App\Form\UserEditType;
use App\Repository\UsersRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/**
 * @Route("/api/v1/user", name="api_v1_user_")
 */
class UserController extends AbstractController
{
    /**
     * @Route("", name="browse", methods={"GET"})
     */
    public function browse(UsersRepository $usersRepository): Response
    {
        
        $users = $usersRepository->findUsersData();
        
        return $this->json($users);
    }

    /**
     * @Route("/{id}", name="read", methods={"GET"}, requirements={"id" = "\d+"})
     */
    public function read(UsersRepository $usersRepository, $id): Response
    {
        $user = $usersRepository->findById($id);

        if ($user === null) {
            throw $this->createNotFoundException('L\'utilisateur demandé n\'éxiste plus');
        }

        return $this->json($user);
    }

    /**
     * @Route("/edit/{id}", name="edit", methods={"POST"}, requirements={"id" = "\d+"})
     */
    public function edit(Users $users, Request $request): Response
    {
        $json = $request->getContent();
        
        $userArray = json_decode($json, true);

        $form = $this->createForm(UserEditType::class, $users, ['csrf_protection' => false]);

        $form->submit($userArray);

        if ($form->isValid()) {
            $users->setUpdatedAt(new \DateTime());
            $em = $this->getDoctrine()->getManager();
            $em->flush();

            return $this->json($users, 200);
        } else {
            return $this->json(
                [
                'errors' => (string) $form->getErrors(true, false),
                ], 400);
        }
    }

    /**
     * @Route("/delete/{id}", name="delete", methods={"DELETE"}, requirements={"id" = "\d+"})
     */
    public function delete(Request $request, Users $users): Response
    {
        // dd($request);
        // TODO Faire la fonction DELETE
        $em = $this->getDoctrine()->getManager();
        $em->remove($users);
        $em->flush();
        return $this->json(200);
    }
}