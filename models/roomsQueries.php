<?php
require_once findPath('database/databaseConnection.php');

// ============== SELECT QUERIES ==============
function getAllRooms(){
  global $connection;
  $statement = $connection->prepare(
    "SELECT 
      room_id, 
      room_name, 
      tile_name 
    FROM rooms
    INNER JOIN tiles ON tiles.tile_id = rooms.fk_tile_id"
  );

  $statement->execute();

  $results = $statement->fetchAll(PDO::FETCH_ASSOC);
  return $results;
}

function getRoomById($room_id){
  $sql = "SELECT * FROM rooms WHERE room_id = '$room_id'";
  
  global $connection;
  $results = $connection->query($sql);
  
  return $results->fetch();
}
// ============== ACTION QUERIES ==============
function createRoom($room_name, $fk_tile_id, $fk_house_id){   
  global $connection;
  $statement = $connection->prepare(
    "INSERT INTO rooms (room_name, fk_tile_id, fk_house_id) 
               VALUES (:room_name,:fk_tile_id,:fk_house_id)"
    );

  $statement->bindValue(':room_name',$room_name);
  $statement->bindValue(':fk_tile_id',$fk_tile_id);
  $statement->bindValue(':fk_house_id',$fk_house_id);
  $statement->execute();

  return $connection->lastInsertId();
}

function deleteRoom($room_id){
  global $connection;
  $statement = $connection->prepare(
    "DELETE FROM rooms WHERE room_id = :room_id"
    );

  $statement->bindValue(':room_id', $room_id);
  $statement->execute();
}
?>