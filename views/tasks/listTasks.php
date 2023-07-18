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
<div class="" id="uncompletedTasksList"></div>
<h2>Tarefas Concluídas</h2>
<div class="" id="completedTasksList"></div>
