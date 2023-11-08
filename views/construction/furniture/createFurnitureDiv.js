function createFurnitureDiv(furniture){
  const furnitureDiv = createElementWithAttributes('div', {class:'border border-4 border-start-0 border-bottom-0 shadow-sm rounded-2 pb-2 row', width:'200px',});
  furnitureDiv.dataset.furnitureId = furniture.furniture_id;
  furnitureDiv.dataset.tilesWidth = furniture.tiles_width;
  furnitureDiv.dataset.tilesHeight = furniture.tiles_height;

  const furnitureImageDiv = createElementWithAttributes('div', {class:''});
  
  const furnitureNameElement  = createElementWithAttributes('h4', {class:'text-center'});
  const furnitureNameText     = document.createTextNode(furniture.furniture_name);
  const furnitureImage        = createElementWithAttributes('img', {
    src: findFurniturePath(furniture.default_room_name, furniture.furniture_image_name), 
    class:'row mx-auto', height:'150px',
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
