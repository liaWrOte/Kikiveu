<?php

namespace App\Form;

use App\Entity\Discussions;
use App\Entity\Users;
use App\Entity\Messages;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class MessageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('body', TextareaType::class, [
                'constraints' => [
                    new NotBlank(),
                ]
            ])
            ->add('users', EntityType::class, [
                'class' => Users::class,
            ])
            ->add('discussion', EntityType::class, [
                'class' => Discussions::class,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Messages::class,
        ]);
    }
}
