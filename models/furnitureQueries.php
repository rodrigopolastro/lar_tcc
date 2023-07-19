<?php
require_once findPath('database/databaseConnection.php');

// ============== SELECT QUERIES ==============
function getAllFurniture(){ 
  global $connection;
  $statement = $connection->query(
    "SELECT * FROM furniture"
  );

  $results = $statement->fetchAll(PDO::FETCH_ASSOC);
  return $results;
}

// ============== ACTION QUERIES ==============
function getPieceOfFurnitureById($furniture_id){
  $sql = "SELECT * FROM furniture WHERE furniture_id = '$furniture_id'";

  global $connection;
  $results = $connection->query($sql);
    
  return $results->fetch();
}
?>