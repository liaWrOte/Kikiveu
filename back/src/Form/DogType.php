<?php

namespace App\Form;

use App\Entity\Dogs;
use App\Entity\Moods;
use App\Entity\States;
use App\Entity\Temperaments;
use App\Entity\Users;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class DogType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', null, [
                'constraints' => [
                    new NotBlank(),
                ],
            ])
            ->add('avatar')
            ->add('sex', IntegerType::class, [
                'constraints' => [
                    new NotBlank()
                ],
            ])
            ->add('age', IntegerType::class)
            ->add('castrate', IntegerType::class, [
                'constraints' => [
                    new NotBlank()
                ],
            ])
            ->add('users', EntityType::class, [
                'class' => Users::class,
            ])
            ->add('mood', EntityType::class, [
                'class' => Moods::class,
            ])
            ->add('temperament', EntityType::class, [
                'class' => Temperaments::class,
            ])
            ->add('state', EntityType::class, [
                'class' => States::class,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Dogs::class,
        ]);
    }
}
