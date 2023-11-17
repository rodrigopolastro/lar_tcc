<?php
require_once findPath('database/databaseConnection.php');

// ============== SELECT QUERIES ==============
function getTasks($fk_room_id, $due_date){
  global $connection;
  $statement = $connection->prepare(
    // If parameter is 'any', select all;
    // If parameter is has any different value, select WHERE field = parameter.
    "SELECT 
      task_id,
      task_name,
      task_description,
      due_date,
      due_time,
      is_completed,
      room_name,
      furniture_name,
      tasks.fk_furniture_id
    FROM tasks 
    LEFT JOIN rooms ON rooms.room_id = tasks.fk_room_id
    LEFT JOIN furniture ON furniture.furniture_id = tasks.fk_furniture_id
    WHERE (:fk_room_id = 'any' OR tasks.fk_room_id = :fk_room_id) 
    AND   (:due_date = 'any' OR due_date = :due_date)"
    );

  $statement->bindValue(':fk_room_id', $fk_room_id);
  $statement->bindValue(':due_date', $due_date);
  $statement->execute();
  
  $results = $statement->fetchAll(PDO::FETCH_ASSOC); #Return array indexed by column (only)
  return $results;
}

function getTasksWithNoRoom($due_date){
  global $connection;
  $statement = $connection->prepare(
    "SELECT * FROM tasks 
    WHERE (fk_room_id IS NULL)
    AND   (:due_date = 'any' OR due_date = :due_date)"
    );

  $statement->bindValue(':due_date', $due_date);
  $statement->execute();
  
  $results = $statement->fetchAll(PDO::FETCH_ASSOC); #Return array indexed by column (only)
  return $results;
}

function getTaskById($task_id){
  global $connection;
  $statement = $connection->prepare(
    "SELECT 
      task_id,
      task_name,
      task_description,
      due_date,
      due_time,
      is_completed,
      room_name,
      furniture_name,
      tasks.fk_furniture_id,
      room_id
    FROM tasks 
    LEFT JOIN rooms ON rooms.room_id = tasks.fk_room_id
    LEFT JOIN furniture ON furniture.furniture_id = tasks.fk_furniture_id
    WHERE task_id = :task_id"
  );

  $statement->bindValue(':task_id',$task_id);
  $statement->execute();

  $results = $statement->fetch(PDO::FETCH_ASSOC); #Return array indexed by column (only)
  return $results;
}

  // ============== ACTION QUERIES ==============
function createTask($task){   
  global $connection;
  $statement = $connection->prepare(
    "INSERT INTO tasks (task_name, task_description, due_date, due_time, is_completed, fk_house_id, fk_room_id, fk_furniture_id)  
               VALUES (:task_name,:task_description,:due_date,:due_time,:is_completed,:fk_house_id,:fk_room_id,:fk_furniture_id)"
    );

  $statement->bindValue(':task_name',        $task['task_name']);
  $statement->bindValue(':task_description', $task['task_description']);
  $statement->bindValue(':due_date',         $task['due_date']);
  $statement->bindValue(':due_time',         $task['due_time']);
  $statement->bindValue(':is_completed',     $task['is_completed']);
  $statement->bindValue(':fk_house_id',      $task['fk_house_id']);
  $statement->bindValue(':fk_room_id',       $task['fk_room_id']);
  $statement->bindValue(':fk_furniture_id',  $task['fk_furniture_id']);
  $statement->execute();

  return $connection->lastInsertId();
}

function updateTask($task){
  global $connection;
  $statement = $connection->prepare(
    "UPDATE tasks SET
      task_name        = :task_name,
      task_description = :task_description,
      due_date         = :due_date, 
      due_time         = :due_time, 
      fk_room_id       = :fk_room_id, 
      fk_furniture_id  = :fk_furniture_id
    WHERE task_id = :task_id"
    );  

  $statement->bindValue(':task_id',          $task['task_id']);
  $statement->bindValue(':task_name',        $task['task_name']);
  $statement->bindValue(':task_description', $task['task_description']);
  $statement->bindValue(':due_date',         $task['due_date']);
  $statement->bindValue(':due_time',         $task['due_time']);
  $statement->bindValue(':fk_room_id',       $task['fk_room_id']);
  $statement->bindValue(':fk_furniture_id',  $task['fk_furniture_id']);
  $statement->execute();
}

function completeTask($task_id){
  global $connection;
  $statement = $connection->prepare(
    "UPDATE tasks SET is_completed = TRUE WHERE task_id = :task_id"
  );

  $statement->bindValue(':task_id',$task_id);
  $statement->execute();
}

function setTaskUncompleted($task_id){
  global $connection;
  $statement = $connection->prepare(
    "UPDATE tasks SET is_completed = FALSE WHERE task_id = :task_id"
  );

  $statement->bindValue(':task_id',$task_id);
  $statement->execute();
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