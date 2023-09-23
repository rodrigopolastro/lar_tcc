function createFurnitureDiv(furniture){
  const furnitureDiv = createElementWithAttributes('div', {});
  furnitureDiv.dataset.furnitureId = furniture.furniture_id;
  furnitureDiv.dataset.tilesWidth = furniture.tiles_width;
  furnitureDiv.dataset.tilesHeight = furniture.tiles_height;
  
  const furnitureNameElement  = createElementWithAttributes('h4', {});
  const furnitureNameText     = document.createTextNode(furniture.furniture_name);
  const furnitureImage        = createElementWithAttributes('img', {
    src: findFurniturePath(furniture.default_room_name, furniture.furniture_image_name), 
    class:''
  });
  
  furnitureImage.addEventListener('click', function() {
    setFurnitureToPaint(
      furniture.furniture_id, 
      furnitureImage, 
      furniture.tiles_width, 
      furniture.tiles_height
    )
  });

  // furnitureImage.dataset.furnitureId = furniture.furniture_id;
  // const buttonDeleteRoom = createElementWithAttributes('button', {class:'btn btn-danger'});
  // const buttonEditRoom   = createElementWithAttributes('button', {class:'btn btn-success'});

  // roomTile.addEventListener('mousedown', function(){ setRoomToPaint(room.room_id, roomTile) });

  // buttonDeleteRoom.addEventListener('click', function(){ deleteRoom(room.room_id) });
  // buttonDeleteRoom.innerHTML = 'Excluir Cômodo';

  // buttonEditRoom.addEventListener('click', function(){ selectOneRoom(room.room_id) });
  // buttonEditRoom.innerHTML = 'Editar Cômodo';
  // buttonEditRoom.dataset.bsToggle = 'modal';
  // buttonEditRoom.dataset.bsTarget = '#editingRoomModal';

  furnitureDiv.appendChild(furnitureNameElement).appendChild(furnitureNameText);
  furnitureDiv.appendChild(furnitureImage);
  // furnitureDiv.appendChild(buttonDeleteRoom);
  // furnitureDiv.appendChild(buttonEditRoom);

  myFurnitureList.appendChild(furnitureDiv);
}
