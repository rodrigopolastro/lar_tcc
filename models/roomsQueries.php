<?php
require_once findPath('database/databaseConnection.php');

// ============== SELECT QUERIES ==============
function getAllRooms($house_id){
  global $connection;
  $statement = $connection->prepare(
    "SELECT 
      room_id, 
      room_name, 
      fk_tile_id,
      tile_name,
      wall_name
    FROM rooms
    INNER JOIN tiles ON tiles.tile_id = rooms.fk_tile_id
    INNER JOIN walls ON walls.wall_id = rooms.fk_wall_id
    WHERE fk_house_id = :house_id"
  );

  $statement->bindValue(':house_id',$house_id);
  $statement->execute();

  $results = $statement->fetchAll(PDO::FETCH_ASSOC);
  return $results;
}

function getRoomById($room_id){
  global $connection;
  $statement = $connection->prepare(
    "SELECT  
      room_name, 
      tile_name,
      wall_name,
      fk_tile_id,
      fk_wall_id
    FROM rooms
    INNER JOIN tiles ON tiles.tile_id = rooms.fk_tile_id
    INNER JOIN walls ON walls.wall_id = rooms.fk_wall_id
    WHERE room_id = :room_id"
  );

  $statement->bindValue(':room_id',$room_id);
  $statement->execute();

  $results = $statement->fetch(PDO::FETCH_ASSOC);
  return $results;
}
// ============== ACTION QUERIES ==============
function createRoom($room_name, $fk_tile_id, $fk_wall_id, $fk_house_id){   
  global $connection;
  $statement = $connection->prepare(
    "INSERT INTO rooms (room_name, fk_tile_id, fk_wall_id, fk_house_id) 
               VALUES (:room_name,:fk_tile_id,:fk_wall_id,:fk_house_id)"
    );

  $statement->bindValue(':room_name',$room_name);
  $statement->bindValue(':fk_tile_id',$fk_tile_id);
  $statement->bindValue(':fk_wall_id',$fk_wall_id);
  $statement->bindValue(':fk_house_id',$fk_house_id);
  $statement->execute();

  return $connection->lastInsertId();
}

function updateRoom($room_id, $fk_tile_id, $fk_wall_id, $room_name){
  global $connection;
  $statement = $connection->prepare(
    "UPDATE rooms SET
      room_name  = :room_name,
      fk_tile_id = :fk_tile_id,
      fk_wall_id = :fk_wall_id
    WHERE room_id = :room_id"
    );  

  $statement->bindValue(':room_id',$room_id);
  $statement->bindValue(':fk_tile_id',$fk_tile_id);
  $statement->bindValue(':fk_wall_id',$fk_wall_id);
  $statement->bindValue(':room_name',$room_name);
  $statement->execute();
}

function deleteRoom($room_id){
  global $connection;
  $statement = $connection->prepare(
    "DELETE FROM rooms WHERE room_id = :room_id"
    );

  $statement->bindValue(':room_id', $room_id);
  $statement->execute();

  return $statement->rowCount();
}
?>