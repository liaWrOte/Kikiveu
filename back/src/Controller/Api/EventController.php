<?php

namespace App\Controller\Api;

use App\Entity\Events;
use App\Form\EventType;
use App\Repository\EventsRepository;
use App\Repository\TagsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/event", name="api_v1_event_")
 */
class EventController extends AbstractController
{
    /**
     * @Route("/", name="browse", methods={"GET"})
     */
    public function browse(EventsRepository $eventsRepository): Response
    {
        
        return $this->json([
            'events' => $eventsRepository->findEvents(),
        ]);
    }

    /**
     * @Route("/{id}", name="read", methods={"GET"}, requirements={"id" = "\d+"})
     */
    public function read(int $id, EventsRepository $eventsRepository): Response
    {
        $oneEvent = $eventsRepository->findEventById($id);
        
        if ($oneEvent === null) {
            throw $this->createNotFoundException('L\'évènement demandé n\'existe plus');
        }

        return $this->json($oneEvent);
    }

    /**
     * @Route("/edit/{id}", name="edit", methods={"POST"}, requirements={"id" = "\d+"})
     */
    public function edit(Events $events, Request $request): Response
    {
        $json = $request->getContent();

        $eventArray = json_decode($json, true);
        
        $form = $this->createForm(EventType::class, $events, ['csrf_protection' => false]);
        $form->submit($eventArray);
       
        if ($form->isValid()) {
            $events->setUpdatedAt(new \DateTime());
            $this->getDoctrine()->getManager()->flush();

            return $this->json(201);
        } else {
            return $this->json(
                [
                    'errors' => (string) $form->getErrors(true, false)
                ],
                400
            );
        }
    }

    /**
     * @Route("/add", name="add", methods={"POST"})
     */
    public function add(Request $request, TagsRepository $tagsRepository): Response
    {
        $json = $request->getContent();
        $eventArray = json_decode($json, true);

        $event = new Events();
        $tagsArray = $eventArray['tags'];
        foreach ($tagsArray as $tagArray) {
            foreach ($tagArray as $tagId) {
                $tag = $tagsRepository->find($tagId);
                $event->addTag($tag);
            }
        }
        
        $form = $this->createForm(EventType::class, $event, ['csrf_protection' => false]);
        $form->submit($eventArray);
        dd($event);
        
        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($event);
            $em->flush();
            return $this->json($event);
        }
    }
}
