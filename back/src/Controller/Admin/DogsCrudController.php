<?php

namespace App\Controller\Admin;

use App\Entity\Dogs;
use App\Entity\Moods;
use App\Entity\States;
use App\Entity\Temperaments;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class DogsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Dogs::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            AssociationField::new('users'),
            TextField::new('name'),
            TextField::new('avatar'),
            ChoiceField::new('sex')
            ->setChoices([
                'Male' => 0,
                'Femelle' => 1,
                ])
            ,
            IntegerField::new('age'),
            ChoiceField::new('castrate')
                ->setChoices([
                    'Castré' => 0,
                    'Entier' => 1,
                ])
                ,
            AssociationField::new('mood'),
            AssociationField::new('temperament'),
            AssociationField::new('state'),
            DateTimeField::new('createdAt')->onlyOnIndex(),
            DateTimeField::new('updatedAt')->onlyOnIndex(),
        ];
    }
    
    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        $entityInstance->setUpdatedAt(new \DateTime());
        parent::updateEntity($entityManager, $entityInstance);
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        $entityInstance->setCreatedAt(new \DateTime());
        parent::persistEntity($entityManager, $entityInstance);
    }
}
