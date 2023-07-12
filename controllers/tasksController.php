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
      $task_name = 'Nova Tarefa';
      $task_description = null;
      $due_date         = null;
      $due_time         = null;
      $is_completed     = FALSE;
      $fk_house_id      = null;
      $fk_room_id       = null;
      $fk_furniture_id  = null;
      createTask(
        $task_name, 
        $task_description, 
        $due_date, 
        $due_time,
        $is_completed,
        $fk_house_id, 
        $fk_room_id, 
        $fk_furniture_id
      );
      break;

    case 'updateTask':
      break;  

    case 'completeTask':
      $task_id = filter_input(INPUT_POST, 'task_id');
      completeTask($task_id);
      break;

    case 'uncompleteTask':
      $task_id = filter_input(INPUT_POST, 'task_id');
      uncompleteTask($task_id);
      break;

    case 'deleteTask':
      $task_id = filter_input(INPUT_POST, 'task_id');
      deleteTask($task_id);
      break;

    default:
      $tasks = getAllTasks();
  }
?>