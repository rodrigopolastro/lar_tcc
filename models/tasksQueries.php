<?php
require_once findPath('database/databaseConnection.php');

// ============== SELECT QUERIES ==============
function getAllTasks(){
  $sql = "SELECT * FROM tasks";
  
  global $connection;
  $results = $connection->query($sql);
    
  return $results->fetchAll();
}

  function getTaskById($task_id){
    $sql = "SELECT * FROM tasks WHERE task_id = '$task_id'";

    global $connection;
    $results = $connection->query($sql);
      
    return $results->fetch();
  }

  // ============== ACTION QUERIES ==============
function createTask($task_name, $task_description, $due_date, $fk_house_id, $fk_room_id, $fk_furniture_id){   
  $sql = "INSERT INTO tasks (task_name, task_description, due_date, fk_house_id, fk_room_id, fk_furniture_id)  
          VALUES  ('$task_name', '$task_description', '$due_date', '$fk_house_id', '$fk_room_id', '$fk_furniture_id')";
  
  global $connection;
  $connection->prepare($sql)->execute();
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
  $sql = "DELETE FROM tasks WHERE task_id = '$task_id' ";

  global $connection;
  $connection->prepare($sql)->execute();
}

?>