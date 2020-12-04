<?php

namespace App\Entity;

use App\Repository\CommentsRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CommentsRepository::class)
 */
class Comments
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"show_comment"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"show_comment"})
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     * @Groups({"show_comment"})
     */
    private $body;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"show_comment"})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"show_comment"})
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=Users::class, inversedBy="comments")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"show_comment"})
     */
    private $users;

    /**
     * @ORM\ManyToOne(targetEntity=Events::class, inversedBy="comments")
     * @ORM\JoinColumn(nullable=false)
     */
    private $events;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getBody(): ?string
    {
        return $this->body;
    }

    public function setBody(string $body): self
    {
        $this->body = $body;

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

    public function getEvents(): ?Events
    {
        return $this->events;
    }

    public function setEvents(?Events $events): self
    {
        $this->events = $events;

        return $this;
    }
}
