<?php

namespace App\Repository;

use App\Entity\Moods;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Moods|null find($id, $lockMode = null, $lockVersion = null)
 * @method Moods|null findOneBy(array $criteria, array $orderBy = null)
 * @method Moods[]    findAll()
 * @method Moods[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MoodsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Moods::class);
    }

    // /**
    //  * @return Moods[] Returns an array of Moods objects
    //  */
    
    public function findAllMoods()
    {
        return $this->createQueryBuilder('m')
        ->select('m.id')
        ->addSelect('m.name')
        ->getQuery()
        ->getResult()
        ;
    }

    public function findMoodById($id)
    {
        return $this->createQueryBuilder('m')
            ->select('m.id')
            ->addSelect('m.name')
            ->where('m.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getResult()
        ;
    }
    

    /*
    public function findOneBySomeField($value): ?Moods
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
