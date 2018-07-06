<?php
namespace App\Action;

use Doctrine\ORM\EntityManager;
use App\Entity\Todo as Todo;

final class TodoAction
{
    private $em;

    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }
    //fetch single todo
    public function fetch($request, $response, $args)
    {
        $todos = $this->em->getRepository('App\Entity\Todo')->findAll();
        $todos = array_map(
            function ($todo) {
                return $todo->getArrayCopy();
            },
            $todos
        );
        return $response->withJSON($todos);
    }
    //fetch multiple todos
    public function fetchOne($request, $response, $args)
    {
        $todo = $this->em->getRepository('App\Entity\Todo')->findBy(array('id' => $args['id']));
        if ($todo) {
            return $response->withJSON($todo[0]->getArrayCopy());
        }
        return $response->withStatus(404, 'No todo found with id '.$args['id']);
    }
    //create todo in database
    public function create($request, $response)
    {
        $allPostPutVars = $request->getParsedBody();
        $title = $allPostPutVars['title'];
        $todo = new Todo;
        $todo->settitle($title);
        $this->em->persist($todo);
        $this->em->flush();

        return $response->withJSON($todo->getArrayCopy());
    }
    //update todo in database
    public function update($request, $response, $args)
    {
        $todo = $this->em->getRepository('App\Entity\Todo')->findBy(array('id' => $args['id']));
        $allPostPutVars = $request->getParsedBody();
        $title = $allPostPutVars['title'];
        
        if ($todo) {
            $todo = $todo[0];
            $todo->settitle($title);
            $this->em->merge($todo);
            $this->em->flush();
            return $response->withJSON($todo->getArrayCopy());
        }
        return $response->withStatus(404, 'No todo found with id '.$args['id']);
    }
    //delete todo from db
    public function delete($request, $response, $args)
    {
        $todo = $this->em->getRepository('App\Entity\Todo')->findBy(array('id' => $args['id']));
        if ($todo) {
            $this->em->remove($todo[0]);
            $this->em->flush();
            return $response->withJSON($todo[0]->getArrayCopy());
        }
        return $response->withStatus(404, 'No todo found with id '.$args['id']);
    }
}