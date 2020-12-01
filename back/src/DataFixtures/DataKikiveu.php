<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Nelmio\Alice\Loader\NativeLoader;

class DataKikiveu extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $loader = new NativeLoader();
        
        $entities = $loader->loadFile(__DIR__ . '/fixtures.yaml')->getObjects();
        
        //empile la liste d'objet à enregistrer en BDD
        foreach ($entities as $entity) {
            $manager->persist($entity);
        }
        $manager->flush();
    }
}