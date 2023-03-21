<?php
require_once "./model/databaseConnection.php";

$results = [];

$task_name           = $_POST['task_name'];
$task_description    = $_POST['task_description'];
$due_date            = $_POST['due_date'];
$fk_house_id         = $_POST['select_house_id'];
$fk_room_id          = $_POST['select_room_id'];
$fk_furniture_id     = $_POST['select_furniture_id'];

$sql = "INSERT INTO tasks (task_name, task_description, due_date, fk_house_id, fk_room_id, fk_furniture_id)  
        VALUES  ('$task_name', '$task_description', '$due_date', '$fk_house_id', '$fk_room_id', '$fk_furniture_id')";

  $results = $connection->prepare($sql);
  $results->execute();
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Created task</h1>
  <p>Nome: <?= $task_name ?></p>
  <p>Descrição: <?= $task_description ?></p>
  <p>Data de Realização: <?= $due_date ?></p>
  <p>Id Casa: <?= $fk_house_id ?></p>
  <p>Id Cômodo: <?= $fk_room_id ?></p>
  <p>Id Móvel: <?= $fk_furniture_id ?></p>
</body>
</html>