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

function createHouse(){
  $default_diagram_positions = '{ 
    "tiles":{}, 
    "walls":{
      "startingPositions": {},
      "allPositions": {}
    }, 
    "furniture":{
      "startingPositions": {},
      "allPositions": {}
    }, 
    "topWalls":{} 
  }';

  global $connection;
  $statement = $connection->prepare(
    "INSERT INTO Houses(diagram_positions, diagram_image) VALUES 
      (:default_diagram_positions, '')"
  );
  
  $statement->bindValue(':default_diagram_positions', $default_diagram_positions);
  $statement->execute();

  return $connection->lastInsertId();
}
?>