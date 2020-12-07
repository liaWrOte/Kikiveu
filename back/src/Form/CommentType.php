<?php

namespace App\Form;

use App\Entity\Comments;
use App\Entity\Events;
use App\Entity\Users;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
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
            ->add('userId', CollectionType::class, [
                'entry_type' => EntityType::class,
                'entry options' => ['class' => Users::class],
                'allow add' => true,
                'by_reference' => false,
            ])
           /*  ->add('eventId', CollectionType::class, [
                'entry_type' => EntityType::class,
                'entry options' => ['class' => Events::class],
                'allow add' => true,
                'by_reference' => false,
            ]) */
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Comments::class,
        ]);
    }
}
