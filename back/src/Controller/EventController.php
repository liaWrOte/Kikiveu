<?php

namespace App\Controller;

use App\Entity\Events;
use App\Repository\EventsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/event", name="api_v1_event_", methods={"GET"})
 */
class EventController extends AbstractController
{
    /**
     * @Route("/", name="browse")
     */
    public function browse(EventsRepository $eventsRepository): Response
    {
        
        return $this->json([
            'events' => $eventsRepository->findEvents(),
        ]);
    }

    /**
     * @Route("/{id}", name="read", methods={"GET"})
     */
    public function read(int $id, EventsRepository $eventsRepository): Response
    {
        $oneEvent = $eventsRepository->findEventById($id);
        
        if ($oneEvent === null) {
            throw $this->createNotFoundException('L\'évènement demandé n\'existe plus');
        }

        return $this->json($oneEvent);
    }
}
