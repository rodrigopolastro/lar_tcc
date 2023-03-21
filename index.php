<?php
require_once "./model/databaseConnection.php";

  $sql = "SELECT * FROM tasks";

  $results = $connection->query($sql);
  
  if ($results->rowCount() > 0) {
    $tasks = $results->fetchAll();
  }
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
  <a href="./insert_tasks.php">Inserir Tarefas</a>

  <hr>
  <a href="#">Inserir Cômodos</a>
  <a href="#">Inserir Móveis</a>
  <a href="#">Inserir Pertences</a>

  <hr>

  <h1>Tarefas</h1>
  <table>
    <thead>
      <th>ID</th>
      <th>NOME</th>
      <th>DESCRIÇÃO</th>
      <th>DATA DE REALIZAÇÃO</th>
      <th>CASA</th>
      <th>CÔMODO</th>
      <th>MÓVEL</th>
    </thead>
    <tbody>
      <?php foreach ($tasks as $task): ?>
        <tr>
          <td> <?= $task['task_id']; ?> </td>
          <td> <?= $task['task_name']; ?> </td>
          <td> <?= $task['task_description']; ?> </td>
          <td> <?= $task['due_date']; ?> </td>
          <td> <?= $task['fk_house_id']; ?> </td>
          <td> <?= $task['fk_room_id']; ?> </td>
          <td> <?= $task['fk_furniture_id']; ?> </td>
        </tr>
      <?php endforeach ?>
    </tbody>
  </table>
</body>
</html>