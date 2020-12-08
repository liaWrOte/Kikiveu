<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/discussion", name="api_v1_discussion_")
 */
class DiscussionController extends AbstractController
{
    /**
     * @Route("/{id}", name="browse", requirements={"id" = "\d+"}, methods = {"GET"})
     */
    public function index(Discussions $discussions, Users $users, Request $request): Response
    {


        return $this->render('api/discussion/index.html.twig', [
            'controller_name' => 'DiscussionController',
        ]);
    }
}
