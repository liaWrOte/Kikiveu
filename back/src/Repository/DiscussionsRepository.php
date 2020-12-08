<?php

namespace App\Repository;

use App\Entity\Discussions;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Discussions|null find($id, $lockMode = null, $lockVersion = null)
 * @method Discussions|null findOneBy(array $criteria, array $orderBy = null)
 * @method Discussions[]    findAll()
 * @method Discussions[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DiscussionsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Discussions::class);
    }

    public function findDiscussionsByUserId($id)
    {
        return $this->createQueryBuilder('d')
            ->select('d.id as discussionsId')
            ->leftJoin('d.users', 'u')
            ->where('u.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getResult()
        ;
    }

    public function findDiscussionsWithParticipant($id)
    {
        return $this->createQueryBuilder('d')
            ->select('d.id as discussionsId')
            ->leftJoin('d.users', 'u')
            ->addSelect('u.id as usersId')
            ->addSelect('u.pseudo as usersPseudo')
            ->where('d.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getResult()
        ;
    }

    /*
    public function findOneBySomeField($value): ?Discussions
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
