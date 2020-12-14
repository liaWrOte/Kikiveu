<?php

namespace App\Controller\Api;

use App\Repository\MoodsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/mood", name="api_v1_mood_")
*/
class MoodController extends AbstractController
{
    /**
     * @Route("", name="browse", methods={"GET"})
     */
    public function browse(MoodsRepository $moodsRepository): Response
    {
        
        $moods = $moodsRepository->findAllMoods();
        
        return $this->json($moods);
    }

    /**
     * @Route("/{id}", name="read", requirements={"id" = "\d+"}, methods={"GET"})
     */
    public function read(int $id, MoodsRepository $moodsRepository): Response
    {
        $mood = $moodsRepository->findMoodById($id);

        return $this->json($mood);
    }
}
