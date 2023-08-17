<div id="tileset-menu" class="w-100">
  <div id="sectionSelector">
    <button id="roomsSectionButton" class="btn btn-primary">Modificar Cômodos</button>
    <button id="furnitureSectionButton" class="btn btn-primary">Modificar Móveis</button>
  </div>
  <div id="roomsSection" class="">
    <h1>Cômodos</h1>
    <label for="roomName">Nome do Cômodo</label>
    <input type="text" id="roomNameInput">
    <!-- the 'src' attribute is filled with the placeholder image by javascript -->
    <img src="" alt="" id="roomTileInput" class="tile-image">
    <button id="createRoomButton">Criar Cômodo</button>
    <div id="roomsList"><!-- This is filled dinamically by javascript --></div>
  </div>
  
  <div id="furnitureSection" class="d-none">
    <h1>Móveis</h1>
    <div id="furnitureList"><!-- This is filled dinamically by javascript --></div>
  </div>
</div>