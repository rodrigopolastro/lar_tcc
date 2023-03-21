<?php
require_once "./model/databaseConnection.php";

function getAllRooms(){
  global $connection;

  $sql = "SELECT *
          FROM rooms";

  $result = $connection->query($sql);

  if ($result->rowCount() > 0) {
    return $result->fetchAll();
  }
}

function getAllFurniture(){
  global $connection;

  $sql = "SELECT *
          FROM furniture";

  $result = $connection->query($sql);

  if ($result->rowCount() > 0) {
    return $result->fetchAll();
  }
}

?>
