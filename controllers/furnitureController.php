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
        
        break;

      case 'updateFurniture':
        break;  

      case 'deleteFurniture':
        break;
    }
  }
?>