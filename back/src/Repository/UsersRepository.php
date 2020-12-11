<?php

namespace App\Repository;

use App\Entity\Users;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @method Users|null find($id, $lockMode = null, $lockVersion = null)
 * @method Users|null findOneBy(array $criteria, array $orderBy = null)
 * @method Users[]    findAll()
 * @method Users[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UsersRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Users::class);
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    public function upgradePassword(UserInterface $user, string $newEncodedPassword): void
    {
        if (!$user instanceof Users) {
            throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', \get_class($user)));
        }

        $user->setPassword($newEncodedPassword);
        $this->_em->persist($user);
        $this->_em->flush();
    }

    // /**
    //  * @return Users[] Returns an array of Users objects
    //  */
    
    public function findUsersData()
    {
        return $this->createQueryBuilder('u')
            ->select('u.id as userId')
            ->addSelect('u.pseudo')
            ->addSelect('u.email')
            ->addSelect('u.slug')
            ->addSelect('u.status')
            ->addSelect('u.locate')
            ->getQuery()
            ->getResult()
        ;
    }


    
    public function findById(int $id) 
    {
        return $this->createQueryBuilder('u')
        ->select('u.id')
        ->addSelect('u.pseudo')
        ->where('u.id = ' .$id)
        ->getQuery()
        ->getResult()
        ;
    }

    public function findForComment($id)
    {
        return $this->createQueryBuilder('u')
        ->select('u.id')
        ->addSelect('u.pseudo')
        //->where('u.id = ' .$id)
        ->getQuery()
        ->getResult()
        ;
    }

    public function findDiscussions($id)
    {
        return $this->createQueryBuilder('u')
            ->select('u.id as usersId')
            ->addSelect('u.pseudo as usersPseudo')
            ->leftJoin('u.discussions', 'd')
            ->addSelect('d.id as discussionsId')
            ->where('u.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getResult()
        ;
    }

    public function findUserByLocalisation(float $swLat, float $swLong, float $neLat, float $neLong)
    {
        return $this->createQueryBuilder('u')
            ->select('u.id as userId')
            ->addSelect('u.pseudo as userPseudo')
            ->addSelect('u.slug as userSlug')
            ->leftJoin('u.dogs', 'd')
            ->addSelect('d.avatar as dogAvatar')
            ->where('u.userLat BETWEEN :swLat AND :neLat')
            ->andWhere('u.userLong BETWEEN :swLong AND :neLong')
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
    
}
