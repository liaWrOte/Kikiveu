<?php

namespace App\Controller\Api;

use App\Entity\Users;
use App\Entity\Discussions;
use App\Repository\UsersRepository;
use App\Repository\DiscussionsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/discussion", name="api_v1_discussion_")
 */
class DiscussionController extends AbstractController
{
    /**
     * @Route("/{id}", name="browse", requirements={"id" = "\d+"}, methods = {"GET"})
     */
    public function browse(Users $users, UsersRepository $usersRepository, DiscussionsRepository $discussionsRepository): Response
    {
        // J'ai besoin de récupéré les discussions d'un utilisateur/expéditeur
        // $discussions = $usersRepository->findDiscussions($users);
        $allDiscussionIdForOneUser = $discussionsRepository->findDiscussionsByUserId($users);
        $discussionsArray = [];

        foreach ($allDiscussionIdForOneUser as $discussionId) {
            $participant = $discussionsRepository->findDiscussionsWithParticipant($discussionId['discussionsId']);
            $discussionsArray[] = $participant;
        }
        
        return $this->json($discussionsArray, 200);
    }

    /**
     * @Route("/messages/{id}", name="read", requirements={"id" = "\d+"}, methods={"GET"})
     */
    public function read(Discussions $discussions, DiscussionsRepository $discussionsRepository)
    {
        $messagesByDiscussion = $discussionsRepository->findMessageByDiscussionsId($discussions);
        dd($messagesByDiscussion);

        return $this->json();
    }
}
