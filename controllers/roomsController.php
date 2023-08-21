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
        $room_id = $_POST['room_id'];
        $room = getRoomById($room_id);
        echo json_encode($room);
        break;
      
      case 'insertRoom':
        $room_name = $_POST['room_name'];
        $tile_id   = $_POST['tile_id'];
        $house_id  = 1;

        //TO DO: Only create a new room if user does not have a room with given name        try {
          $created_room_id = createRoom($room_name, $tile_id, $house_id);
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
        $room_name = $_POST['room_name'];

        try{
          updateRoom($room_id, $tile_id, $room_name);
          $response = ["is_room_updated" => true];
        } catch (PDOException $exception){
          $response = [
            "is_room_updated" => false, 
            "value" => $exception->getMessage()
          ];
        } finally{
          echo json_encode($response);
        }
        break;  

      case 'deleteRoom':
        $room_id = $_POST['room_id'];
        deleteRoom($room_id);
        break;
    }
  }
?>