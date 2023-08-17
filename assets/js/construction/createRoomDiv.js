const roomsList = document.getElementById('roomsList');

function createRoomDiv(roomId, roomName, roomTileImage){
  const roomDiv = createElementWithAttributes('div', {});
  roomDiv.dataset.roomId = roomId;

  const roomNameElement  = createElementWithAttributes('h4', {});
  const roomNameText     = document.createTextNode(roomName);
  const roomTile         = createElementWithAttributes('img', {src: findTilePath(roomTileImage), onclick:'', class:'tile-image'});
  const buttonDeleteRoom = createElementWithAttributes('button', {onclick: "deleteRoom(" + roomId + ")", class:'btn btn-danger'});
  const buttonEditRoom   = createElementWithAttributes('button', {onclick:'', class:'btn btn-success'});

  buttonEditRoom.innerHTML = 'Editar Cômodo';
  buttonDeleteRoom.innerHTML = 'Excluir Cômodo';

  roomDiv.appendChild(roomNameElement).appendChild(roomNameText);
  roomDiv.appendChild(roomTile);
  roomDiv.appendChild(buttonDeleteRoom);
  roomDiv.appendChild(buttonEditRoom);

  roomsList.appendChild(roomDiv);
}