<?php
  //Absolute path instead of relative one
  require_once $_SERVER['DOCUMENT_ROOT'] . "/lar_tcc/helpers/rootPath.php";
  require_once findPath('models/furnitureQueries.php');

  if(!isset($_SESSION)){ session_start(); }
  if(isset($_POST['operation'])){
    $operation = $_POST['operation'];
    switch ($operation) {
      case 'selectFurniture':
        $house_id  = $_SESSION['house_id'];
        $furniture = getAllFurniture($house_id);
        echo json_encode($furniture);
        break;

      case 'selectFurnitureOfRoom':
        $room_id = $_POST['room_id'];
        $furniture = getFurnitureByRoomId($room_id);
        echo json_encode($furniture);
        break;

      case 'selectPieceOfFurniture':
        $furniture_id = $_POST['furniture_id'];
        $furniture = getPieceOfFurnitureById($furniture_id);
        echo json_encode($furniture);
        break;
      
      case 'insertFurniture':
        $furniture_name     = $_POST['furniture_name'];
        $furniture_image_id = $_POST['furniture_image_id'];
        $room_id            = $_POST['room_id'];

        try {
          $created_furniture_id = createFurniture($furniture_name, $furniture_image_id, $room_id);
          $furniture = getPieceOfFurnitureById($created_furniture_id);

          $response = [
            "is_furniture_created" => true, 
            "value" => $furniture
          ];
        } catch (PDOException $exception) {
          $response = [
            "is_furniture_created" => false, 
            "value" => $exception->getMessage()
          ];
        } finally {
          echo json_encode($response);
        }
        break;

      case 'updateFurniture':
        $furniture_id = $_POST['furniture_id'];
        $furniture_name = $_POST['furniture_name'];
        
        try{
          updateFurniture($furniture_id, $furniture_name);
          $response = ["is_furniture_updated" => true];
        } catch (PDOException $exception){
          $response = [
            "is_furniture_updated" => false, 
            "value" => $exception->getMessage()
          ];
        } finally {
          echo json_encode($response);
        }
        break;  

      case 'deleteFurniture':
        $furniture_id = $_POST['furniture_id'];

        $furnitureDeleted = deleteFurniture($furniture_id);
        if($furnitureDeleted == 1){
          $response = ["is_furniture_deleted" => true];
        } else {
          $response = ["is_furniture_deleted" => false];
        }
        echo json_encode($response);
        break;
      
      case 'deleteAllFurniture':
        $house_id  = $_SESSION['house_id'];
        $furniture = getAllFurniture($house_id);
        foreach ($furniture as $pieceOfFurniture) {
          deleteFurniture($pieceOfFurniture['furniture_id']);
        }
        break;
    }
  }
?>