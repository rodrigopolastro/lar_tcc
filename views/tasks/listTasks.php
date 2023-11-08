<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <form action="." method="post">
      <input type="hidden" name="operation" value="updateTask">
      <input type="hidden" name="task_id" id="hiddenTaskIdInput" value="">
      <div class="modal-content bg-cream border-brown rounded-4">
        <div class="modal-header bg-brown border-0 rounded-3 rounded-top-3 overflow-hidden">
          <h1 class="modal-title fs-5 txt-brown fw-bold" id="staticBackdropLabel">Editar Tarefa</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <label for="modalTaskNameInput" class="col txt-brown fw-bold">Nome da Tarefa</label>
            <input type="text" name="task_name" id="modalTaskNameInput" class="col rounded-3 txt-red border-0 bg-red fw-bold">
            <label for="editTaskRoomId" class="col txt-brown fw-bold">Cômodo</label>
            <select id="editTaskRoomId" name="room_id" class="col me-3 rounded-3 txt-red border-0 bg-red fw-bold">
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
            <label for="modalTaskDescriptionInput" class="col txt-brown fw-bold">Descrição da Tarefa</label>
            <input type="text" name="task_description" id="modalTaskDescriptionInput" class="col rounded-3 txt-red border-0 bg-red fw-bold">
            <label for="editTaskFurnitureId" class="col txt-brown fw-bold">Móvel</label>
            <select id="editTaskFurnitureId" name="furniture_id" class="col me-3 rounded-3 txt-red border-0 bg-red fw-bold">
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
            <label for="modalTaskDueDateInput" class="col txt-brown fw-bold">Data de Realização</label>
            <input type="date" name="due_date" id="modalTaskDueDateInput" class="col rounded-3 txt-red border-0 bg-red fw-bold">
            <label for="modalTaskDueTimeInput" class="col txt-brown fw-bold">Horário</label>
            <input type="time" name="due_time" id="modalTaskDueTimeInput" class="col me-3 rounded-3 txt-red border-0 bg-red fw-bold">
          </div>
        </div>
        <div class="modal-footer border-0">
          <!-- button to discard changes on task -->
          <button type="button" class="bg-brown border-0 rounded-2 h5 txt-brown" data-bs-dismiss="modal">Fechar</button>
          <!-- button to save changes on task -->
            <input type="submit" value="Salvar Alterações" class="bg-lime border-0 rounded-2 h5 txt-brown">
          </form>
        </div>
      </div>
    </form>
  </div>
</div>

<h1 class="txt-red">Tarefas Pendentes</h1>
<div class="" id="uncompletedTasksList"></div>
<h1 class="txt-green">Tarefas Concluídas</h1>
<div class="" id="completedTasksList"></div>
</div>