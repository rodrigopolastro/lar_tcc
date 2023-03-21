<?php
require_once "./model/databaseConnection.php";
require_once "./select_stuff.php";

$rooms  = getAllRooms();
$furniture = getAllFurniture();
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
  <form method="post" action="./task_created.php">
    <label for="task_name">Nome da Tarefa</label>
    <input type="text" name="task_name" id="">
    <br>
    <label for="task_description">Descrição da Tarefa</label>
    <input type="text" name="task_description" id="">
    <br>
    <label for="due_date">Data de Realização</label>
    <input type="datetime-local" name="due_date" id="">
    <br>
    <label for="select_house_id">Casa</label>
    <select name="select_house_id" id="" >
      <option value="1">Casa id 0</option>
    </select>
    <br>
    <label for="select_floor_id">Andar</label>
    <select name="select_floor_id" id="" >
      <option value="1">Primeiro Andar</option>
    </select>
    <br>
      <label for="select_room_id">Cômodo</label>
    <select name="select_room_id" id="">
      <?php
        foreach ($rooms as $room){
          echo "<option value=$room[room_id]> $room[room_name] </option>";
        }
      ?>
    </select>
    <br>
    <label for="select_furniture_id">Móvel</label>
    <select name="select_furniture_id" id="">
      <?php
        foreach ($furniture as $pieceOfFurniture){
          echo "<option value=$pieceOfFurniture[furniture_id]> $pieceOfFurniture[furniture_name] </option>";
        }
      ?>
    </select>
    <br><br>
    <button type="submit">Enviar</button>
  </form>
</body>
</html>