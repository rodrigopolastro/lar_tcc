<?php
require_once findPath('database/databaseConnection.php');

// ============== SELECT QUERIES ==============
function getUser($user_email, $user_password){
  global $connection;
  $statement = $connection->prepare(
    "SELECT 
      fk_house_id,
      user_email,
      user_password,
      first_name,
      last_name
     FROM users
     WHERE user_email = :user_email AND user_password = :user_password"
    );  

  $statement->bindValue(':user_email', $user_email);
  $statement->bindValue(':user_password', $user_password);
  $statement->execute();

  $results = $statement->fetch(PDO::FETCH_ASSOC);
  return $results;
}

// ============== ACTION QUERIES ==============
?>