<?php
require_once findPath('database/databaseConnection.php');

// ============== SELECT QUERIES ==============
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

function getDiagramPositions($house_id){
  global $connection;
  $statement = $connection->prepare(
    "SELECT diagram_positions
     FROM houses
     WHERE house_id = :house_id"
    );  

  $statement->bindValue(':house_id', $house_id);
  $statement->execute();

  $results = $statement->fetch(PDO::FETCH_ASSOC);
  return $results;
}

function updateDiagramPositions($house_id, $diagram_positions){
  global $connection;
  $statement = $connection->prepare(
    "UPDATE houses SET
      diagram_positions  = :diagram_positions
    WHERE house_id = :house_id"
    );  

  $statement->bindValue(':diagram_positions', $diagram_positions);
  $statement->bindValue(':house_id', $house_id);
  $statement->execute();
}
?>