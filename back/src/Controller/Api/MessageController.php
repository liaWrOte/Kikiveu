<?php

namespace App\Controller\Api;

use App\Entity\Messages;
use App\Form\MessageType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/message", name="api_v1_message_")
 */
class MessageController extends AbstractController
{
    /**
     * @Route("/add", name="add")
     */
    public function add(Request $request): Response
    {
        $json = $request->getContent();
        $messageArray = json_decode($json, true);
        
        $message = new Messages();
        
        $form = $this->createForm(MessageType::class, $message, ['csrf_protection' => false]);
        $form->submit($messageArray);
        
        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $message->setCreatedAt(new \DateTime());
            $em->persist($message);
            $em->flush();

            return $this->json(200);
        } else {
            return $this->json(
                [
                    'errors' => (string) $form->getErrors(true, false)
                ],
                400
            );
        }
    }
}
