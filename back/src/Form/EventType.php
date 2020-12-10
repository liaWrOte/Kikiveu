<?php

namespace App\Form;

use App\Entity\Events;
use App\Entity\Tags;
use App\Entity\Users;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\PositiveOrZero;
use Symfony\Component\Validator\Constraints\Regex;

class EventType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('maxParticipant', IntegerType::class, [
                'constraints' => [
                    new NotBlank(),
                    new PositiveOrZero(),
                ],
            ])
            ->add('datetime', DateTimeType::class, [
                'widget' => 'single_text',
                'format' => 'dd/MM/yyyy HH:mm',
                'html5' => false,
            ])
            ->add('duration')
            ->add('description')
            ->add('slug', null, [
                'constraints' => [
                    new Regex("#^[a-z]+-?[a-z]+$#"),
                ]
            ])
            ->add('tags', CollectionType::class, [
                'entry_type' => EntityType::class,
                'entry_options' => ['class' => Tags::class],
                'allow_add' => true,
                'by_reference' => false,
            ])
            ->add('users', EntityType::class, [
                'class' => Users::class,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Events::class,
        ]);
    }
}
