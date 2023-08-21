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
            <label for="modalTaskNameInput">Nome da Tarefa</label>
            <input type="text" name="task_name" id="modalTaskNameInput">
            <br>
            <label for="modalTaskDescriptionInput">Descrição da Tarefa</label>
            <input type="text" name="task_description" id="modalTaskDescriptionInput">
            <br>
            <label for="editTaskRoomId">Cômodo</label>
            <select id="editTaskRoomId" name="room_id">
              <option value="noRoom">Nenhum Cômodo</option>
              <?php
                $rooms = getAllRooms();
                foreach ($rooms as $room): ?>
                  <option value="<?= $room['room_id'] ?>"> <?= $room['room_name'] ?> </option>";
                <?php endforeach ?>
            </select>
            <label for="editTaskFurnitureId">Móvel</label>
            <select id="editTaskFurnitureId" name="furniture_id">
              <option value="noFurniture">Nenhum Móvel</option>
              <?php
                $furniture = getAllFurniture();
                foreach ($furniture as $piece_of_furniture): ?>
                  <option value="<?= $piece_of_furniture['furniture_id'] ?>"> <?= $piece_of_furniture['furniture_name'] ?> </option>";
                <?php endforeach ?>
            </select>
            <br>
            <label for="modalTaskDueDateInput">Data de Realização</label>
            <input type="date" name="due_date" id="modalTaskDueDateInput">
            <label for="modalTaskDueTimeInput">Horário</label>
            <input type="time" name="due_time" id="modalTaskDueTimeInput">
        </div>
        <div class="modal-footer">
          <!-- button to discard changes on task -->
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <!-- button to save changes on task -->
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
</div>
