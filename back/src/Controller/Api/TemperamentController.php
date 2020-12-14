<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\TemperamentsRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/temperament", name="api_v1_temperament_")
*/
class TemperamentController extends AbstractController
{
    /**
     * @Route("", name="browse")
     */
    public function browse(TemperamentsRepository $temperamentsRepository): Response
    {
        $temperaments = $temperamentsRepository->findAllTemperament();

        
        return $this->json($temperaments);
    }
}
