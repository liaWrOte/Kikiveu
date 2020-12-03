<?php

namespace App\Repository;

use App\Entity\Temperaments;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Temperaments|null find($id, $lockMode = null, $lockVersion = null)
 * @method Temperaments|null findOneBy(array $criteria, array $orderBy = null)
 * @method Temperaments[]    findAll()
 * @method Temperaments[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TemperamentsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Temperaments::class);
    }

    // /**
    //  * @return Temperaments[] Returns an array of Temperaments objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Temperaments
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
