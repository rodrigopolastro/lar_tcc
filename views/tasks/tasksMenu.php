<div class="tasks-menu">
  <h3>Filtros</h3>
  <label for="select-date"></label>
  <select name="select-date" id="">
    <option value="yesterday">Ontem</option>
    <option value="today">Hoje</option>
    <option value="tomorrow">Amanhã</option>
    <option value="other">Outro</option>
  </select>
  <label for="select-room_id"></label>
  <select name="select_room_id" id="">
    <?php
      $rooms = getAllRooms();
      foreach ($rooms as $room): ?>
        <option value="<?= $room['room_id'] ?>"> <?= $room['room_name'] ?> </option>";
      <?php endforeach ?>
  </select>

  <h4>Tarefas Concluídas</h4>
  <?php
    $tasks_number = countTasks();
  ?>
  <h2><?= $tasks_number['completed_tasks'] . '/' . $tasks_number['all_tasks'] ?></h2>
</div>