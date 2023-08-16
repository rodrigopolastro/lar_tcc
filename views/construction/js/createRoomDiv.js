const roomsList = document.getElementById('roomsList');

function createRoomDiv(roomId, roomName, roomTileImage){
  // alert("criando div: " + roomName);
  const roomDiv = createElementWithAttributes('div', {});

  const roomNameElement  = createElementWithAttributes('h4', {});
  const roomNameText     = document.createTextNode(roomId + "-" + roomName);
  const roomTile         = createElementWithAttributes('img', {src: roomTileImage, onclick:''});
  const buttonDeleteRoom = createElementWithAttributes('button', {onclick:'', class:'btn btn-danger'});
  const buttonEditRoom   = createElementWithAttributes('button', {onclick:'', class:'btn btn-success'});

  buttonEditRoom.innerHTML = 'Editar Cômodo';
  buttonDeleteRoom.innerHTML = 'Excluir Cômodo';

  roomDiv.appendChild(roomNameElement).appendChild(roomNameText);
  roomDiv.appendChild(roomTile);
  roomDiv.appendChild(buttonDeleteRoom);
  roomDiv.appendChild(buttonEditRoom);

  roomsList.appendChild(roomDiv);
}