<?php
//Absolute path instead of relative one
require_once $_SERVER['DOCUMENT_ROOT'] . "/htdocsDirectories/lar_tcc/helpers/rootPath.php";
require_once findPath('controllers/tasksController.php');
require_once findPath('controllers/roomsController.php');
require_once findPath('controllers/furnitureController.php');

?>

<a href="/htdocsDirectories/lar_tcc/views/tasks/newTask.php?operation=newTask">Adicionar Tarefa</a>
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
      <!-- loop to fill table rows with task values -->
      <?php 
      if(isset($tasks)):
        foreach ($tasks as $task): ?>
          <tr>
            <td> <?= $task['task_id']; ?> </td>
            <td> <?= $task['task_name']; ?> </td>
            <td> <?= $task['task_description']; ?> </td>
            <td> <?= $task['due_date']; ?> </td>
            <td> <?= $task['fk_house_id']; ?> </td>
            <td> <?= getRoomById($task['fk_room_id'])['room_name']; ?> </td>
            <td> <?= getPieceOfFurnitureById($task['fk_furniture_id'])['furniture_name']; ?> </td>
            <td> 
              <a href="/htdocsDirectories/lar_tcc/views/tasks/editTask.php?operation=editTask&task_id=<?= $task['task_id'] ?>">Editar Tarefa</a>
            </td>
            <td> 
              <a href="/htdocsDirectories/lar_tcc/views/tasks/showTasks.php?operation=deleteTask&task_id=<?= $task['task_id'] ?>">Deletar Tarefa</a>
            </td>
          </tr>
        <?php endforeach ?>
      <?php endif ?>
    </tbody>
  </table>