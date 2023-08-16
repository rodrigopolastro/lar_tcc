<?php
require_once findPath('database/databaseConnection.php');

// ============== SELECT QUERIES ==============
function getAllRooms(){
  global $connection;
  $statement = $connection->query(
    "SELECT * FROM rooms"
  );

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
function createRoom($room_name, $tile_path){   
  global $connection;
  $statement = $connection->prepare(
    "INSERT INTO rooms (room_name, tile_path) 
               VALUES (:room_name,:tile_path)"
    );

  $statement->bindValue(':room_name',$room_name);
  $statement->bindValue(':tile_path',$tile_path);
  $statement->execute();

  return $connection->lastInsertId();
}
?>