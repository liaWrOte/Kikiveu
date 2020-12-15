<?php

namespace App\Form;

use App\Entity\Users;
use App\Entity\Dogs;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserEditType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->addEventListener(FormEvents::PRE_SUBMIT, function (formEvent $event) {
                $user = $event->getData();
                $form = $event->getForm();

                foreach ($user as $key => $value) {
                    if ($key === "dog") {
                        $form->add('dog', EntityType::class, [
                            'class' => Dogs::class,
                        ]);
                    }
                    $form->add($key);
                }
            })
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Users::class,
        ]);
    }
}
