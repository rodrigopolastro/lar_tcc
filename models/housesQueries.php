<?php
require_once findPath('database/databaseConnection.php');

// ============== SELECT QUERIES ==============
function getHouseDiagram($house_id){
  global $connection;
  $statement = $connection->prepare(
    "SELECT 
      diagram_positions,
      diagram_image
     FROM houses
     WHERE house_id = :house_id"
    );  

  $statement->bindValue(':house_id', $house_id);
  $statement->execute();

  $results = $statement->fetch(PDO::FETCH_ASSOC);
  return $results;
}

// ============== ACTION QUERIES ==============
function updateDiagramPositions($house_id, $diagram_positions, $diagram_image){
  global $connection;
  $statement = $connection->prepare(
    "UPDATE houses SET
      diagram_positions = :diagram_positions,
      diagram_image     = :diagram_image
    WHERE house_id = :house_id"
    );  

  $statement->bindValue(':diagram_positions', $diagram_positions);
  $statement->bindValue(':diagram_image', $diagram_image);
  $statement->bindValue(':house_id', $house_id);
  $statement->execute();
}
?>