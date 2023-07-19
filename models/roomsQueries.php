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

// ============== ACTION QUERIES ==============
function getRoomById($room_id){
  $sql = "SELECT * FROM rooms WHERE room_id = '$room_id'";

  global $connection;
  $results = $connection->query($sql);
    
  return $results->fetch();
}
?>