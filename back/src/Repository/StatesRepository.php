<?php

namespace App\Repository;

use App\Entity\States;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method States|null find($id, $lockMode = null, $lockVersion = null)
 * @method States|null findOneBy(array $criteria, array $orderBy = null)
 * @method States[]    findAll()
 * @method States[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StatesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, States::class);
    }

    // /**
    //  * @return States[] Returns an array of States objects
    //  */
    public function findAllTemperament()
    {
        return $this->createQueryBuilder('s')
            ->select('s.id as stateId')
            ->addSelect('s.name as stateName')
            ->getQuery()
            ->getResult()
        ;
    }

    /*
    public function findOneBySomeField($value): ?States
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
