<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <form>
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Editar Tarefa</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <label for="task_name">Nome da Tarefa</label>
            <input type="text" name="task_name" id="modalTaskNameInput">
            <br>
            <label for="task_description">Descrição da Tarefa</label>
            <input type="text" name="task_description" id="modalTaskDescriptionInput">
            <br>
            <label for="due_date">Data de Realização</label>
            <input type="date" name="due_date" id="modalTaskDueDateInput">
            <label for="due_time">Horário</label>
            <input type="time" name="due_time" id="modalTaskDueTimeInput">
        </div>
        <div class="modal-footer">
          <!-- button to discard changes on task -->
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <!-- button to save changes on task -->
            <input type="hidden" name="task_id" value="">
            <input type="hidden" name="operation" value="updateTask">
            <input type="submit" value="Salvar Alterações">
          </form>
        </div>
      </div>
    </form>
  </div>
</div>
<h1>Tarefas</h1>
<?php 
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
    <input type="button" value="Editar Tarefa" onclick="requestTaskInfo(<?= $uncompleted_task['task_id'] ?>)" 
           data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  </div>
<?php endforeach ?>
<h2>Tarefas Concluídas</h2>
<?php 
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
    <input type="submit" value="Editar Tarefa" onclick="requestTaskInfo(<?= $completed_task['task_id'] ?>)" 
           data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  </div>
<?php endforeach ?>  

<script>
  function requestTaskInfo(editingTaskId) {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = displayTaskInfo;
    httpRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/tasksController.php");
    httpRequest.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded",
    );
    httpRequest.send("operation=selectTask&task_id=" + editingTaskId);
  }

  function displayTaskInfo() {
    // Request Made
    if (httpRequest.readyState === XMLHttpRequest.DONE) { 
      // Status 200 = Request OK
      if (httpRequest.status === 200) {                
        // Convert response from JSON format to a javascript object
        const response = JSON.parse(httpRequest.responseText);
        const name_input        = document.getElementById('modalTaskNameInput');
        const description_input = document.getElementById('modalTaskDescriptionInput');
        const due_date_input    = document.getElementById('modalTaskDueDateInput');
        const due_time_input    = document.getElementById('modalTaskDueTimeInput');

        // Assign task values to inputs
        name_input.value        = response.task_name;
        description_input.value = response.task_description;
        due_date_input.value    = response.due_date;
        due_time_input.value    = response.due_time;
      } else {
        alert("There was a problem with the request.");
      }
    }
  }
</script>
