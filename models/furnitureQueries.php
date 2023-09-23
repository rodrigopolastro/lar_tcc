<?php
require_once findPath('database/databaseConnection.php');

// ============== SELECT QUERIES ==============
function getAllFurniture(){ 
  global $connection;
  $statement = $connection->prepare(
    "SELECT 
      furniture_id,
      furniture_name,
      furniture_image_name,
      default_room_name,
      tiles_width,
      tiles_height
    FROM furniture
    INNER JOIN furniture_images ON furniture_image_id = fk_furniture_image_id"
  );
  
  $statement->execute();

  $results = $statement->fetchAll(PDO::FETCH_ASSOC);
  return $results;
}

function getPieceOfFurnitureById($furniture_id){
  $sql = "SELECT * FROM furniture WHERE furniture_id = '$furniture_id'";

  global $connection;
  $results = $connection->query($sql);
    
  return $results->fetch();
}
// ============== ACTION QUERIES ==============
?>