<?php

namespace App\Form;

use App\Entity\Comments;
use App\Entity\Events;
use App\Entity\Users;
use App\Repository\UsersRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class CommentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', null, [
                'constraints' => new NotBlank()
            ])
            ->add('body', TextareaType::class, [
                'constraints' => new NotBlank()
            ])
            ->add('users', EntityType::class, [
                'class' => Users::class,
            ])
           ->add('events', EntityType::class, [
            'class' => Events::class,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Comments::class,
        ]);
    }
}
