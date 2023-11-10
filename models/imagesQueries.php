<?php
require_once findPath('database/databaseConnection.php');

// ============== SELECT QUERIES ==============
function getAllFurnitureImages(){ 
  global $connection;
  $statement = $connection->prepare(
    "SELECT 
      furniture_image_id,
      furniture_image_name,
      furniture_display_name,
      default_room_name,
      tiles_width,
      tiles_height
    FROM furniture_images"
  );
  
  $statement->execute();

  $results = $statement->fetchAll(PDO::FETCH_ASSOC);
  return $results;
}

function getAllTiles(){
  global $connection;
  $statement = $connection->prepare(
    "SELECT 
      tile_id, 
      tile_name 
    FROM tiles" 
  );

  $statement->execute();

  $results = $statement->fetchAll(PDO::FETCH_ASSOC);
  return $results;
}

function getAllWalls(){
  global $connection;
  $statement = $connection->prepare(
    "SELECT 
      wall_id, 
      wall_name 
    FROM walls"
  );

  $statement->execute();

  $results = $statement->fetchAll(PDO::FETCH_ASSOC);
  return $results;
}
?>