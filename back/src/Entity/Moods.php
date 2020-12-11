<?php

namespace App\Entity;

use App\Repository\MoodsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity(repositoryClass=MoodsRepository::class)
 */
class Moods
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"add_dogs"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $name;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity=Dogs::class, mappedBy="mood")
     */
    private $dogs;

    public function __construct()
    {
        $this->dogs = new ArrayCollection();
        $this->createdAt = new \DateTime();
    }

    public function __toString()
    {
        return (string) $this->name;
    }

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

    /**
     * @return Collection|Dogs[]
     */
    public function getDogs(): Collection
    {
        return $this->dogs;
    }

    public function addDog(Dogs $dog): self
    {
        if (!$this->dogs->contains($dog)) {
            $this->dogs[] = $dog;
            $dog->setMood($this);
        }

        return $this;
    }

    public function removeDog(Dogs $dog): self
    {
        if ($this->dogs->removeElement($dog)) {
            // set the owning side to null (unless already changed)
            if ($dog->getMood() === $this) {
                $dog->setMood(null);
            }
        }

        return $this;
    }
}
