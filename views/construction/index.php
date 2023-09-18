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
  <script src="/htdocsDirectories/lar_tcc/helpers/imgPath.js"></script>
  <script src="/htdocsDirectories/lar_tcc/helpers/getCoordsInElement.js"></script>

  <!-- General Javascript -->
  <script src="/htdocsDirectories/lar_tcc/assets/js/construction/sectionSelector.js"></script>
  <script src="/htdocsDirectories/lar_tcc/assets/js/construction/houseDiagramEditor/mainFunctions.js"></script>
  <script src="/htdocsDirectories/lar_tcc/assets/js/construction/houseDiagramEditor/roomsFunctions.js"></script>
  <script src="/htdocsDirectories/lar_tcc/assets/js/construction/houseDiagramEditor/furnitureFunctions.js"></script>
  
  <!-- ROOMS -->
  <script src="/htdocsDirectories/lar_tcc/views/construction/rooms/createRoomDiv.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/rooms/insertRoom.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/rooms/deleteRoom.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/rooms/selectRooms.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/rooms/selectOneRoom.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/rooms/updateRoom.js"></script>
  
  <!-- FURNITURE -->

  <!-- FURNITURE AND TILES IMAGES -->
  <script src="/htdocsDirectories/lar_tcc/views/construction/furnitureAndTilesImages/selectTiles.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/furnitureAndTilesImages/selectFurnitureImages.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/furnitureAndTilesImages/createTileImg.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/furnitureAndTilesImages/createFurnitureImg.js"></script>
  
  <!-- HOUSES -->
  <script src="/htdocsDirectories/lar_tcc/views/construction/houses/updateDiagramPositions.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/houses/selectDiagramPositions.js"></script>
</body>
</html>