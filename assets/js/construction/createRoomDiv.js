function createRoomDiv(room){
  const roomDiv = createElementWithAttributes('div', {});
  roomDiv.dataset.roomId = room.room_id;

  const roomNameElement  = createElementWithAttributes('h4', {});
  const roomNameText     = document.createTextNode(room.room_name);
  const roomTile         = createElementWithAttributes('img', {src: findTilePath(room.tile_name), class:'tile-image'});
  const buttonDeleteRoom = createElementWithAttributes('button', {class:'btn btn-danger'});
  const buttonEditRoom   = createElementWithAttributes('button', {class:'btn btn-success'});

  roomTile.addEventListener('click', function(){ setRoomToPaint(room.room_id, roomTile) });

  buttonDeleteRoom.addEventListener('click', function(){ deleteRoom(room.room_id) });
  buttonDeleteRoom.innerHTML = 'Excluir Cômodo';

  buttonEditRoom.addEventListener('click', function(){ selectOneRoom(room.room_id) });
  buttonEditRoom.innerHTML = 'Editar Cômodo';
  buttonEditRoom.dataset.bsToggle = 'modal';
  buttonEditRoom.dataset.bsTarget = '#editingRoomModal';

  roomDiv.appendChild(roomNameElement).appendChild(roomNameText);
  roomDiv.appendChild(roomTile);
  roomDiv.appendChild(buttonDeleteRoom);
  roomDiv.appendChild(buttonEditRoom);

  roomsList.appendChild(roomDiv);
}