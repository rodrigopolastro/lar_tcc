<?php
  //Absolute path instead of relative one
  require $_SERVER['DOCUMENT_ROOT'] . "/htdocsDirectories/lar_tcc/helpers/rootPath.php";
  
  session_start();
  //Redirect to login page if session was unset by the browser
  if(!isset($_SESSION['house_id'])){
    header('Location: /htdocsDirectories/lar_tcc/views/login.php');
    exit();
  }

  //Loading views
  require findPath('views/components/header.php');
  require findPath('views/construction/houseDiagramEditor.php');
  require findPath('views/construction/houseDiagramMenu.html');
  require findPath('views/construction/constructionModals.html');
  require findPath('views/components/footer.html');
?>
  <!-- Includes bootstrap javascript -->
  <script src="../../assets/js/bootstrap.bundle.min.js"></script>

  <!-- Global vars and consts Declaration -->
  <script src="/htdocsDirectories/lar_tcc/assets/js/construction/globalDeclarations.js"></script>

  <!-- Helper Functions -->
  <script src="/htdocsDirectories/lar_tcc/helpers/elementWithAttributes.js"></script>
  <script src="/htdocsDirectories/lar_tcc/helpers/imgPath.js"></script>
  <script src="/htdocsDirectories/lar_tcc/helpers/getCoordsInElement.js"></script>

  <!-- General Javascript -->
  <script src="/htdocsDirectories/lar_tcc/assets/js/construction/houseDiagramEditor/mainFunctions.js"></script>
  <script src="/htdocsDirectories/lar_tcc/assets/js/construction/houseDiagramEditor/roomsFunctions.js"></script>
  <script src="/htdocsDirectories/lar_tcc/assets/js/construction/houseDiagramEditor/furnitureFunctions.js"></script>
  <script src="/htdocsDirectories/lar_tcc/assets/js/construction/houseDiagramEditor/topWallsFunctions.js"></script>
  <script src="/htdocsDirectories/lar_tcc/assets/js/construction/sectionSelector.js"></script>
  <script src="/htdocsDirectories/lar_tcc/assets/js/construction/furnitureSelector.js"></script>
  <script src="/htdocsDirectories/lar_tcc/assets/js/construction/roomNameSelector.js"></script>
  
  <!-- ROOMS -->
  <script src="/htdocsDirectories/lar_tcc/views/construction/rooms/createRoomDiv.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/rooms/insertRoom.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/rooms/deleteRoom.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/rooms/selectRooms.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/rooms/selectOneRoom.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/rooms/selectFurnitureOfRoom.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/rooms/updateRoom.js"></script>
  
  <!-- FURNITURE -->
  <script src="/htdocsDirectories/lar_tcc/views/construction/furniture/createFurnitureDiv.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/furniture/deleteFurniture.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/furniture/deleteAllFurniture.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/furniture/insertFurniture.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/furniture/selectFurniture.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/furniture/selectPieceOfFurniture.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/furniture/updateFurniture.js"></script>


  <!-- DIAGRAM IMAGES (Tiles, Furniture and Walls) -->
  <script src="/htdocsDirectories/lar_tcc/views/construction/diagramImages/selectTiles.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/diagramImages/selectFurnitureImages.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/diagramImages/selectWalls.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/diagramImages/createTileImg.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/diagramImages/createFurnitureImg.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/diagramImages/createWallImg.js"></script>
  
  <!-- HOUSES -->
  <script src="/htdocsDirectories/lar_tcc/views/construction/houses/updateDiagramPositions.js"></script>
  <script src="/htdocsDirectories/lar_tcc/views/construction/houses/selectDiagramPositions.js"></script>
</body>
</html>