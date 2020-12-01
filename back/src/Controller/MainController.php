<?php

namespace App\Controller;

use App\Entity\Users;
use App\Form\UsersType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api-v1/", name="api_v1_")
 */
class MainController extends AbstractController
{
    /**
     * @Route("", name="connexion", methods={"POST"})
     */
    public function connexion(Request $request): Response
    {
        dd($request);
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/MainController.php',
        ]);
    }

    /**
     * @Route("signin", name="signin", methods={"POST"})
     */
    public function signin(Request $request, SerializerInterface $serializer): Response
    {
        $json = $request->getContent();
        $newUserArray = json_decode($json, true);

        $user = new Users();
        $form = $this->createForm(UsersType::class, $user, ['csrf_protection' => false]);

        $form->submit($newUserArray);
        // dd($form);

        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $user->setCreatedAt(new \Datetime());
            $em->persist($user);
            // $em->flush();

            return $this->json($user);
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
