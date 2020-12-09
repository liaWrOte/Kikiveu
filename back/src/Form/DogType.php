<?php

namespace App\Form;

use App\Entity\Dogs;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class DogType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('avatar')
            ->add('sex')
            ->add('age')
            ->add('castrate')
            ->add('users')
            ->add('mood')
            ->add('temperament')
            ->add('state')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Dogs::class,
        ]);
    }
}
