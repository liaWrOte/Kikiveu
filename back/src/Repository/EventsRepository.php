<?php

namespace App\Repository;

use App\Entity\Events;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\EntityManagerInterface;

/**
 * @method Events|null find($id, $lockMode = null, $lockVersion = null)
 * @method Events|null findOneBy(array $criteria, array $orderBy = null)
 * @method Events[]    findAll()
 * @method Events[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EventsRepository extends ServiceEntityRepository
{
    private $em;

    public function __construct(ManagerRegistry $registry, EntityManagerInterface $em)
    {
        parent::__construct($registry, Events::class);
        $this->em = $em;
    }

    /**
     * @return Events[] Returns an array of Events objects
     */
    public function findEvents()
    {
        return $this->createQueryBuilder('e')
            ->select('e.id as eventId')
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
            ->getQuery()
            ->getResult()
        ;
    }

    public function findEventById($id)
    {
        return $this->createQueryBuilder('e')
            ->select('e.id as eventId')
            ->addSelect('e.eventLat')
            ->addSelect('e.eventLong')
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
            ->where('e.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getResult()
        ;
    }

    public function findEventByLocalisation(float $swLat, float $swLong, float $neLat, float $neLong)
    {
        return $this->createQueryBuilder('e')
            ->select('e.id as eventId')
            ->addSelect('e.description as eventDescription')
            ->addSelect('e.slug as eventSlug')
            ->addSelect('e.eventLat')
            ->addSelect('e.eventLong')
            ->leftJoin('e.users', 'u')
            ->addSelect('u.id as userId')
            ->leftJoin('u.dogs', 'd')
            ->addSelect('d.avatar as dogAvatar')
            ->where('e.eventLat BETWEEN :swLat AND :neLat')
            ->andWhere('e.eventLong BETWEEN :swLong AND :neLong')
            ->setParameters(array(
                'swLat' => $swLat,
                'neLat' => $neLat,
                'swLong' => $swLong,
                'neLong' => $neLong
            ))
            ->getQuery()
            ->getResult()
        ;
    }

    public function testSql(float $swLat, float $swLong, float $neLat, float $neLong)
    {
        $query = $this->em->createQuery("
            SELECT 
                events.id as eventId,
                max_participant,
                description,
                duration,
                events.slug as eventSlug,
                events.createdAt,
                events_lat as eventLat,
                events_long as eventLong,
        
                GROUP_CONCAT(tags.id) as tag_concat_id,
                GROUP_CONCAT(tags.name) as tag_concat_name
            FROM events
            LEFT JOIN events_tags ON events.id = events_tags.events_id
            LEFT JOIN tags ON events_tags.tags_id = tags.id
            WHERE event.lat BETWEEN :swLat AND :neLat
            AND
            WHERE event.long BETWEEN :swLong AND :neLong
            GROUP BY events.id
        ")
        ->setParameters(array(
            'swLat' => $swLat,
            'neLat' => $neLat,
            'swLong' => $swLong,
            'neLong' => $neLong
        ))
        ;
        
        return $query->getResult();
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
