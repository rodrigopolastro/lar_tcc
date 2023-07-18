<?php
  //Absolute path instead of relative one
  require_once $_SERVER['DOCUMENT_ROOT'] . "/htdocsDirectories/lar_tcc/helpers/rootPath.php";
  require_once findPath('models/roomsQueries.php');

  if(isset($_POST['operation'])){
    $operation = $_POST['operation'];
    switch ($operation) {
      case 'selectRoom':
        break;
      
      case 'insertRoom':
        break;

      case 'updateRoom':
        break;  

      case 'deleteRoom':
        break;
    }
  }
?>