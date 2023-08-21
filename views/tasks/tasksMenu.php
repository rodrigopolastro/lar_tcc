<?php
  $date = new DateTimeImmutable('now', new DateTimeZone('America/Sao_Paulo'));
  $today     = $date->format('Y-m-d');
  $yesterday = $date->sub(new DateInterval('P1D'))->format('Y-m-d');
  $tomorrow  = $date->add(new DateInterval('P1D'))->format('Y-m-d');
?>
<!-- This div wraps the task-menu and the task-list -->
<div class="tasks-section">
  <div class="tasks-menu">
    <h3>Filtros</h3>
    <label for="selectTaskDate">Data</label>
    <select id="selectTaskDate"> 
      <option value="any">Qualquer Data</option>
      <option value="<?= $yesterday ?>">Ontem</option>
      <option value="<?= $today ?>">Hoje</option>
      <option value="<?= $tomorrow ?>">Amanhã</option>
      <option value="other">Outra Data</option>
    </select>
    <label for="selectTaskRoomId">Cômodo</label>
    <select id="selectTaskRoomId">
      <option value="any">Qualquer Cômodo</option>
      <option value="noRoom">Sem Cômodo</option>
      <?php
        $rooms = getAllRooms();
        foreach ($rooms as $room): ?>
          <option value="<?= $room['room_id'] ?>"> <?= $room['room_name'] ?> </option>";
        <?php endforeach ?>
    </select>

    <h4>Tarefas Concluídas</h4>
    <h2 id="tasksCounter">
      <span id="completedTasksCounter"></span>
      /
      <span id="allTasksCounter"></span>
    </h2>
    <form action="." method="post">
      <input type="hidden" name="operation" value="insertTask">
      <input type="submit" value="Adicionar Tarefa">
    </form>
    <br>
  </div>
