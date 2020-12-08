<?php

namespace App\Repository;

use App\Entity\Dogs;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Dogs|null find($id, $lockMode = null, $lockVersion = null)
 * @method Dogs|null findOneBy(array $criteria, array $orderBy = null)
 * @method Dogs[]    findAll()
 * @method Dogs[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DogsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Dogs::class);
    }

    // /**
    //  * @return Dogs[] Returns an array of Dogs objects
    //  */
    public function findById($id)
    {
        return $this->createQueryBuilder('d')
            ->select("d.id as dogId")
            ->addSelect("d.avatar")
            ->addSelect("d.castrate")
            ->leftjoin('d.mood', 'm')
            ->addSelect("m.id as moodId")
            ->leftjoin('d.state', 's')
            ->addSelect("s.id as stateId")
            ->leftjoin('d.users', 'u')
            ->addSelect('u.pseudo')
            ->where('d.id = ' .$id)
            ->getQuery()
            ->getResult()
        ;
    }

    /*
    public function findOneBySomeField($value): ?Dogs
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
