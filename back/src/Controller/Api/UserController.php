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
 * @Route("/api/v1/user", name="api_v1_")
 */
class UserController extends AbstractController
{
    /**
     * @Route("", name="browse", methods={"GET"})
     */
    public function browse(UsersRepository $usersRepository): Response
    {
        
        $users = $usersRepository->findUsersData();
        
        return dd($this->json($users));
    }

    /**
     * @Route("/{id}", name="read", methods={"GET"})
     */
    public function read(UsersRepository $usersRepository, $id): Response
    {
        $user = $usersRepository->findById($id);
        return dd($this->json($user));
    }

    /**
     * @Route("/edit/{id}", name="edit", methods={"PUT"})
     */
    public function edit(Users $users, Request $request): Response
    {
        $json = $request->getContent();
        
        $userArray = json_decode($json, true);

        $form = $this->createForm(UserEditType::class, $users, ['csrf_protection' => false]);

        $form->submit($request);

        if ($form->isValid()) {

            $em = $this->getDoctrine()->getManager();
            $em->flush();

            return $this->json(201);
        } else {
            return $this->json(
                [
                'errors' => (string) $form->getErrors(true, false),
                ], 400);
        }
    }

    /**
     * @Route("/edit/{id}", name="localisation_edit", methods={"PATCH"})
     */
    public function editLocalisation()
    {

    }

    /**
     * @Route("/delete/{id}", name="DELETE", methods={"DELETE"})
     */
    public function delete()
    {
        $json = $request->getContent();
    }
}