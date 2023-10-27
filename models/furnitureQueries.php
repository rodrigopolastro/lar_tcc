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

function getFurnitureByRoomId($room_id){ 
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
    INNER JOIN furniture_images ON furniture_image_id = fk_furniture_image_id
    WHERE fk_room_id = :room_id"
  );
  
  $statement->bindValue(':room_id',$room_id);
  $statement->execute();

  $results = $statement->fetchAll(PDO::FETCH_ASSOC);
  return $results;
}

function getPieceOfFurnitureById($furniture_id){
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
    INNER JOIN furniture_images ON furniture_image_id = fk_furniture_image_id
    WHERE furniture_id = :furniture_id"    
  );

  $statement->bindValue(':furniture_id',$furniture_id);
  $statement->execute();

  return $results = $statement->fetch(PDO::FETCH_ASSOC);
}

// ============== ACTION QUERIES ==============
function createFurniture($furniture_name, $fk_furniture_image_id, $fk_room_id){   
  global $connection;
  $statement = $connection->prepare(
    "INSERT INTO furniture (furniture_name, fk_furniture_image_id, fk_room_id) 
               VALUES     (:furniture_name,:fk_furniture_image_id,:fk_room_id)"
    );

  $statement->bindValue(':furniture_name',$furniture_name);
  $statement->bindValue(':fk_furniture_image_id',$fk_furniture_image_id);
  $statement->bindValue(':fk_room_id',$fk_room_id);
  $statement->execute();

  return $connection->lastInsertId();
}

function updateFurniture($furniture_id, $furniture_name){
  global $connection;
  $statement = $connection->prepare(
    "UPDATE furniture SET furniture_name = :furniture_name
     WHERE furniture_id = :furniture_id"
    );  

  $statement->bindValue(':furniture_id',$furniture_id);
  $statement->bindValue(':furniture_name',$furniture_name);
  $statement->execute();
}

function deleteFurniture($furniture_id){
  global $connection;
  $statement = $connection->prepare(
    "DELETE FROM furniture WHERE furniture_id = :furniture_id"
    );

  $statement->bindValue(':furniture_id', $furniture_id);
  $statement->execute();

  return $statement->rowCount();
}

function deleteAllFurniture(){
  global $connection;
  $statement = $connection->prepare(
    "DELETE FROM furniture"
    );

  $statement->execute();
}
?>