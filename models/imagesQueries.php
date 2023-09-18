<?php
require_once findPath('database/databaseConnection.php');

// ============== SELECT QUERIES ==============
function getAllFurnitureImages(){ 
  global $connection;
  $statement = $connection->prepare(
    "SELECT * FROM furniture"
  );
  
  $statement->execute();

  $results = $statement->fetchAll(PDO::FETCH_ASSOC);
  return $results;
}

function getAllTiles($placeholder_tile){
  global $connection;
  $statement = $connection->prepare(
    "SELECT 
      tile_id, 
      tile_name 
    FROM tiles 
    WHERE tile_name != :placeholder_tile"
  );

  $statement->bindValue(':placeholder_tile', $placeholder_tile);
  $statement->execute();

  $results = $statement->fetchAll(PDO::FETCH_ASSOC);
  return $results;
}
?>