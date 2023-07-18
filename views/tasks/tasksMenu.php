<div class="tasks-menu">
  <h3>Filtros</h3>
  <label for="selectTaskDate">Data</label>
  <select id="selectTaskDate"> 
    <option value="any">Qualquer Data</option>
    <option value="2023/07/16">Ontem</option>
    <option value="2023/07/17">Hoje</option>
    <option value="2023/07/18">Amanhã</option>
    <option value="other">Outro</option>
  </select>
  <label for="selectTaskRoomId">Cômodo</label>
  <select id="selectTaskRoomId">
    <option value="any">Todos os Cômodos</option>
    <?php
      $rooms = getAllRooms();
      foreach ($rooms as $room): ?>
        <option value="<?= $room['room_id'] ?>"> <?= $room['room_name'] ?> </option>";
      <?php endforeach ?>
  </select>

  <h4>Tarefas Concluídas</h4>
  <h2 id="taskCounter">
    <span id="completedTasksNumber"></span>
    /
    <span id="tasksNumber"></span>
  </h2>
  <form action="." method="post">
    <input type="hidden" name="operation" value="insertTask">
    <input type="submit" value="Adicionar Tarefa">
  </form>
  <br>
</div>
