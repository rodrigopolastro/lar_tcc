<?php
require_once findPath('database/databaseConnection.php');

// ============== SELECT QUERIES ==============
function getAllFurniture(){   
  $sql = "SELECT *
            FROM furniture";
  
  global $connection;
  $result = $connection->query($sql);
  
  if ($result->rowCount() > 0) {
    return $result->fetchAll();
  }
}

// ============== ACTION QUERIES ==============
function getPieceOfFurnitureById($furniture_id){
  $sql = "SELECT * FROM furniture WHERE furniture_id = '$furniture_id'";

  global $connection;
  $results = $connection->query($sql);
    
  return $results->fetch();
}
?>