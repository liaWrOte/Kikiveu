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
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

/**
 * @Route("/api/v1/event", name="api_v1_event_")
 */
class EventController extends AbstractController
{
    /**
     * @Route("", name="browse", methods={"POST"})
     */
    public function browse(EventsRepository $eventsRepository, Request $request): Response
    {
        $json = $request->getContent();
        $localisationArray = json_decode($json, true);
        $eventsByLocalisation = $eventsRepository->findEventByLocalisation(
            $localisationArray['swLat'],
            $localisationArray['swLong'],
            $localisationArray['neLat'],
            $localisationArray['neLong']
        );

        return $this->json([
            'events' => $eventsByLocalisation,
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
     * @Route("/user/{id}", name="read_event_by_user", methods={"GET"}, requirements={"id" = "\d+"})
     */
    public function readEventByUserId(int $id, EventsRepository $eventsRepository): Response
    {
        $oneEvent = $eventsRepository->findEventByUserId($id);
        
        if ($oneEvent === null) {
            throw $this->createNotFoundException('L\'évènement demandé n\'existe plus');
        }

        return $this->json($oneEvent);
    }

    /**
     * @Route("/edit/{id}", name="edit", methods={"PUT"}, requirements={"id" = "\d+"})
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
    public function add(Request $request, NormalizerInterface $normalizer): Response
    {
        $json = $request->getContent();
        $eventArray = json_decode($json, true);

        $event = new Events();

        $form = $this->createForm(EventType::class, $event, ['csrf_protection' => false]);
        $form->submit($eventArray);
        
        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $event->setCreatedAt(new \DateTime());
            $em->persist($event);
            $em->flush();

            $json = $normalizer->normalize(
                $event,
                'json',
                ['groups' => 'show_add_event']
            );

            return $this->json($json, 200);
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
     * @Route("/delete/{id}", name="delete", requirements={"id"="\d+"}, methods={"DELETE"})
     */
    public function delete(Events $event): Response
    {
        $em = $this->getDoctrine()->getManager();
        $em->remove($event);
        $em->flush();

        return $this->json(200);
    }
}
