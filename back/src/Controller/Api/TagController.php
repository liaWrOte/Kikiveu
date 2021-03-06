<?php

namespace App\Controller\Api;

use App\Repository\TagsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/v1/tag", name="api_v1_tag_")
*/
class TagController extends AbstractController
{
    /**
     * @Route("", name="browse", methods={"GET"})
     */
    public function browse(SerializerInterface $serializer, TagsRepository $tagsRepository): Response
    {

        $tags = $tagsRepository->findAllTags();

        return $this->json($tags);
    }
}
