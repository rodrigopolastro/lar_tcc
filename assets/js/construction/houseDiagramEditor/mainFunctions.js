//============== INITIALIZATION ==============//
var isMouseDown = false;
var isEraserModeOn = false;
var selectedRoomId, tileImgElement;
var selectedFurnitureId, furnitureImgElement, furnitureWidth, furnitureHeight;
var canvas = houseDiagram.getContext("2d");
var currentLayer = 'tiles';

//This initializaion is only for reading purposes, because
//the variable is actually filled with the data from the database.
var diagramPositions = {
  tiles:{
    //STRUCTURE:
    //"x-y": roomId
    
    //Ex:
    //"0-0": 3 => Position 0-0 (top left corner) belongs to the room with id=3
  },
  walls:{},
  furniture:{},
  topWalls:{}
}

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
      //does it work? (if it does, remember to update the 'clearDiagram' function and the 'seed.sql' file)
      // startingPosition:[],
      // allPositions:{}
    },
    topWalls:{}
  };
  canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
});

eraserModeButton.addEventListener('click', function() {
  if(isEraserModeOn){
    setEraserMode(false);
    highlightSelectedTile();
  } else {
    setEraserMode(true);
    removeLastTileHightlight();
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
    //Here I have to set all the 
    diagramPositions.furniture[key] = selectedFurnitureId;
  }
  reloadDiagram();
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

  //LOAD FURNITURE
  Object.entries(diagramPositions.furniture).forEach(([key, value]) => {
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






