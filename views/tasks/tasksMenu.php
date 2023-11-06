<?php
  $date = new DateTimeImmutable('now', new DateTimeZone('America/Sao_Paulo'));
  $today     = $date->format('Y-m-d');
  $yesterday = $date->sub(new DateInterval('P1D'))->format('Y-m-d');
  $tomorrow  = $date->add(new DateInterval('P1D'))->format('Y-m-d');
?>
<!-- This div wraps the task-menu and the task-list -->
<div class="tasks-section ms-5 container-fluid overflow-auto" style="height: 690px;">
  <div class="tasks-menu bg-cream border-brown rounded-5 mb-3"> 
    <!-- colocar div com bootstrap dentro dessa de cima -->
    <div class="m-3 row">
        <h2 class="txt-brown">Filtros</h2>
      <div class="col me-5 align-items-center d-flex">
        <img src="../../assets/images/icons/sun.png" class="me-2">
        <label for="selectTaskDate"></label>
        <select id="selectTaskDate" class="rounded-3 txt-red border-0 bg-cream"> 
          <option value="any">Qualquer Data</option>
          <option value="<?= $yesterday ?>">Ontem</option>
          <option value="<?= $today ?>">Hoje</option>
          <option value="<?= $tomorrow ?>">Amanhã</option>
          <option value="other">Outra Data</option>
        </select>
      </div>
      <div class="col align-items-center d-flex">
        <img src="../../assets/images/icons/room.png" class="me-2">
        <label for="selectTaskRoomId"></label>
        <select id="selectTaskRoomId" class="rounded-3 txt-red border-0 bg-cream">
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
        <center class="txt-brown">
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
    <input type="submit" value="Adicionar Tarefa" class="bg-brown border-brown txt-brown rounded-4 h4 p-3">
  </form>
  <br>