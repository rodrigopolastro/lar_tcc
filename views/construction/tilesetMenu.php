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
    <!-- Room list is filled dinamically by javascript -->
    <div id="roomsList">
      <!-- Editing room Modal -->
      <div class="modal fade" id="editingRoomModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Editar Cômodo</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <label for="modalRoomNameInput">Nome do Cômodo</label>
              <input type="text" id="modalRoomNameInput">
              <label for="modalRoomTileInputImg">Piso Atual</label>
              <img src="" alt="" id="modalRoomTileInputImg" class="tile-image">
              <h3>Pisos Disponíveis</h3>
              <div id="modalTilesList"></div>
            <div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
              <button id="modalUpdateRoomButton" type="button" data-bs-dismiss="modal" class="btn btn-primary">Salvar Alterações</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  <div id="furnitureSection" class="d-none">
    <h1>Móveis</h1>
    <div id="furnitureList"><!-- This is filled dinamically by javascript --></div>
  </div>
</div>