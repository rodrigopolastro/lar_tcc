<?php
//Absolute path instead of relative one
require_once $_SERVER['DOCUMENT_ROOT'] . "/htdocsDirectories/lar_tcc/helpers/rootPath.php";
require_once findPath('models/tasksQueries.php');

  // Using 'filter_input' instead of the array $_GET because the code breaks when the array is empty
  $operation = filter_input(INPUT_GET, 'operation');
  $task_id   = filter_input(INPUT_GET, 'task_id');

  if($operation == 'selectTasks'){
    $tasks = getAllTasks();
  }
  
  if($operation == 'editTask'){
    $task = getTaskById($task_id);
  }

  if($operation == 'newTask'){
    if(isset($task_id)){
      $task = getTaskById($task_id);
    }
  }

  if($operation == 'deleteTask'){
    if(isset($task_id)){
      deleteTask($task_id);
      $tasks = getAllTasks();
    }
  }

  if($operation == 'createTask'){
    $task_name           = $_POST['task_name'];
    $task_description    = $_POST['task_description'];
    $due_date            = $_POST['due_date'];
    $fk_house_id         = $_POST['select_house_id'];
    $fk_room_id          = $_POST['select_room_id'];
    $fk_furniture_id     = $_POST['select_furniture_id'];

    //IDEA: create an array with all these values and just iterate it on the other side
    createTask($task_name, $task_description, $due_date, $fk_house_id, $fk_room_id, $fk_furniture_id);
    $tasks = getAllTasks();
  }

  if($operation == 'updateTask'){

    //task_id is already set through 'get' request
    $task_name           = $_POST['task_name'];
    $task_description    = $_POST['task_description'];
    $due_date            = $_POST['due_date'];
    $fk_house_id         = $_POST['select_house_id'];
    $fk_room_id          = $_POST['select_room_id'];
    $fk_furniture_id     = $_POST['select_furniture_id'];

    updateTask($task_id, $task_name, $task_description, $due_date, $fk_house_id, $fk_room_id, $fk_furniture_id);
    $tasks = getAllTasks();
  }
  
?>