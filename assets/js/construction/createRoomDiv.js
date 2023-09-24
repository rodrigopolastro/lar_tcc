function createRoomDiv(room){
  const roomDiv = createElementWithAttributes('div', {class:'d-flex align-items-center border border-4 border-start-0 border-bottom-0 shadow-sm rounded-2 pt-2 pb-2 pe-2 mb-2 row'});
  roomDiv.dataset.roomId = room.room_id;

  const roomNameElement  = createElementWithAttributes('h4', {});
  const roomNameText     = document.createTextNode(room.room_name);
  const roomTile         = createElementWithAttributes('img', {src: findTilePath(room.tile_name), class:'tile-image ms-2'});
  const buttonDeleteRoom = createElementWithAttributes('button', {class:'border border-4 border-start-0 border-bottom-0 rounded-2 h5 col mx-5'});
  const buttonEditRoom   = createElementWithAttributes('button', {class:'border border-4 border-start-0 border-bottom-0 rounded-2 h5 col mx-5'});

  roomTile.addEventListener('mousedown', function(){ setRoomToPaint(room.room_id, roomTile) });

  buttonDeleteRoom.addEventListener('click', function(){ deleteRoom(room.room_id) });
  buttonDeleteRoom.innerHTML = 'Excluir';

  buttonEditRoom.addEventListener('click', function(){ selectOneRoom(room.room_id) });
  buttonEditRoom.innerHTML = 'Editar';
  buttonEditRoom.dataset.bsToggle = 'modal';
  buttonEditRoom.dataset.bsTarget = '#editingRoomModal';

  roomDiv.appendChild(roomNameElement).appendChild(roomNameText);
  roomDiv.appendChild(roomTile);
  roomDiv.appendChild(buttonDeleteRoom);
  roomDiv.appendChild(buttonEditRoom);

  roomsList.appendChild(roomDiv);
}