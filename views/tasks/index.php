<?php
  //Absolute path instead of relative one
  require $_SERVER['DOCUMENT_ROOT'] . "/htdocsDirectories/lar_tcc/helpers/rootPath.php";
  
  session_start();
  //Redirect to login page if session was unset by the browser
  if(!isset($_SESSION['house_id'])){
    header('Location: /htdocsDirectories/lar_tcc/views/login.php');
    exit();
  }

  //Loading controllers
  require findPath('controllers/tasksController.php');
  require findPath('controllers/roomsController.php');
  require findPath('controllers/furnitureController.php');

  //Loading views
  require findPath('views/components/header.html');
  require findPath('views/tasks/houseDiagram.php');
  require findPath('views/tasks/tasksMenu.php');
  require findPath('views/tasks/listTasks.php');
  require findPath('views/components/footer.html'); 
?>
  <!-- Includes bootstrap javascript -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

  <!-- Global vars and consts Declaration -->
  <script src="/htdocsDirectories/lar_tcc/assets/js/tasks/globalDeclarations.js"></script>

  <!-- Helper Functions -->
  <script src="/htdocsDirectories/lar_tcc/helpers/elementWithAttributes.js"></script>
  <script src="/htdocsDirectories/lar_tcc/helpers/getCoordsInElement.js"></script>

  <!-- General Javascript -->
  <script src="/htdocsDirectories/lar_tcc/assets/js/tasks/staticHouseDiagram.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/tasks/createTaskDiv.js"></script>

  <!-- AJAX Requests -->
  <script src="/htdocsDirectories/lar_tcc/views/tasks/ajaxRequests/selectHouseDiagram.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/tasks/ajaxRequests/selectTasks.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/tasks/ajaxRequests/selectOneTask.js"></script>
</body>
</html>