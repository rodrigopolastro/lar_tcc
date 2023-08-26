<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <form action="." method="post">
      <input type="hidden" name="operation" value="updateTask">
      <input type="hidden" name="task_id" id="hiddenTaskIdInput" value="">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Editar Tarefa</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <label for="modalTaskNameInput" class="col">Nome da Tarefa</label>
            <input type="text" name="task_name" id="modalTaskNameInput" class="col">
            <label for="editTaskRoomId" class="col">Cômodo</label>
            <select id="editTaskRoomId" name="room_id" class="col me-3">
              <option value="noRoom">Nenhum Cômodo</option>
              <?php
                $rooms = getAllRooms();
                foreach ($rooms as $room): ?>
                  <option value="<?= $room['room_id'] ?>"> <?= $room['room_name'] ?> </option>";
                <?php endforeach ?>
            </select>
          </div>
            <br>
          <div class="row">
            <label for="modalTaskDescriptionInput" class="col">Descrição da Tarefa</label>
            <input type="text" name="task_description" id="modalTaskDescriptionInput" class="col">
            <label for="editTaskFurnitureId" class="col">Móvel</label>
            <select id="editTaskFurnitureId" name="furniture_id" class="col me-3">
              <option value="noFurniture">Nenhum Móvel</option>
              <?php
                $furniture = getAllFurniture();
                foreach ($furniture as $piece_of_furniture): ?>
                  <option value="<?= $piece_of_furniture['furniture_id'] ?>"> <?= $piece_of_furniture['furniture_name'] ?> </option>";
                <?php endforeach ?>
            </select>
          </div>
            <br>
          <div class="row">
            <label for="modalTaskDueDateInput" class="col">Data de Realização</label>
            <input type="date" name="due_date" id="modalTaskDueDateInput" class="col">
            <label for="modalTaskDueTimeInput" class="col">Horário</label>
            <input type="time" name="due_time" id="modalTaskDueTimeInput" class="col me-3">
          </div>
        </div>
        <div class="modal-footer">
          <!-- button to discard changes on task -->
          <button type="button" class="border border-4 border-start-0 border-bottom-0 rounded-2 h5" data-bs-dismiss="modal">Fechar</button>
          <!-- button to save changes on task -->
            <input type="submit" value="Salvar Alterações" class="border border-4 border-start-0 border-bottom-0 rounded-2 h5">
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
</div>
