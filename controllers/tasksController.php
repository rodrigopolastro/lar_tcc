<?php
  //Absolute path instead of relative one
  require_once $_SERVER['DOCUMENT_ROOT'] . "/htdocsDirectories/lar_tcc/helpers/rootPath.php";
  require_once findPath('models/tasksQueries.php');

  $task_id          = filter_input(INPUT_POST, 'task_id');
  $task_name        = filter_input(INPUT_POST, 'task_name');
  $task_description = filter_input(INPUT_POST, 'task_description');
  $due_date         = filter_input(INPUT_POST, 'due_date');
  $fk_house_id      = filter_input(INPUT_POST, 'fk_house_id');
  $fk_room_id       = filter_input(INPUT_POST, 'fk_room_id');
  $fk_furniture_id  = filter_input(INPUT_POST, 'fk_furniture_id');

  switch ($operation) {
    case 'selectTask':
      break;
    
    case 'insertTask':
      break;

    case 'updateTask':
      break;  

    case 'deleteTask':
      break;

    default:
      $tasks = getAllTasks();
  }
?>