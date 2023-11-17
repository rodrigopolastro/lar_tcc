<?php
  $date = new DateTimeImmutable('now', new DateTimeZone('America/Sao_Paulo'));
  $today     = $date->format('Y-m-d');
  $yesterday = $date->sub(new DateInterval('P1D'))->format('Y-m-d');
  $tomorrow  = $date->add(new DateInterval('P1D'))->format('Y-m-d');
?>
<!-- This div wraps the task-menu and the task-list -->
<div class="tasks-section ps-5 container-fluid">
  <div class="tasks-menu bg-cream border-brown rounded-5 mb-3"> 
    <!-- colocar div com bootstrap dentro dessa de cima -->
    <div class="m-3 row">
      <h2 class="txt-brown fw-bold">Filtros</h2>
      <div class="col-4 d-flex justify-content-center align-items-center">
        <img src="../../assets/images/icons/sun.svg" class="me-2 h-50" style="">
        <label for="selectTaskDate"></label>
        <select id="selectTaskDate" class="rounded-3 txt-red border-0 bg-cream fw-bold"> 
          <option value="any">Qualquer Data</option>
          <option value="<?= $yesterday ?>">Ontem</option>
          <option value="<?= $today ?>">Hoje</option>
          <option value="<?= $tomorrow ?>">Amanhã</option>
          <option value="other">Outra Data</option>
        </select>
      </div>
      <div class="col-4 d-flex justify-content-center align-items-center">
        <img src="../../assets/images/icons/room.svg" class="me-2 h-50">
        <label for="selectTaskRoomId"></label>
        <select id="selectTaskRoomId" class="rounded-3 txt-red border-0 bg-cream fw-bold">
          <option value="any">Qualquer Cômodo</option>
          <option value="noRoom">Sem Cômodo</option>
          <?php
            $house_id = $_SESSION['house_id'];
            $rooms = getAllRooms($house_id);
            foreach ($rooms as $room): ?>
              <option value="<?= $room['room_id'] ?>"> <?= $room['room_name'] ?> </option>";
            <?php endforeach ?>
        </select>
      </div>
      <div class="col-4">
        <div class="txt-brown d-flex flex-column align-items-center">
          <h2 id="tasksCounter">
            <span id="completedTasksCounter"></span>
            /
            <span id="allTasksCounter"></span>
          </h2>
          <h6 class="fw-bold">Tarefas Concluídas</h6>
        </div>
      </div>
    </div>
  </div>
  <button id="addTaskButton" class="bg-brown border-brown txt-brown fw-bold rounded-4 h4 p-3">Adicionar tarefa</button>
  <br>