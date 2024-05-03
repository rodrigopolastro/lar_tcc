<?php
  //Absolute path instead of relative one
  require_once $_SERVER['DOCUMENT_ROOT'] . "/myDirectories/lar_tcc/helpers/rootPath.php";
  require_once findPath('models/tasksQueries.php');

  if(!isset($_SESSION)){ session_start(); }
  if(isset($_POST['operation'])){
    $operation = $_POST['operation'];
    switch ($operation) {
      case 'selectTasks':
        $room_id = $_POST['room_id'];
        $due_date = $_POST['due_date'];
        $house_id = $_SESSION['house_id'];

        try{
          if($room_id == "noRoom"){ $filtered_tasks = getTasksWithNoRoom($due_date, $house_id); }
                             else { $filtered_tasks = getTasks($room_id, $due_date, $house_id); }           
          $response = [
            "is_query_successful" => true,
            "value" => $filtered_tasks
          ];
        } catch (PDOException $exception){
          $response = [
            "is_query_successful" => false,
            "value" => $exception->getMessage()
          ];
        } finally {
          echo json_encode($response);
        }       
        break;
  
      case 'selectTask':
        $task_id = $_POST['task_id'];
        $task = getTaskById($task_id);
        echo json_encode($task);
        break;
      
      case 'insertTask':
        $due_date = $_POST['due_date'];
        $room_id  = $_POST['room_id'];

        if($due_date == "any"){ $due_date = null; }
        if($room_id  == "any" || $room_id == "noRoom"){ $room_id = null; }

        //New tasks are created according to the current filters applied.
        //This will be implemented using AJAX, but for now everything is null
        $task = [
          "task_name"        => 'Nova Tarefa',
          "task_description" => null,
          "due_date"         => $due_date,
          "due_time"         => null,
          "is_completed"     => FALSE,
          "fk_house_id"      => $_SESSION['house_id'],
          "fk_room_id"       => $room_id,
          "fk_furniture_id"  => null
        ];

        $task_id = createTask($task);
        $created_task = getTaskById($task_id);
        echo json_encode($created_task);
        break;
  
      case 'updateTask':
        $task = [
          "task_id"          => $_POST['task_id'],
          "task_name"        => $_POST['task_name'],
          "task_description" => $_POST['task_description'],
          "due_date"         => $_POST['due_date'],
          "due_time"         => $_POST['due_time'],
          "fk_room_id"       => $_POST['room_id'],
          "fk_furniture_id"  => $_POST['furniture_id']
        ];

        if($_POST['room_id'] == "noRoom"){ 
          $task['fk_room_id'] = null; 
        }
        if($_POST['furniture_id'] == "noFurniture"){ 
          $task['fk_furniture_id'] = null; 
        }
        if(empty($_POST['due_date'])){ 
          $task['due_date'] = null; 
        }
        if(empty($_POST['due_time'])){ 
          $task['due_time'] = null; 
        }

        updateTask($task);
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