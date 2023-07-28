<div id="tileset-menu" class="w-100">
  <div id="modifyButtons">
    <button id="modifyRoomsButton" class="btn btn-primary">Modificar Cômodos</button>
    <button id="modifyFurnitureButton" class="btn btn-primary">Modificar Móveis</button>
  </div>
  <div id="roomsSection" class="">
    <h1>Cômodos</h1>
    <label for="roomName">Nome do Cômodo</label>
    <input type="text" id="roomNameInput">
    <img src="https://placeholder.co/100" alt="" id="roomTileInput">
    <button id="createRoomButton">Criar Cômodo</button>
    <div id="roomsList"><!-- This is filled dinamically by javascript --></div>
  </div>
  
  <div id="furnitureSection" class="d-none">
    <h1>Móveis</h1>
    <div id="furnitureList"><!-- This is filled dinamically by javascript --></div>
  </div>
</div>