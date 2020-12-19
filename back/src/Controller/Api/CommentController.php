<?php

namespace App\Controller\Api;

use App\Entity\Comments;
use App\Form\CommentType;
use App\Repository\CommentsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/v1/comment", name="api_v1_comment_")
*/
class CommentController extends AbstractController
{
    /**
     * @Route("/{id}", name="browse", methods={"GET"})
     */
    public function browse(CommentsRepository $commentsRepository, $id): Response
    {
        
        $comments = $commentsRepository->findAllByEventId($id);
        
        return $this->json($comments);
    }

    /**
     * @Route("/read/{id}", name="read", methods={"GET"}, requirements={"id" = "\d+"})
     */
    public function read(CommentsRepository $commentsRepository, $id): Response
    {
        $comment = $commentsRepository->findCommentById($id);

        if ($comment === null) {
            throw $this->createNotFoundException('Le commentaire demandé n\'éxiste plus');
        }
        
        return $this->json($comment);
    }
    

    /**
     * @Route("/add", name="add", methods={"POST"},)
     */
    public function add(Request $request, SerializerInterface $serializer): Response
    {
        $json = $request->getContent();

        $commentArray = json_decode($json, true);

        $comment = new Comments();

        $form = $this->createForm(CommentType::class, $comment, ['csrf_protection' => false]);
        $form->submit($commentArray);
        
        
        if ($form->isValid()) {
            $comment->setCreatedAt(new \DateTime());
            $em = $this->getDoctrine()->getManager();
            $em->persist($comment);
            $em->flush();
            //dd($comment);
            $json = $serializer->serialize(
                $comment,
                'json',
                ['groups' => 'show_add_comment']
            );

            return $this->json($json, 200);
        } else {
            return $this->json(
                [
                'error' => (string) $form->getErrors(true, false)
                ],
                400
            );
        }

    }
}

