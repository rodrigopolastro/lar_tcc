//============== INITIALIZATION ==============//
var isMouseDown = false;
var isEraserModeOn = false;
var selectedRoomId, tileImgElement;
var selectedFurnitureId, furnitureImgElement, furnitureWidth, furnitureHeight;
var canvas = houseDiagram.getContext("2d");
var currentLayer = 'tiles';

//STRUCTURE: //layer["x-y"]: imageId
//EXAMPLE:  //tiles["0-0"]: 3 => Position 0-0 (top left corner) belongs to the room with id=3
var diagramPositions = {
  tiles:{},
  walls:{},
  furniture:{
    startingPositions:{},
    allPositions:{}
  },
  topWalls:{}
};
//OBS: This initializaion above is only for reading purposes, because
//the variable is actually filled with the data from the database.

window.addEventListener('load', () => {
  houseDiagram.width = CANVAS_WIDTH;
  houseDiagram.height = CANVAS_HEIGHT;
});

//============== CANVAS EVENTS ==============//
houseDiagram.addEventListener("mousedown", (event) => {
  switch (currentLayer) {
    case 'tiles':
      isMouseDown = true;
      if(tileImgElement){
        updateDiagramTiles(event);
      } else {
        alert('selecione um piso para pintar!');
      }
      break;
  
    case 'furniture':
      if(furnitureImgElement){
        updateDiagramFurniture(event);
      } else {
        alert('selecione um móvel para inserir!');
      }
      break;
    }
});
houseDiagram.addEventListener("mousemove", (event) => {
   if (isMouseDown) {
    updateDiagramTiles(event);
   }
});
houseDiagram.addEventListener("mouseup", () => {
   isMouseDown = false;
});
houseDiagram.addEventListener("mouseleave", () => {
   isMouseDown = false;
});

//============== DIAGRAM EDITOR EVENTS ==============//
clearDiagramButton.addEventListener('click', () => {
  diagramPositions = {
    tiles:{},
    walls:{},
    furniture:{
      startingPositions:{},
      allPositions:{}
    },
    topWalls:{}
  };
  canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
});

eraserModeButton.addEventListener('click', function() {
  if(isEraserModeOn){
    setEraserMode(false);
    highlightSelectedTile();
    highlightSelectedFurniture();
  } else {
    setEraserMode(true);
    removeLastTileHightlight();
    removeLastFurnitureHightlight();
  }
});

function setEraserMode(setTo){
  if(setTo === true){
    isEraserModeOn = true;
    eraserModeIndicator.innerHTML = 'ON'
  } else {
    isEraserModeOn = false;
    eraserModeIndicator.innerHTML = 'OFF'
  }
}

//============== CANVAS MODIFICATION FUNCTIONS ==============//
function updateDiagramTiles(mouseEvent) {
  let positionClicked = getCoordsInElement(mouseEvent);
  let key = positionClicked[0] + "-" + positionClicked[1];
  
  if(isEraserModeOn){
    delete diagramPositions.tiles[key];
  } else {
    diagramPositions.tiles[key] = selectedRoomId;
  }
  reloadDiagram();
} 

function updateDiagramFurniture(mouseEvent){
  let positionClicked = getCoordsInElement(mouseEvent);
  let key = positionClicked[0] + "-" + positionClicked[1];  

  if(isEraserModeOn){
    // delete diagramPositions[key];
    // removeTile(positionClicked[0], positionClicked[1]);
    alert('apagando móvel (num fais nada inda)');
  } else {
    if(areFurniturePositionsAvailable(positionClicked)){
      diagramPositions.furniture.startingPositions[key] = selectedFurnitureId;
    }
  }
  reloadDiagram();
}

function areFurniturePositionsAvailable(positionClicked){
  let furnitureImage = document.querySelector("[data-furniture-image-id='" + selectedFurnitureId + "']");
  let furnitureWidth = furnitureImage.dataset.tilesWidth;
  let furnitureHeight = furnitureImage.dataset.tilesHeight;

  let positions = [];

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
      if(line < 0 || column > NUMBER_OF_COLUMNS - 1){
        return false;
      }
      if(diagramPositions.furniture.allPositions.hasOwnProperty(key)){
        return false;
      } 
      positions.push(key);
    }
  }
  
  //Only return true (allow furniture insertion) if all
  //the positions it will occupy are available.
  for(position of positions){
    diagramPositions.furniture.allPositions[position] = selectedFurnitureId;
  }
  return true;
}

function reloadDiagram(){
  canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  //LOAD TILES
  Object.entries(diagramPositions.tiles).forEach(([key, value]) => {
    let roomDiv = document.querySelector("[data-room-id='" + value + "']");
    let roomImg = roomDiv.querySelector("img");

    // //Determine x/y position of this placement from key ("3-4" -> x=3, y=4)
    let positionX = Number(key.split("-")[0]);
    let positionY = Number(key.split("-")[1]);

    canvas.drawImage(
      roomImg, 
      positionX * TILE_SIZE,  
      positionY * TILE_SIZE, 
      TILE_SIZE,     
      TILE_SIZE       
    );
  });

  //LOAD FURNITURE (on their starting positions)
  Object.entries(diagramPositions.furniture.startingPositions).forEach(([key, value]) => {
    let furnitureImage = document.querySelector("[data-furniture-image-id='" + value + "']");
    let furnitureWidth = furnitureImage.dataset.tilesWidth;
    let furnitureHeight = furnitureImage.dataset.tilesHeight;

    let positionX = Number(key.split("-")[0]);

    //Load image from bottom to top (which is more intuitive for the user) instead of 
    //the default top to bottom canvas approach
    let positionY = Number(key.split("-")[1]) - (furnitureHeight - 1); 

    canvas.drawImage(
      furnitureImage, 
      positionX * TILE_SIZE,  
      positionY * TILE_SIZE, 
      furnitureWidth * TILE_SIZE,     
      furnitureHeight * TILE_SIZE       
    );
  })
}






