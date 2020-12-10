<?php

namespace App\Controller\Admin;

use App\Entity\Comments;
use App\Entity\Discussions;
use App\Entity\Dogs;
use App\Entity\Events;
use App\Entity\Messages;
use App\Entity\Moods;
use App\Entity\States;
use App\Entity\Tags;
use App\Entity\Temperaments;
use App\Entity\Users;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractDashboardController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {
        return parent::index();
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('BackOffice Kikiveu');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linktoDashboard('Dashboard', 'fa fa-home');

        yield MenuItem::section('Accès');
        yield MenuItem::linkToCrud('Users', 'fa fa-users', Users::class);

        yield MenuItem::section('Events');
        yield MenuItem::linkToCrud('Events', 'fa fa-calendar-o', Events::class);
        yield MenuItem::linkToCrud('Comments', 'fa fa-comments-o', Comments::class);
        yield MenuItem::linkToCrud('Tags', 'fas fa-tag', Tags::class);

        yield MenuItem::section('Dogs');
        yield MenuItem::linkToCrud('Dogs', 'fas fa-dog', Dogs::class);
        yield MenuItem::linkToCrud('Temperaments', 'fas fa-brain', Temperaments::class);
        yield MenuItem::linkToCrud('Moods', 'far fa-grin', Moods::class);
        yield MenuItem::linkToCrud('States', 'fas fa-heartbeat', States::class);

        yield MenuItem::section('Users discussions');
        yield MenuItem::linkToCrud('Messages', 'fas fa-envelope-open-text', Messages::class);
        yield MenuItem::linkToCrud('Discussions', 'fa fa-comments-o', Discussions::class);
    }
}
