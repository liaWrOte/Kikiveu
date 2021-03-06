<?php

namespace App\Repository;

use App\Entity\Comments;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Comments|null find($id, $lockMode = null, $lockVersion = null)
 * @method Comments|null findOneBy(array $criteria, array $orderBy = null)
 * @method Comments[]    findAll()
 * @method Comments[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CommentsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Comments::class);
    }

    // /**
    //  * @return Comments[] Returns an array of Comments objects
    //  */
    
    public function findCommentById($id)
    {
        return $this->createQueryBuilder('c')
            ->select('c.id as commentId')
            ->addSelect('c.body as commentBody')
            ->addSelect('c.createdAt as commentCreatedAt')
            ->addSelect('c.updatedAt as commentUpdatedAt')
            ->leftJoin('c.users', 'u')
            ->addSelect('u.id as userId')
            ->leftJoin('c.events', 'e')
            ->addSelect('e.id as eventId')
            ->where('c.id = ' .$id)
            ->getQuery()
            ->getResult()
        ;
    }
    
    public function findAllByEventId($id)
    {
        return $this->createQueryBuilder('c')
            ->select('c.id as commentId')
            ->addSelect('c.body')
            ->addSelect('c.createdAt')
            ->leftJoin('c.users', 'u')
            ->addSelect('u.id as userId')
            ->addSelect('u.pseudo as userPseudo')
            ->leftJoin('u.dogs', 'd')
            ->addSelect('d.avatar as dogsAvatar')
            ->leftJoin('c.events', 'e')
            ->addSelect('e.id as eventId')
            ->where('e.id = ' .$id)
            ->getQuery()
            ->getResult()
        ;
    }
    
    /* public function find()
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    } */
    
}
