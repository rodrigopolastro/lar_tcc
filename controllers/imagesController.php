<?php
  //Absolute path instead of relative one
  require_once $_SERVER['DOCUMENT_ROOT'] . "/htdocsDirectories/lar_tcc/helpers/rootPath.php";
  require_once findPath('models/imagesQueries.php');

  if(isset($_POST['operation'])){
    $operation = $_POST['operation'];
    switch ($operation) {
      case 'selectTiles':
        $tiles = getAllTiles();
        echo json_encode($tiles);
        break;     
        
      case 'selectFurnitureImages':
        $furniture_images = getAllFurnitureImages();
        echo json_encode($furniture_images);
        break; 
        
      case 'selectWalls':
        $walls = getAllWalls();
        echo json_encode($walls);
        break;  
    }
  }
?>