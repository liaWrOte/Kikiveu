<?php

namespace App\Form;

use App\Entity\Dogs;
use App\Entity\Moods;
use App\Entity\States;
use App\Entity\Temperaments;
use App\Entity\Users;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DogEditType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->addEventListener(FormEvents::PRE_SUBMIT, function (FormEvent $event) {
                $user = $event->getData();
                $form = $event->getForm();
                
                foreach ($user as $key => $value) {
                    if ($key === "users") {
                        $form->add('users', EntityType::class, [
                            'class' => Users::class,
                        ]);
                    }
                    if ($key === "mood") {
                        $form->add('mood', EntityType::class, [
                            'class' => Moods::class,
                        ]);
                    }
                    if ($key === "temperament") {
                        $form->add('temperament', EntityType::class, [
                            'class' => Temperaments::class,
                        ]);
                    }
                    if ($key === "state") {
                        $form->add('state', EntityType::class, [
                            'class' => States::class,
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
            'data_class' => Dogs::class,
        ]);
    }
}
