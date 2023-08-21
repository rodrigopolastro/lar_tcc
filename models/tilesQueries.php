<?php
require_once findPath('database/databaseConnection.php');

// ============== SELECT QUERIES ==============
function getAllTiles($placeholderTile){
  global $connection;
  $statement = $connection->prepare(
    "SELECT 
      tile_id, 
      tile_name 
    FROM tiles 
    WHERE tile_name != :placeholderTile"
  );

  $statement->bindValue(':placeholderTile', $placeholderTile);
  $statement->execute();

  $results = $statement->fetchAll(PDO::FETCH_ASSOC);
  return $results;
}
?>