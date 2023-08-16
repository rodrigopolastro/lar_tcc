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

        if($room_id == "noRoom"){ 
          $filtered_tasks = getTasksWithNoRoom($due_date); 
        } else {
          $filtered_tasks = getTasks($room_id, $due_date);
        }
        
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
        $house_id         = 1;
        $room_id          = null;
        $furniture_id     = null;
        createTask(
          $task_name, 
          $task_description, 
          $due_date, 
          $due_time,
          $is_completed,
          $house_id, 
          $room_id, 
          $furniture_id
        );
        break;
  
      case 'updateTask':
        $task_id          = $_POST['task_id'];
        $task_name        = $_POST['task_name'];
        $task_description = $_POST['task_description'];
        $due_date         = $_POST['due_date'];
        $due_time         = $_POST['due_time'];
        $house_id      = 1;
        $room_id       = $_POST['room_id'];
        $furniture_id  = $_POST['furniture_id'];
        
        if($room_id == "no-room"){ $room_id = null; }
        if($furniture_id == "no-furniture"){ $furniture_id = null; }
        if(empty($due_date)){ $due_date = null; }
        if(empty($due_time)){ $due_time = null; }
        updateTask(
          $task_id,
          $task_name, 
          $task_description, 
          $due_date, 
          $due_time,
          $house_id, 
          $room_id, 
          $furniture_id
          // 70, 'mudadaDenovo', 'outra descrição', '2023-07-19', null, 1, 1, 1
        );
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