// Triggered when a furniture image is clicked in the rooms list
function setFurnitureToPaint(clickedFurnitureId, clickedFurnitureImg, clickedFurnitureWidth, clickedFurnitureHeight){
  selectedFurnitureImageId = clickedFurnitureId;
  furnitureImgElement      = clickedFurnitureImg;
  furnitureWidth           = clickedFurnitureWidth;
  furnitureHeight          = clickedFurnitureHeight;
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

function areFurniturePositionsAvailable(positionClicked){
  let tileKey = positionClicked[0] + "-" + positionClicked[1];
  let clickedRoomId = diagramPositions.tiles[tileKey];
  // alert(clickedRoomId)
  if (!clickedRoomId){
    return false;
  }
  let positions = [];
  // alert(clickedRoomId)
  //Ex: A 4x2 object is clicked on the bottom-left corner position (positionClicked=[0,19]) .
  //It must: (width=4, height=2)
  //- Occupy height=2 lines with width=4 tiles each.
  //- Line 1 (last line):        "0-19", "1-19", "2-19", "3-19"
  //- Line 2 (penultimate line): "0-18", "1-18", "2-18", "3-18"
  for(let j=0; j<furnitureHeight; j++){
    let line = positionClicked[1] - j;
    for(let i=0; i<furnitureWidth; i++){
      let column = positionClicked[0] + i;
      let key = column + "-" + line; 
      
      // Does not allow furniture insertion in an empty space (with no tile)
      if(!diagramPositions.tiles.hasOwnProperty(key)){
        return false;
      }

      // Block furniture insertion if it occupies two or more different rooms
      if(diagramPositions.tiles[key] != clickedRoomId){
        return false;
      }

      // Block furniture insertion if does not fit into the diagram
      if(line < 0 || column > NUMBER_OF_COLUMNS - 1){
        return false;
      }

      // Block furniture insertion if there is another furniture on those positions
      if(diagramPositions.furniture.allPositions.hasOwnProperty(key)){
        return false;
      } 
      positions.push(key);
    }
  }
  
  // for(position of positions){
  //   diagramPositions.furniture.allPositions[position] = createdFurnitureId;
  // }

  //Only return true (allow furniture insertion) if all
  //the positions it will occupy are available.
  return true;
}

function deleteFurnitureFromDiagram(key){
  let clickedFurnitureId = diagramPositions.furniture.allPositions[key];

  let startingPositions = diagramPositions.furniture.startingPositions;
  Object.keys(startingPositions).forEach((key) => {
    if(startingPositions[key] == clickedFurnitureId){
      delete diagramPositions.furniture.startingPositions[key];
    }
  });

  let allPositions = diagramPositions.furniture.allPositions;
  Object.keys(allPositions).forEach((key) => {
    if(allPositions[key] == clickedFurnitureId){
      delete diagramPositions.furniture.allPositions[key];
    }
  });
}
