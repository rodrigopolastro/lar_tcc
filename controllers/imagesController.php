<?php
  //Absolute path instead of relative one
  require_once $_SERVER['DOCUMENT_ROOT'] . "/htdocsDirectories/lar_tcc/helpers/rootPath.php";
  require_once findPath('models/imagesQueries.php');

  if(isset($_POST['operation'])){
    $operation = $_POST['operation'];
    switch ($operation) {
      case 'selectTiles':
        $placeholder_tile = $_POST['placeholder_tile'];

        //Select all tiles EXCEPT the placeholder
        $tiles = getAllTiles($placeholder_tile);
        echo json_encode($tiles);
        break;     
        
      case 'selectFurnitureImages':
        $furniture_images = getAllFurnitureImages();
        echo json_encode($furniture_images);
        break;         
    }
  }
?>