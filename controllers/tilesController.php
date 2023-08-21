<?php
  //Absolute path instead of relative one
  require_once $_SERVER['DOCUMENT_ROOT'] . "/htdocsDirectories/lar_tcc/helpers/rootPath.php";
  require_once findPath('models/tilesQueries.php');

  if(isset($_POST['operation'])){
    $operation = $_POST['operation'];
    switch ($operation) {
      case 'selectTiles':
        $placeholderTile = $_POST['placeholderTile'];

        //Select all tiles EXCEPT the placeholder
        $tiles = getAllTiles($placeholderTile);
        echo json_encode($tiles);
        break;     
    }
  }
?>