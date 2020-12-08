<?php

namespace App\EventListener;

use App\Entity\Users;
use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;

class AuthenticationSuccessListener
{

    /**
     * @param AuthenticationSuccessEvent $event
     */
    public function onAuthenticationSuccessResponse(AuthenticationSuccessEvent $event)
    {
        // dd($event->getResponse());
        $data = $event->getData(); //token
        $user = $event->getUser(); // récupère les infos de l'utilisateur
        if (!$user instanceof Users) {
            return;
        }
        $data['id'] = $user->getId();
        $data['email'] = $user->getEmail();
        $data['pseudo'] = $user->getPseudo();
        $data['logged'] = true;
        
        $event->setData($data);
    }
}
