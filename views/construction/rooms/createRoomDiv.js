function createRoomDiv(room){
  const roomDiv = createElementWithAttributes('div', {class:'d-flex align-items-center bg-cream border-brown rounded-5 pt-2 pb-2 pe-2 mb-3 row'});
  roomDiv.dataset.roomId = room.room_id;

  const roomNameElement  = createElementWithAttributes('h4',      {class:'txt-brown fw-bold'});
  const roomNameText     = document.createTextNode(room.room_name);
  const roomTileDiv      = createElementWithAttributes('div', {class:'col'})
  const roomTileImg      = createElementWithAttributes('img', {src: findTilePath(room.tile_name), class:'tile-image ms-2'});
  const roomWallDiv      = createElementWithAttributes('div', {class:'col wall-image rounded-2 d-flex align-items-center justify-content-center overflow-hidden'})
  const roomWallImg      = createElementWithAttributes('img', {src: findWallPath(room.wall_name), class:'', height: "400px"});
  const buttonsDiv = createElementWithAttributes('div', {class:'row'}) 
  const buttonDeleteRoom = createElementWithAttributes('button', {class:'border border-0 h5 btn btn-link col mx-5'});
  const buttonEditRoom   = createElementWithAttributes('button', {class:'border border-0 h5 btn btn-link col mx-5'});
  const buttonDeleteImg  =  createElementWithAttributes('img',   {src: '../../assets/images/icons/trash.png'});
  const buttonEditImg    =  createElementWithAttributes('img',   {src: '../../assets/images/icons/pen.png'});

  roomTileImg.addEventListener('mousedown', function(){ setRoomTileToPaint(room.room_id, roomTileImg) });
  roomWallImg.addEventListener('mousedown', function(){ setRoomWallToPaint(room.room_id, roomWallDiv) });

  //Only allow room deletion if there are no furniture on it
  buttonDeleteRoom.addEventListener('click', function(){ selectFurnitureOfRoom(room.room_id) });
  buttonDeleteRoom.dataset.bsToggle = 'modal';
  buttonDeleteRoom.dataset.bsTarget = '#deletingRoomModal';

  buttonEditRoom.addEventListener('click', function(){ selectOneRoom(room.room_id) });
  buttonEditRoom.dataset.bsToggle = 'modal';
  buttonEditRoom.dataset.bsTarget = '#editingRoomModal';

  roomDiv.appendChild(roomNameElement).appendChild(roomNameText);
  roomDiv.appendChild(roomTileDiv).appendChild(roomTileImg);
  roomDiv.appendChild(roomWallDiv).appendChild(roomWallImg);
  buttonsDiv.appendChild(buttonDeleteRoom).appendChild(buttonDeleteImg);
  buttonsDiv.appendChild(buttonEditRoom).appendChild(buttonEditImg);
  roomDiv.appendChild(buttonsDiv)

  roomsList.appendChild(roomDiv);
}