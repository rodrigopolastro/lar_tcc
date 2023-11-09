function createRoomDiv(room){
  const roomDiv = createElementWithAttributes('div', {class:'d-flex align-items-center bg-cream border-brown rounded-5 pt-2 pb-3 px-3 mb-3 mx-3 row w-100', style:"max-width: 400px"});
  roomDiv.dataset.roomId = room.room_id;

  const roomNameElement  = createElementWithAttributes('h4',{class:'txt-brown fw-bold'});
  const roomNameText     = document.createTextNode(room.room_name);

  const roomCenterRow    = createElementWithAttributes('div', {class:'d-flex'})
  
  const roomTileDiv      = createElementWithAttributes('div', {class:'col-4 d-flex flex-column align-items-center'})
  const roomTileImageDiv = createElementWithAttributes('div', {src: findTilePath(room.tile_name), class:'max-square mb-2'});
  const roomTileImg      = createElementWithAttributes('img', {src: findTilePath(room.tile_name), class:'h-100 rounded-2'});
  const tileNameElement  = createElementWithAttributes('h6', {class:'txt-brown text-center fw-bold'});
  const tileNameText     = document.createTextNode('Piso');
  
  const roomWallDiv      = createElementWithAttributes('div', {class: 'col-4 d-flex flex-column align-items-center'})
  const roomWallImageDiv = createElementWithAttributes('div', {class:'col max-square rounded-2 d-flex align-items-center justify-content-center overflow-hidden mb-2'})
  const roomWallImg      = createElementWithAttributes('img', {src: findWallPath(room.wall_name), class:'wall-img w-100'});
  const wallNameElement  = createElementWithAttributes('h6', {class:'txt-brown text-center fw-bold'});
  const wallNameText     = document.createTextNode('Parede');

  const buttonDeleteRoom = createElementWithAttributes('button', {class:'border border-0 h5 btn btn-link col-2'});
  const buttonEditRoom   = createElementWithAttributes('button', {class:'border border-0 h5 btn btn-link col-2'});
  const buttonDeleteImg  =  createElementWithAttributes('img',   {src: '../../assets/images/icons/trash.png'});
  const buttonEditImg    =  createElementWithAttributes('img',   {src: '../../assets/images/icons/pen.png'});

  roomTileImg.addEventListener('mousedown', function(){ setRoomTileToPaint(room.room_id, roomTileImg) });
  roomWallImg.addEventListener('mousedown', function(){ setRoomWallToPaint(room.room_id, roomWallImageDiv) });

  //Only allow room deletion if there are no furniture on it
  buttonDeleteRoom.addEventListener('click', function(){ selectFurnitureOfRoom(room.room_id) });
  buttonDeleteRoom.dataset.bsToggle = 'modal';
  buttonDeleteRoom.dataset.bsTarget = '#deletingRoomModal';

  buttonEditRoom.addEventListener('click', function(){ selectOneRoom(room.room_id) });
  buttonEditRoom.dataset.bsToggle = 'modal';
  buttonEditRoom.dataset.bsTarget = '#editingRoomModal';

  roomDiv.appendChild(roomNameElement).appendChild(roomNameText);
  roomTileDiv.appendChild(roomTileImageDiv).appendChild(roomTileImg);
  roomTileDiv.appendChild(tileNameElement).appendChild(tileNameText)
  roomWallDiv.appendChild(roomWallImageDiv).appendChild(roomWallImg);
  roomWallDiv.appendChild(wallNameElement).appendChild(wallNameText)
  roomCenterRow.appendChild(roomTileDiv)
  roomCenterRow.appendChild(roomWallDiv)
  roomCenterRow.appendChild(buttonDeleteRoom).appendChild(buttonDeleteImg);
  roomCenterRow.appendChild(buttonEditRoom).appendChild(buttonEditImg);
  roomDiv.appendChild(roomCenterRow)

  roomsList.appendChild(roomDiv);
}