<?php
namespace App\Entity;
//todo entity model for db interaction
use App\Entity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="todos", uniqueConstraints={@ORM\UniqueConstraint(name="title", columns={"title"})}))
 */
class Todo
{
    /**
     * @ORM\Id
     * @ORM\Column(name="id", type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\Column(type="string", length=64)
     */
    protected $title;

    /**
     * Get array copy of object
     *
     * @return array
     */
    public function getArrayCopy()
    {
        return get_object_vars($this);
    }

    /**
     * Get todo id
     *
     * @ORM\return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Get todo name
     *
     * @ORM\return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    public function setTitle($name)
    {
        $this->title = $name;
        return $this;
    }
}