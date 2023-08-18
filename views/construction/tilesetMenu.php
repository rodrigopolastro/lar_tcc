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
      <div id="roomTileInputDiv" tabindex="0" role="button" data-bs-toggle="popover" data-bs-trigger="focus"
        class="tile-image" 
        data-bs-title="Pisos Disponíveis" 
        data-bs-content="Lista dos pisos aqui">
        <!-- the 'src' attribute is filled with the placeholder image by javascript -->
        <img src="" alt="" id="roomTileInputImg" class="w-100">
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