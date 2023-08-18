<?php
  //Absolute path instead of relative one
  require_once $_SERVER['DOCUMENT_ROOT'] . "/htdocsDirectories/lar_tcc/helpers/rootPath.php";
  require_once findPath('models/roomsQueries.php');

  if(isset($_POST['operation'])){
    $operation = $_POST['operation'];
    switch ($operation) {
      case 'selectRooms':
        $rooms = getAllRooms();
        echo json_encode($rooms);
        break;

      case 'selectRoom':
        break;
      
      case 'insertRoom':
        $room_name = $_POST['room_name'];
        $tile_name = $_POST['tile_name'];
        $house_id  = 1;

        //TO DO: wrap this block with a if condition:
        //only create a new room if user does not have a room with given name, 
        //so another method is necessary here.
        try {
          $created_room_id = createRoom($room_name, $tile_name, $house_id);
          $is_room_created = true;
          $response = ["is_room_created" => $is_room_created, 
                       "value" => $created_room_id];
        } catch (PDOException $exception) {
          $is_room_created = false;
          $response = ["is_room_created" => $is_room_created, 
                       "value" => $exception->getMessage()];
        } finally {
          echo json_encode($response);
        }
        break;

      case 'updateRoom':
        break;  

      case 'deleteRoom':
        $room_id = $_POST['room_id'];
        deleteRoom($room_id);
        break;
    }
  }
?>