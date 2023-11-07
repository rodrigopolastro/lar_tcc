function createRoomDiv(room){
  const roomDiv = createElementWithAttributes('div', {class:'d-flex align-items-center bg-cream border-brown rounded-5 pt-2 pb-2 pe-2 mb-3 row'});
  roomDiv.dataset.roomId = room.room_id;

  const roomNameElement  = createElementWithAttributes('h4',      {class:'txt-brown fw-bold'});
  const roomNameText     = document.createTextNode(room.room_name);
  const roomTile         = createElementWithAttributes('img',    {src: findTilePath(room.tile_name), class:'tile-image ms-2 rounded-2'});
  const roomImgDiv       = createElementWithAttributes('div',    {class:'col'})
  const buttonDeleteRoom = createElementWithAttributes('button', {class:'border border-0 h5 btn btn-link col mx-5'});
  const buttonEditRoom   = createElementWithAttributes('button', {class:'border border-0 h5 btn btn-link col mx-5'});
  const buttonDeleteImg  =  createElementWithAttributes('img',   {src: '../../assets/images/icons/trash.png'});
  const buttonEditImg    =  createElementWithAttributes('img',   {src: '../../assets/images/icons/pen.png'});

  roomTile.addEventListener('mousedown', function(){ setRoomToPaint(room.room_id, roomTile) });

  buttonDeleteRoom.addEventListener('click', function(){ selectFurnitureOfRoom(room.room_id) });
  buttonDeleteRoom.dataset.bsToggle = 'modal';
  buttonDeleteRoom.dataset.bsTarget = '#deletingRoomModal';

  buttonEditRoom.addEventListener('click', function(){ selectOneRoom(room.room_id) });
  buttonEditRoom.dataset.bsToggle = 'modal';
  buttonEditRoom.dataset.bsTarget = '#editingRoomModal';

  roomDiv.appendChild(roomNameElement).appendChild(roomNameText);
  roomDiv.appendChild(roomImgDiv).appendChild(roomTile);
  roomDiv.appendChild(buttonDeleteRoom).appendChild(buttonDeleteImg);
  roomDiv.appendChild(buttonEditRoom).appendChild(buttonEditImg);

  roomsList.appendChild(roomDiv);
}