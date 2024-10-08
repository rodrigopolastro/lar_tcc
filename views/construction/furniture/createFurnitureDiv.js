function createFurnitureDiv(furniture){
  const furnitureDiv = createElementWithAttributes('div', {class:'bg-cream border-brown rounded-5 mx-2 my-2', style:''});
  furnitureDiv.dataset.furnitureId = furniture.furniture_id;
  furnitureDiv.dataset.tilesWidth = furniture.tiles_width;
  furnitureDiv.dataset.tilesHeight = furniture.tiles_height;

  const furnitureImageDiv = createElementWithAttributes('div', {class:'d-flex justify-content-center align-items-center'});
  
  const furnitureNameElement  = createElementWithAttributes('h4', {class:'text-center txt-brown fw-bold'});
  const furnitureNameText     = document.createTextNode(furniture.furniture_name);
  const furnitureImage        = createElementWithAttributes('img', {
    src: findFurniturePath(furniture.default_room_name, furniture.furniture_image_name), 
    class:'', height:'100px',
  });

  const editFurnitureButton   = createElementWithAttributes('button', {class:'border border-0 h5 btn btn-link col mx-5'});
  editFurnitureButton.addEventListener('click', function(){ selectPieceOfFurniture(furniture.furniture_id) });
  editFurnitureButton.dataset.bsToggle = 'modal';
  editFurnitureButton.dataset.bsTarget = '#editingFurnitureModal';
  
  const buttonEditImg    =  createElementWithAttributes('img', {src: '../../assets/images/icons/pen.png'});

  const deleteFurnitureButton = createElementWithAttributes('button', {class:'border border-0 h5 btn btn-link col mx-5'});
  deleteFurnitureButton.addEventListener('click', function(){ deleteFurniture(furniture.furniture_id) });

  const buttonDeleteImg  =  createElementWithAttributes('img', {src: '../../assets/images/icons/trash.png'});

  furnitureDiv.appendChild(furnitureNameElement).appendChild(furnitureNameText);
  furnitureDiv.appendChild(furnitureImageDiv).appendChild(furnitureImage);
  furnitureDiv.appendChild(editFurnitureButton).appendChild(buttonEditImg);
  furnitureDiv.appendChild(deleteFurnitureButton).appendChild(buttonDeleteImg);

  myFurnitureList.appendChild(furnitureDiv);
}
