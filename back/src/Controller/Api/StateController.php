<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\StatesRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/state", name="api_v1_state_")
*/
class StateController extends AbstractController
{
    /**
     * @Route("", name="browse")
     */
    public function browse(StatesRepository $statesRepository): Response
    {
        $states = $statesRepository->findAllTemperament();

        
        return $this->json($states);
    }
}
