<?php
  //Absolute path instead of relative one
  require_once $_SERVER['DOCUMENT_ROOT'] . "/htdocsDirectories/lar_tcc/helpers/rootPath.php";
  require_once findPath('models/tilesQueries.php');

  if(isset($_POST['operation'])){
    $operation = $_POST['operation'];
    switch ($operation) {
      case 'selectTiles':
        $placeholder_tile = $_POST['placeholder_tile'];

        //Select all tiles EXCEPT the placeholder
        $tiles = getAllTiles($placeholder_tile);
        echo json_encode($tiles);
        break;     
        
      case 'updateDiagramPositions':
        $diagram_positions = $_POST['diagram_positions'];
        $house_id = 1;

        updateDiagramPositions($house_id, $diagram_positions);
        break;

      case 'selectDiagramPositions':
        $house_id = 1;

        $query_results = getDiagramPositions($house_id);
        echo $query_results['diagram_positions'];       
    }
  }
?>