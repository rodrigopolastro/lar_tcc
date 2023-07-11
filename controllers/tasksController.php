<?php
  //Absolute path instead of relative one
  require_once $_SERVER['DOCUMENT_ROOT'] . "/htdocsDirectories/lar_tcc/helpers/rootPath.php";
  require_once findPath('models/tasksQueries.php');

  switch ($operation) {
    case 'selectTask':
      break;
    
    case 'insertTask':
      //New tasks are created according to the current filters applied.
      //This will be implemented using AJAX, but for now everything is null
      $task_name = 'Nova tarefa';
      $task_description = null;
      $due_date         = null;
      $fk_house_id      = null;
      $fk_room_id       = null;
      $fk_furniture_id  = null;
      createTask(
        $task_name, 
        $task_description, 
        $due_date, 
        $fk_house_id, 
        $fk_room_id, 
        $fk_furniture_id
      );
      break;

    case 'updateTask':
      break;  

    case 'deleteTask':
      break;

    default:
      $tasks = getAllTasks();
  }
?>