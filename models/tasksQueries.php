<?php
require_once findPath('database/databaseConnection.php');

// ============== SELECT QUERIES ==============
function getTasks($fk_room_id, $due_date){
  global $connection;
  $statement = $connection->prepare(
    // If parameter is NULL, select all;
    // If parameter IS NOT NULL, select WHERE field = parameter.
    "SELECT * FROM tasks 
    WHERE (:fk_room_id IS NULL OR fk_room_id = :fk_room_id) 
    AND   (:due_date IS NULL OR due_date = :due_date)"
    );

  $statement->bindValue(':fk_room_id', $fk_room_id);
  $statement->bindValue(':due_date', $due_date);
  $statement->execute();
  
  $results = $statement->fetchAll(PDO::FETCH_ASSOC); #Return array indexed by column (only)
  return $results;
}

function getTaskById($task_id){
  global $connection;
  $statement = $connection->prepare(
    "SELECT * FROM tasks WHERE task_id = :task_id"
    );

  $statement->bindValue(':task_id',$task_id);
  $statement->execute();

  $results = $statement->fetch(PDO::FETCH_ASSOC); #Return array indexed by column (only)
  return $results;
}

function countTasks($fk_room_id, $due_date){
  global $connection;
  $statement = $connection->prepare(
    // For counting completed tasks, only count task_id if the expression is satisfied,
    // otherwise count NULL
    "SELECT 
      COUNT(task_id) AS all_tasks, 
      COUNT(IF(is_completed = TRUE, task_id, NULL)) AS completed_tasks
    FROM tasks
    WHERE (:fk_room_id IS NULL OR fk_room_id = :fk_room_id) 
    AND   (:due_date IS NULL OR due_date = :due_date)" 
    );

  $statement->bindValue(':fk_room_id', $fk_room_id);
  $statement->bindValue(':due_date', $due_date);
  $statement->execute();

  $results = $statement->fetch(PDO::FETCH_ASSOC); #Return array indexed by column (only)
  return $results;
}

  // ============== ACTION QUERIES ==============
function createTask($task_name, $task_description, $due_date, $due_time, $is_completed, $fk_house_id, $fk_room_id, $fk_furniture_id){   
  global $connection;
  $statement = $connection->prepare(
    "INSERT INTO tasks (task_name, task_description, due_date, due_time, is_completed, fk_house_id, fk_room_id, fk_furniture_id)  
               VALUES (:task_name,:task_description,:due_date,:due_time,:is_completed,:fk_house_id,:fk_room_id,:fk_furniture_id)"
    );

  $statement->bindValue(':task_name',$task_name);
  $statement->bindValue(':task_description',$task_description);
  $statement->bindValue(':due_date',$due_date);
  $statement->bindValue(':due_time',$due_time);
  $statement->bindValue(':is_completed',$is_completed);
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