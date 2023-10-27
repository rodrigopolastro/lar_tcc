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

  const editFurnitureButton   = createElementWithAttributes('button', {class:'btn btn-success'});
  editFurnitureButton.addEventListener('click', function(){ selectPieceOfFurniture(furniture.furniture_id) });
  editFurnitureButton.innerHTML = 'Alterar Nome';
  editFurnitureButton.dataset.bsToggle = 'modal';
  editFurnitureButton.dataset.bsTarget = '#editingFurnitureModal';
  
  const deleteFurnitureButton = createElementWithAttributes('button', {class:'btn btn-danger'});
  deleteFurnitureButton.addEventListener('click', function(){ deleteFurniture(furniture.furniture_id) });
  deleteFurnitureButton.innerHTML = 'Excluir Móvel';

  furnitureDiv.appendChild(furnitureNameElement).appendChild(furnitureNameText);
  furnitureDiv.appendChild(furnitureImage);
  furnitureDiv.appendChild(editFurnitureButton);
  furnitureDiv.appendChild(deleteFurnitureButton);

  myFurnitureList.appendChild(furnitureDiv);
}
