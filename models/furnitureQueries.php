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
      default_room_name
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
function createFurniture($furniture_name, $fk_furniture_image_id){   
  global $connection;
  $statement = $connection->prepare(
    "INSERT INTO furniture (furniture_name, fk_furniture_image_id) 
               VALUES     (:furniture_name,:fk_furniture_image_id)"
    );

  $statement->bindValue(':furniture_name',$furniture_name);
  $statement->bindValue(':fk_furniture_image_id',$fk_furniture_image_id);
  $statement->execute();

  return $connection->lastInsertId();
}
?>