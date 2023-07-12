<?php
require_once findPath('database/databaseConnection.php');

// ============== SELECT QUERIES ==============
function getAllTasks(){
  global $connection;
  $results = $connection->query(
    "SELECT * FROM tasks"
    );

  return $results->fetchAll();
}

function getTaskById($task_id){
  global $connection;
  $statement = $connection->prepare(
    "SELECT * FROM tasks WHERE task_id = :task_id"
    );

  $statement->bindValue(':task_id',$task_id);
  $statement->execute();

  $results = $statement->fetch();
  return $results;
}

function countTasks(){
  global $connection;
  $results = $connection->query(
    "SELECT COUNT(task_id) FROM tasks;"
    );

  return $results->fetch();
}

  // ============== ACTION QUERIES ==============
function createTask($task_name, $task_description, $due_date, $fk_house_id, $fk_room_id, $fk_furniture_id){   
  global $connection;
  $statement = $connection->prepare(
    "INSERT INTO tasks (task_name, task_description, due_date, fk_house_id, fk_room_id, fk_furniture_id)  
               VALUES (:task_name,:task_description,:due_date,:fk_house_id,:fk_room_id,:fk_furniture_id)"
    );

  $statement->bindValue(':task_name',$task_name);
  $statement->bindValue(':task_description',$task_description);
  $statement->bindValue(':due_date',$due_date);
  $statement->bindValue(':fk_house_id',$fk_house_id);
  $statement->bindValue(':fk_room_id',$fk_room_id);
  $statement->bindValue(':fk_furniture_id',$fk_furniture_id);
  $statement->execute();
}

function updateTask($task_id, $task_name, $task_description, $due_date, $fk_house_id, $fk_room_id, $fk_furniture_id){
  $sql = "UPDATE tasks SET
          task_name = '$task_name',
          task_description = '$task_description',
          due_date = '$due_date', 
          fk_house_id = '$fk_house_id', 
          fk_room_id = '$fk_room_id', 
          fk_furniture_id = '$fk_furniture_id'
          WHERE task_id = '$task_id'";
  
  global $connection;
  $connection->prepare($sql)->execute();
}

function deleteTask($task_id){
  global $connection;
  $statement = $connection->prepare(
    "DELETE FROM tasks WHERE task_id = :task_id"
    );

  $statement->bindValue(':task_id', $task_id);
  $statement->execute();
}

?>