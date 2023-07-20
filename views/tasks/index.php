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
  require findPath('views/tasks/houseDiagram.php');
  require findPath('views/tasks/tasksMenu.php');
  require findPath('views/tasks/listTasks.php');
?>
<script src="/htdocsDirectories/lar_tcc/helpers/elementWithAttributes.js"></script>
<script src="/htdocsDirectories/lar_tcc/views/tasks/js/getTaskForEdition.js"></script>
<script src="/htdocsDirectories/lar_tcc/views/tasks/js/generateTaskList.js"></script>
<script src="/htdocsDirectories/lar_tcc/views/tasks/js/countTasks.js"></script>
<?php require findPath('views/components/footer.php'); ?>