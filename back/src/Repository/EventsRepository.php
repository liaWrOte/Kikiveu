<?php

namespace App\Repository;

use App\Entity\Events;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Events|null find($id, $lockMode = null, $lockVersion = null)
 * @method Events|null findOneBy(array $criteria, array $orderBy = null)
 * @method Events[]    findAll()
 * @method Events[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EventsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Events::class);
    }

    /**
     * @return Events[] Returns an array of Events objects
     */
    public function findEvents()
    {
        return $this->createQueryBuilder('e')
            ->select('e.id as eventId')
            ->addSelect('e.name as eventName')
            ->addSelect('e.locate as eventLocation')
            ->addSelect('e.maxParticipant as eventMaxParticipant')
            ->addSelect('e.datetime as eventDatetime')
            ->addSelect('e.duration as eventDuration')
            ->addSelect('e.description as eventDescription')
            ->addSelect('e.slug as eventSlug')
            ->leftJoin('e.users', 'u')
            ->addSelect('u.id as userId')
            ->addSelect('u.pseudo as userPseudo')
            ->leftJoin('u.dogs', 'd')
            ->addSelect('d.id as dogId')
            ->addSelect('d.avatar as dogAvatar')
            ->leftJoin('e.tags', 't')
            ->addSelect('t.id as tagsId')
            ->addSelect('t.name as tagsName')
            ->addSelect('t.picture as tagsPicture')
            ->getQuery()
            ->getResult()
        ;
    }

    public function findEventById($id)
    {
        return $this->createQueryBuilder('e')
            ->select('e.id as eventId')
            ->addSelect('e.name as eventName')
            ->addSelect('e.locate as eventLocation')
            ->addSelect('e.maxParticipant as eventMaxParticipant')
            ->addSelect('e.datetime as eventDatetime')
            ->addSelect('e.duration as eventDuration')
            ->addSelect('e.description as eventDescription')
            ->addSelect('e.slug as eventSlug')
            ->leftJoin('e.users', 'u')
            ->addSelect('u.id as userId')
            ->addSelect('u.pseudo as userPseudo')
            ->leftJoin('u.dogs', 'd')
            ->addSelect('d.id as dogId')
            ->addSelect('d.avatar as dogAvatar')
            ->leftJoin('e.tags', 't')
            ->addSelect('t.id as tagsId')
            ->addSelect('t.name as tagsName')
            ->addSelect('t.picture as tagsPicture')
            ->where('e.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }

    /*
    public function findOneBySomeField($value): ?Events
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
