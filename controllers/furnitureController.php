<?php
  //Absolute path instead of relative one
  require_once $_SERVER['DOCUMENT_ROOT'] . "/htdocsDirectories/lar_tcc/helpers/rootPath.php";
  require_once findPath('models/furnitureQueries.php');

  if(isset($_POST['operation'])){
    $operation = $_POST['operation'];
    switch ($operation) {
      case 'selectFurniture':
        $furniture = getAllFurniture();
        echo json_encode($furniture);
        break;

      case 'selectPieceOfFurniture':
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
        deleteAllFurniture();
        break;
    }
  }
?>