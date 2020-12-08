<?php

namespace App\Entity;

use App\Repository\DogsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=DogsRepository::class)
 */
class Dogs
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255, options={"default"=0})
     */
    private $avatar;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $dogCondition;

    /**
     * @ORM\Column(type="smallint")
     */
    private $sex;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $age;

    /**
     * @ORM\Column(type="smallint")
     */
    private $castrate;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=Users::class, inversedBy="dogs")
     * @ORM\JoinColumn(nullable=false)
     */
    private $users;

    /**
     * @ORM\ManyToOne(targetEntity=Moods::class, inversedBy="dogs")
     */
    private $mood;

    /**
     * @ORM\ManyToOne(targetEntity=Temperaments::class, inversedBy="dogs")
     */
    private $temperament;

    /**
     * @ORM\ManyToOne(targetEntity=States::class, inversedBy="dogs")
     * @ORM\JoinColumn(nullable=false)
     */
    private $state;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getAvatar(): ?string
    {
        return $this->avatar;
    }

    public function setAvatar(string $avatar): self
    {
        $this->avatar = $avatar;

        return $this;
    }

    public function getDogCondition(): ?int
    {
        return $this->dogCondition;
    }

    public function setDogCondition(?int $dogCondition): self
    {
        $this->dogCondition = $dogCondition;

        return $this;
    }

    public function getSex(): ?int
    {
        return $this->sex;
    }

    public function setSex(int $sex): self
    {
        $this->sex = $sex;

        return $this;
    }

    public function getAge(): ?int
    {
        return $this->age;
    }

    public function setAge(?int $age): self
    {
        $this->age = $age;

        return $this;
    }

    public function getCastrate(): ?int
    {
        return $this->castrate;
    }

    public function setCastrate(int $castrate): self
    {
        $this->castrate = $castrate;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getUsers(): ?Users
    {
        return $this->users;
    }

    public function setUsers(?Users $users): self
    {
        $this->users = $users;

        return $this;
    }

    public function getMood(): ?Moods
    {
        return $this->mood;
    }

    public function setMood(?Moods $mood): self
    {
        $this->mood = $mood;

        return $this;
    }

    public function getTemperament(): ?Temperaments
    {
        return $this->temperament;
    }

    public function setTemperament(?Temperaments $temperament): self
    {
        $this->temperament = $temperament;

        return $this;
    }

    public function getState(): ?States
    {
        return $this->state;
    }

    public function setState(?States $state): self
    {
        $this->state = $state;

        return $this;
    }
}
