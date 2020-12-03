<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Nelmio\Alice\Loader\NativeLoader;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Entity\Users;

class DataKikiveu extends Fixture
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {
        $loader = new NativeLoader();
        
        $entities = $loader->loadFile(__DIR__ . '/fixtures.yaml')->getObjects();
        
        //empile la liste d'objet à enregistrer en BDD
        
        foreach ($entities as $entity) {
            if ($entity instanceof Users) {
                
                $encoded = $this->passwordEncoder->encodePassword($entity, $entity->getPassword());
                $entity->setPassword($encoded);
            }
            $manager->persist($entity);
        }
        $manager->flush();
    }
}