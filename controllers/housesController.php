<?php
  //Absolute path instead of relative one
  require_once $_SERVER['DOCUMENT_ROOT'] . "/myDirectories/lar_tcc/helpers/rootPath.php";
  require_once findPath('models/housesQueries.php');

  if(!isset($_SESSION)){ session_start(); }
  if(isset($_POST['operation'])){
    $operation = $_POST['operation'];
    switch ($operation) {
      case 'selectHouseDiagram':
        $house_id = $_SESSION['house_id'];
        $house_data = getHouseDiagram($house_id);
        echo json_encode($house_data);
        break;

      case 'updateDiagramPositions':
        $diagram_positions = $_POST['diagram_positions'];
        $diagram_image     = $_POST['diagram_image'];
        //Replaces empty spaces with + in order to preserve the base_64 encoding
        $diagram_image = str_replace(' ','+',$diagram_image);
        $house_id = $_SESSION['house_id'];

        updateDiagramPositions($house_id, $diagram_positions, $diagram_image);
        break;

    }
  }
?>

