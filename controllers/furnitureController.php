<?php
//Absolute path instead of relative one
require_once $_SERVER['DOCUMENT_ROOT'] . "/htdocsDirectories/lar_tcc/helpers/rootPath.php";
require_once findPath('models/furnitureQueries.php');

  // Using 'filter_input' instead of the array $_GET because the code breaks when the array is empty
  $operation = filter_input(INPUT_GET, 'operation');

  
  if($operation == 'editTask'){
    $furniture = getAllFurniture();
  }
  
  if($operation == 'newTask'){
    $furniture = getAllFurniture();
  }
  
  if ($operation == 'selectAll') {
    $furniture = getAllFurniture();
  }
  ?>