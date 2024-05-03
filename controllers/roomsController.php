<?php
  //Absolute path instead of relative one
  require_once $_SERVER['DOCUMENT_ROOT'] . "/myDirectories/lar_tcc/helpers/rootPath.php";
  require_once findPath('models/roomsQueries.php');

  if(!isset($_SESSION)){ session_start(); }
  if(isset($_POST['operation'])){
    $operation = $_POST['operation'];
    switch ($operation) {
      //==== SELECT QUERIES ====
      case 'selectRooms':
        $house_id = $_SESSION['house_id'];
        $rooms = getAllRooms($house_id);
        echo json_encode($rooms);
        break;

      case 'selectRoom':
        $room_id = $_POST['room_id'];
        $room = getRoomById($room_id);
        echo json_encode($room);
        break;
      
      //==== ACTION QUERIES ====
      case 'insertRoom':
        $room_name = $_POST['room_name'];
        $tile_id   = $_POST['tile_id'];
        $wall_id   = $_POST['wall_id'];
        $house_id  = $_SESSION['house_id'];

        try {
          $created_room_id = createRoom($room_name, $tile_id, $wall_id, $house_id);
          $response = [
            "is_room_created" => true, 
            "value" => $created_room_id
          ];
        } catch (PDOException $exception) {
          $response = [
            "is_room_created" => false, 
            "value" => $exception->getMessage()
          ];
        } finally {
          echo json_encode($response);
        }
        break;

      case 'updateRoom':
        $room_id = $_POST['room_id'];
        $tile_id = $_POST['tile_id'];
        $wall_id = $_POST['wall_id'];
        $room_name = $_POST['room_name'];

        try{
          updateRoom($room_id, $tile_id, $wall_id, $room_name);
          $response = ["is_room_updated" => true];
        } catch (PDOException $exception){
          $response = [
            "is_room_updated" => false, 
            "value" => $exception->getMessage()
          ];
        } finally {
          echo json_encode($response);
        }
        break;  

      case 'deleteRoom':
        $room_id = $_POST['room_id'];

        $roomDeleted = deleteRoom($room_id);
        if($roomDeleted == 1){
          $response = ["is_room_deleted" => true];
        } else {
          $response = ["is_room_deleted" => false];
        }
        echo json_encode($response);
        break;
    }
  }
?>