<?php
  //Absolute path instead of relative one
  require_once $_SERVER['DOCUMENT_ROOT'] . "/htdocsDirectories/lar_tcc/helpers/rootPath.php";
  require_once findPath('models/housesQueries.php');

  if(isset($_POST['operation'])){
    $operation = $_POST['operation'];
    switch ($operation) {
      case 'selectDiagramPositions':
        $house_id = 1;
        $query_results = getDiagramPositions($house_id);
        echo $query_results['diagram_positions'];
        break;

      case 'updateDiagramPositions':
        $diagram_positions = $_POST['diagram_positions'];
        $house_id = 1;

        updateDiagramPositions($house_id, $diagram_positions);
        break;

    }
  }
?>

