<?php
  //Absolute path instead of relative one
  require $_SERVER['DOCUMENT_ROOT'] . "/htdocsDirectories/lar_tcc/helpers/rootPath.php";
  
  //Variable to track current user in order to present the appropriate data.
  //In the future, this value will be taken from the login and signup pages.
  $logged_user_id = 1;

  //Loading views
  require findPath('views/components/header.html');
  require findPath('views/construction/houseDiagramEditor.html');
  require findPath('views/construction/houseDiagramMenu.html');
  require findPath('views/components/footer.html');
?>
  <!-- Includes bootstrap javascript -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

  <!-- Global vars and consts Declaration -->
  <script src="/htdocsDirectories/lar_tcc/assets/js/construction/globalDeclarations.js"></script>

  <!-- Helper Functions -->
  <script src="/htdocsDirectories/lar_tcc/helpers/elementWithAttributes.js"></script>
  <script src="/htdocsDirectories/lar_tcc/helpers/roomTile.js"></script>
  <script src="/htdocsDirectories/lar_tcc/helpers/getCoordsInElement.js"></script>

  <!-- General Javascript -->
  <script src="/htdocsDirectories/lar_tcc/assets/js/construction/sectionSelector.js"></script>
  <script src="/htdocsDirectories/lar_tcc/assets/js/construction/createRoomDiv.js"></script>
  <script src="/htdocsDirectories/lar_tcc/assets/js/construction/createTileImg.js"></script>
  <script src="/htdocsDirectories/lar_tcc/assets/js/construction/houseDiagramEditor.js"></script>

  <!-- AJAX Requests -->
  <script src="/htdocsDirectories/lar_tcc/views/construction/ajaxRequests/insertRoom.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/ajaxRequests/deleteRoom.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/ajaxRequests/selectRooms.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/ajaxRequests/selectOneRoom.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/ajaxRequests/updateRoom.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/ajaxRequests/selectTiles.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/ajaxRequests/updateDiagramPositions.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/ajaxRequests/selectDiagramPositions.js"></script>
</body>
</html>