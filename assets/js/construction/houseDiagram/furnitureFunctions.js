// Triggered when a furniture image is clicked in the rooms list
function setFurnitureToPaint(clickedFurnitureImg, clickedFurnitureWidth, clickedFurnitureHeight){
  // alert('chegou na seleção de móveis')
  furnitureImgElement    = clickedFurnitureImg;
  furnitureWidth  = clickedFurnitureWidth;
  furnitureHeight = clickedFurnitureHeight;

  //Update UI to highlight selected tile
  removeLastFurnitureHightlight();
  highlightSelectedFurniture();

  // Disable eraser mode
  setEraserMode(false);
}

//Update the UI to show selected furniture
function highlightSelectedFurniture(){ 
  if(furnitureImgElement){
    furnitureImgElement.classList.add("selected-furniture");
  }
}

function removeLastFurnitureHightlight(){
  let selectedFurniture = document.querySelector(".selected-furniture");
  if (selectedFurniture) {
    selectedFurniture.classList.remove("selected-furniture");
  }
}
