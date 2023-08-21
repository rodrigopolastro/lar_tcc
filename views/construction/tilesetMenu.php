<div id="tileset-menu" class="w-100">
  <div id="sectionSelector">
    <button id="roomsSectionButton" class="btn btn-primary">Modificar Cômodos</button>
    <button id="furnitureSectionButton" class="btn btn-primary">Modificar Móveis</button>
  </div>
  <div id="roomsSection" class="">
    <h2>Novo cômodo</h2>
    <div class="d-flex align-items-center">
      <label for="roomName">Nome do Cômodo</label>
      <input type="text" id="roomNameInput">
      <div id="roomTileInputDiv" class="tile-image" role="button" data-bs-toggle="popover" tabindex="0">
        <!-- the 'src' attribute is filled with the placeholder image by javascript -->
        <img src="" alt="" id="roomTileInputImg" class="w-100">
      </div>
      <div hidden>
        <div id="popoverContent"></div>
      </div>
    </div>
    <h1>Cômodos criados</h1>
    <button id="createRoomButton">Criar Cômodo</button>
    <div id="roomsList"><!-- This is filled dinamically by javascript --></div>
  </div>
  
  <div id="furnitureSection" class="d-none">
    <h1>Móveis</h1>
    <div id="furnitureList"><!-- This is filled dinamically by javascript --></div>
  </div>
</div>