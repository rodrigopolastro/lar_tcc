<h1>Tarefas</h1>
<?php 
  $tasks = getAllTasks();
  foreach ($tasks as $task): ?>
  <div style="backgroundColor: red;">
    <details>
      <summary><?= $task['task_name']; ?></summary>
      <h5>Data de Realização: <?= $task['due_date'] ?></h5>
      <p><?= $task['task_description'] ?></p>
    </details>
    <form action="." method="post">
      <input type="hidden" name="task_id" value="<?= $task['task_id'] ?>">
      <?php if(isTaskCompleted($task['task_id'])[0]): ?>
        <input type="hidden" name="operation" value="uncompleteTask">
        <input type="submit" value="Marcar como não concluída">
      <?php else : ?>
        <input type="hidden" name="operation" value="completeTask">
        <input type="submit" value="Concluir tarefa">
      <?php endif ?>
    </form>
    <form action="." method="post">
      <input type="hidden" name="task_id" value="<?= $task['task_id'] ?>">
      <input type="hidden" name="operation" value="deleteTask">
      <input type="submit" value="Excluir Tarefa">
    </form>
  </div>
<?php endforeach ?>
