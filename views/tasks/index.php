<?php
  //Absolute path instead of relative one
  require $_SERVER['DOCUMENT_ROOT'] . "/htdocsDirectories/lar_tcc/helpers/rootPath.php";
  
  //Variable to track current user in order to present the appropriate data.
  //In the future, this value will be taken from the login and signup pages.
  $logged_user_id = 1;

  //Loading controllers
  require findPath('controllers/tasksController.php');
  require findPath('controllers/roomsController.php');
  require findPath('controllers/furnitureController.php');

  //Loading views
  require findPath('views/components/header.php');
  require findPath('views/tileset/tileset.php');
  require findPath('views/tasks/tasksMenu.php')
?>
  <form action="." method="post">
    <input type="hidden" name="operation" value="insertTask">
    <input type="submit" value="Adicionar Tarefa">
  </form>
  <?php require findPath('views/tasks/showTasks.php'); ?>
  <?php require findPath('views/components/footer.php'); ?>