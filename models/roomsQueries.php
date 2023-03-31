<?php
require_once findPath('database/databaseConnection.php');

// ============== SELECT QUERIES ==============
function getAllRooms(){
  $sql = "SELECT *
          FROM rooms";

  global $connection;
  $result = $connection->query($sql);

  if ($result->rowCount() > 0) {
    return $result->fetchAll();
  }
}

// ============== ACTION QUERIES ==============
function getRoomById($room_id){
  $sql = "SELECT * FROM rooms WHERE room_id = '$room_id'";

  global $connection;
  $results = $connection->query($sql);
    
  return $results->fetch();
}
?>