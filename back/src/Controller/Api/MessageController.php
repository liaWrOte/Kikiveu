<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MessageController extends AbstractController
{
    /**
     * @Route("/api/message", name="api_message")
     */
    public function index(): Response
    {
        return $this->render('api/message/index.html.twig', [
            'controller_name' => 'MessageController',
        ]);
    }
}
