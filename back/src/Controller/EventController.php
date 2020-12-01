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
    public function read(Events $events, EventsRepository $eventsRepository): Response
    {
        $oneEvent = $eventsRepository->findEventById($events);
        return $this->json($oneEvent);
    }
}
