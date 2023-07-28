<?php
  //Absolute path instead of relative one
  require $_SERVER['DOCUMENT_ROOT'] . "/htdocsDirectories/lar_tcc/helpers/rootPath.php";
  
  //Variable to track current user in order to present the appropriate data.
  //In the future, this value will be taken from the login and signup pages.
  $logged_user_id = 1;

  //Loading controllers
  // require findPath('controllers/roomsController.php');
  // require findPath('controllers/furnitureController.php');

  //Loading views
  require findPath('views/components/header.php');
  require findPath('views/construction/houseDiagramEditor.php');
  require findPath('views/construction/tilesetMenu.php');
?>
<script src="/htdocsDirectories/lar_tcc/helpers/elementWithAttributes.js"></script>
<script src="/htdocsDirectories/lar_tcc/views/construction/js/generateRoomsList.js"></script>
<script src="/htdocsDirectories/lar_tcc/views/construction/js/createRoom.js"></script>
<script src="/htdocsDirectories/lar_tcc/views/construction/js/generateFurnitureList.js"></script>
<?php require findPath('views/components/footer.php'); ?>