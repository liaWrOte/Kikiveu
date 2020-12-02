<?php

namespace App\Form;

use App\Entity\Users;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Email;

class UserEditType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {  // TODO checker les contraintes
        $builder
            ->add('email', EmailType::class, [
                'constraints' => [
                    new Email,
                    new NotBlank,
                ],
            ])
            ->add('firstname', null, [
                'constraints' => new NotBlank,
            ])
            ->add('lastname', null, [
                'constraints' => new NotBlank,
            ])
            ->add('pseudo', null, [
                'constraints' => new NotBlank,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Users::class,
        ]);
    }
}
