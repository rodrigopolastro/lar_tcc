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
        $tile_path = $_POST['tile_path'];

        $created_room_id = createRoom($room_name, $tile_path);
        echo $created_room_id;
        break;

      case 'updateRoom':
        break;  

      case 'deleteRoom':
        break;
    }
  }
?>