<?php

namespace App\Service;

use App\ApiModel\AvatarUploadApi;
use App\Entity\Dogs;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Serializer\SerializerInterface;

class UploadFile
{
    private $em;
    private $kernel;
    private $serializer;

    public function __construct(EntityManagerInterface $em, KernelInterface $kernel, SerializerInterface $serializer)
    {
        $this->em = $em;
        $this->kernel = $kernel;
        $this->serializer = $serializer;
    }

    public static function cleanArray($dogArray)
    {
        $filenameExist = array_key_exists('filename', $dogArray);
        $dataExist = array_key_exists('data', $dogArray);

        if ($filenameExist === true && $dataExist === true) {
            unset($dogArray['filename']);
            unset($dogArray['data']);
        }

        return $dogArray;
    }

    public function saveUpload($json, Dogs $dogs)
    {
        $uploadApiModel = $this->serializer->deserialize(
            $json,
            AvatarUploadApi::class,
            'json'
        );

        file_put_contents($this->kernel->getProjectDir() . '/public/avatar/' . $uploadApiModel->filename, base64_decode($uploadApiModel->data));
        $dogs->setAvatar($uploadApiModel->filename);
        $this->em->flush();

        return $dogs;
    }
}
