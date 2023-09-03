<?php
  $date = new DateTimeImmutable('now', new DateTimeZone('America/Sao_Paulo'));
  $today     = $date->format('Y-m-d');
  $yesterday = $date->sub(new DateInterval('P1D'))->format('Y-m-d');
  $tomorrow  = $date->add(new DateInterval('P1D'))->format('Y-m-d');
?>
<!-- This div wraps the task-menu and the task-list -->
<div class="tasks-section ms-5 container-fluid">
  <div class="tasks-menu border border-4 border-start-0 border-bottom-0 shadow-sm rounded-2"> 
    <!-- colocar div com bootstrap dentro dessa de cima -->
    <div class="m-3 row">
        <h3>Filtros</h3>
      <div class="col me-5">
        <label for="selectTaskDate"></label>
        <select id="selectTaskDate" class="rounded-3"> 
          <option value="any">Qualquer Data</option>
          <option value="<?= $yesterday ?>">Ontem</option>
          <option value="<?= $today ?>">Hoje</option>
          <option value="<?= $tomorrow ?>">Amanhã</option>
          <option value="other">Outra Data</option>
        </select>
      </div>
      <div class="col">
        <label for="selectTaskRoomId"></label>
        <select id="selectTaskRoomId" class="rounded-3">
          <option value="any">Qualquer Cômodo</option>
          <option value="noRoom">Sem Cômodo</option>
          <?php
            $rooms = getAllRooms();
            foreach ($rooms as $room): ?>
              <option value="<?= $room['room_id'] ?>"> <?= $room['room_name'] ?> </option>";
            <?php endforeach ?>
        </select>
      </div>
      <div class="col-sm-5">
        <center>
          <h2 id="tasksCounter">
            <span id="completedTasksCounter"></span>
            /
            <span id="allTasksCounter"></span>
          </h2>
          <h6>Tarefas Concluídas</h6>
        </center>
      </div>
    </div>
  </div>
  <form action="." method="post">
    <input type="hidden" name="operation" value="insertTask">
    <input type="submit" value="Adicionar Tarefa" class="border border-4 border-start-0 border-bottom-0 rounded-2 h4 p-3">
  </form>
  <br>