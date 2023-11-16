<?php
require_once findPath('database/databaseConnection.php');

// ============== SELECT QUERIES ==============
function getUserByEmail($user_email){
  global $connection;
  $statement = $connection->prepare(
    "SELECT 
      fk_house_id,
      user_email,
      user_password,
      first_name,
      last_name
     FROM users
     WHERE user_email = :user_email"
    );  

  $statement->bindValue(':user_email', $user_email);
  $statement->execute();

  $results = $statement->fetch(PDO::FETCH_ASSOC);
  return $results;
}

// ============== ACTION QUERIES ==============
function createUser($fk_house_id, $user_email, $user_password, $first_name, $last_name){
  global $connection;
  $statement = $connection->prepare(
    "INSERT INTO Users
      (fk_house_id, user_email, user_password, first_name, last_name) VALUES 
     (:fk_house_id,:user_email,:user_password,:first_name,:last_name)"
  );
  
  $statement->bindValue(':fk_house_id', $fk_house_id);
  $statement->bindValue(':user_email', $user_email);
  $statement->bindValue(':user_password', $user_password);
  $statement->bindValue(':first_name', $first_name);
  $statement->bindValue(':last_name', $last_name);
  $statement->execute();
}
?>