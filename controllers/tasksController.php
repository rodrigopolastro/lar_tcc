<?php
  //Absolute path instead of relative one
  require_once $_SERVER['DOCUMENT_ROOT'] . "/htdocsDirectories/lar_tcc/helpers/rootPath.php";
  require_once findPath('models/tasksQueries.php');

  if(isset($_POST['operation'])){
    $operation = $_POST['operation'];
    switch ($operation) {
      case 'selectTasks':
        $room_id = $_POST['room_id'];
        $due_date = $_POST['due_date'];

        // if(empty($room_id)){ $room_id = null; }
        // if(empty($due_date)){ $due_date = null; }
        if($room_id == "any"){ $room_id = null; }
        if($due_date == "any"){ $due_date = null; }
  
        $filtered_tasks = getTasks($room_id, $due_date);
        echo json_encode($filtered_tasks);
        break;
  
      case 'selectTask':
        $task_id = $_POST['task_id'];
        $task = getTaskById($task_id);
        echo json_encode($task);
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
        $task_id = $_POST['task_id'];
        completeTask($task_id);
        break;
  
      case 'setTaskUncompleted':
        $task_id = $_POST['task_id'];
        setTaskUncompleted($task_id);
        break;
  
      case 'deleteTask':
        $task_id = $_POST['task_id'];
        deleteTask($task_id);
        break;
    }
  } 
?>