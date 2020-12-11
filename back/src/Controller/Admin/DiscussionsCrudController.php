<?php

namespace App\Controller\Admin;

use App\Entity\Discussions;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class DiscussionsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Discussions::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),
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
