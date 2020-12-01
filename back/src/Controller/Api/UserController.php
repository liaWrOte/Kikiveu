<?php

namespace App\Controller\Api;

use App\Entity\Users;
use App\Repository\UsersRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
        
        return dd($this->json($users));
    }

    /**
     * @Route("/{id}", name="read", methods={"GET"})
     */
    public function read(UsersRepository $usersRepository, $id): Response
    {
        dd($user = $usersRepository->findById($id));
        return dd($this->json($user));
    }
}