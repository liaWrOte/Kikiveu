<?php

namespace App\Controller\Admin;

use App\Entity\Users;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UsersCrudController extends AbstractCrudController
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public static function getEntityFqcn(): string
    {
        return Users::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),
            TextField::new('pseudo'),
            EmailField::new('email'),
            ChoiceField::new('roles')
                ->setChoices([
                    'Membre' => 'ROLE_USER',
                    'Administrateur' => 'ROLE_ADMIN',
                ])
                ->allowMultipleChoices()
            ,
            SlugField::new('slug')->onlyOnForms()->setTargetFieldName('pseudo'),
            TextField::new('plainPassword')->onlyOnForms(),
            DateTimeField::new('createdAt')->onlyOnIndex(),
            DateTimeField::new('updatedAt')->onlyOnIndex(),
        ];
    }

    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        if ($entityInstance->getPlainPassword() !== null) {
            $encodedPassword = $this->passwordEncoder->encodePassword($entityInstance, $entityInstance->getPlainPassword());
            $entityInstance->setPassword($encodedPassword);
        }
        $entityInstance->setUpdatedAt(new \DateTime());
        parent::updateEntity($entityManager, $entityInstance);
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        $encodedPassword = $this->passwordEncoder->encodePassword($entityInstance, $entityInstance->getPlainPassword());
        $entityInstance->setPassword($encodedPassword);
        parent::persistEntity($entityManager, $entityInstance);
    }
}
