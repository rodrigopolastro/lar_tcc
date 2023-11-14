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
  global $connection;
  $statement = $connection->prepare(
    "INSERT INTO Houses(diagram_positions) VALUES ('{
      tiles:{} 
    }')"

    //ERROR: Too many single and double quotes!
    //POSSIBLE SOLUTION: store the default diagram_positions in a string
    //and pass as a parameter in this function from the controller.

    // "INSERT INTO Houses(diagram_positions) VALUES ('{ 
    //   "tiles":{}, 
    //   "furniture":{
    //       "startingPositions": {},
    //       "allPositions": {}
    //   }, 
    //   "walls":{
    //       "startingPositions": {},
    //       "allPositions": {}
    //   }, 
    //   "topWalls":{} 
    // }')"
    );

  $statement->execute();
  return $connection->lastInsertId();
}
?>