<h1>Tarefas</h1>
<?php 
$is_completed = FALSE;
$uncompleted_tasks = getAllTasks($is_completed);
foreach ($uncompleted_tasks as $uncompleted_task): ?>
  <div>
    <details>
      <summary><?= $uncompleted_task['task_name']; ?></summary>
      <h5>Data de Realização: <?= $uncompleted_task['due_date'] ?></h5>
      <p><?= $uncompleted_task['task_description'] ?></p>
    </details>
    <form action="." method="post">
      <input type="hidden" name="task_id" value="<?= $uncompleted_task['task_id'] ?>">
      <input type="hidden" name="operation" value="completeTask">
      <input type="submit" value="Concluir tarefa">
    </form>
    <form action="." method="post">
      <input type="hidden" name="task_id" value="<?= $uncompleted_task['task_id'] ?>">
      <input type="hidden" name="operation" value="deleteTask">
      <input type="submit" value="Excluir Tarefa">
    </form>
    <form action="." method="post">
      <input type="hidden" name="task_id" value="<?= $uncompleted_task['task_id'] ?>">
      <input type="hidden" name="operation" value="editTask">
      <input type="submit" value="Editar Tarefa">
    </form>
  </div>
<?php endforeach ?>
<h2>Tarefas Concluídas</h2>
<?php 
$is_completed = TRUE;
$completed_tasks = getAllTasks($is_completed);
foreach ($completed_tasks as $completed_task): ?>
  <div>
    <details>
      <summary><?= $completed_task['task_name']; ?></summary>
      <h5>Data de Realização: <?= $completed_task['due_date'] ?></h5>
      <p><?= $completed_task['task_description'] ?></p>
    </details>
    <form action="." method="post">
      <input type="hidden" name="task_id" value="<?= $completed_task['task_id'] ?>">
      <input type="hidden" name="operation" value="setTaskUncompleted">
      <input type="submit" value="Marcar como Não Concluída">
    </form>
    <form action="." method="post">
      <input type="hidden" name="task_id" value="<?= $completed_task['task_id'] ?>">
      <input type="hidden" name="operation" value="deleteTask">
      <input type="submit" value="Excluir Tarefa">
    </form>
    <form action="." method="post">
      <input type="hidden" name="task_id" value="<?= $completed_task['task_id'] ?>">
      <input type="hidden" name="operation" value="editTask">
      <input type="submit" value="Editar Tarefa">
    </form>
  </div>
<?php endforeach ?>  
