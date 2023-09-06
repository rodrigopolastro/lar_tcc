var isMouseDown = false;
var isEraserModeOn = false;
var selectedRoomId, tileImgElement;
var canvas = houseDiagram.getContext("2d");


var layers = [
  //Bottom => Tiles and Walls
  {
    //STRUCTURE:
    //"x-y": roomId
    
    //Ex:
    //"0-0": 3 => Position 0-0 (top left corner) belongs to the room with id=3
  }, 

  //Top => Furniture
  {}
];

//============== INITIALIZATION ==============//
window.addEventListener('load', () => {
  houseDiagram.width = CANVAS_WIDTH;
  houseDiagram.height = CANVAS_HEIGHT;
});

//============== CANVAS EVENTS ==============//
houseDiagram.addEventListener("mousedown", (event) => {
  switch (currentSection) {
    case 'roomsSection':
      isMouseDown = true;
      updateDiagramTiles(event);
      break;
  
    case 'furnitureSection':
      if(selectedFurniture){
        updateDiagramFurniture(event, selectedFurniture);
      } else {
        alert('selecione um móvel!')
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
  houseTiles = {};
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

//============== CANVAS MODIFICATION FUNCTIONS ==============//

function updateDiagramTiles(mouseEvent) {
  let positionClicked = getCoordsInElement(mouseEvent);
  let key = positionClicked[0] + "-" + positionClicked[1];
  
  if(isEraserModeOn){
    delete houseTiles[key];
    removeTile(positionClicked[0], positionClicked[1]);
    } else {
      if(tileImgElement){
        houseTiles[key] = selectedRoomId;
        addTile(positionClicked[0], positionClicked[1]);
      } else {
        alert('selecione um piso para pintar!')
    }
  }
} 

function updateDiagramFurniture(mouseEvent, furniture){
  alert('chegou aqui mano')
  let positionClicked = getCoordsInElement(mouseEvent);
  let key = positionClicked[0] + "-" + positionClicked[1];  

  let positionX = positionClicked[0];
  let positionY = positionClicked[1] - (furniture.height - 1)
  canvas.drawImage(
    furniture.imgElement,         
    positionX * TILE_SIZE,  //X position in the canvas
    positionY * TILE_SIZE,  //Y position in the canvas
    furniture.width * TILE_SIZE,              //Final width of image in canvas
    furniture.height * TILE_SIZE               //Final height of image in canvas
  )
}

function addTile(positionX, positionY){
  canvas.drawImage(
    tileImgElement,         //Image element to grab
    positionX * TILE_SIZE,  //X position in the canvas
    positionY * TILE_SIZE,  //Y position in the canvas
    TILE_SIZE,              //Final width of image in canvas
    TILE_SIZE               //Final height of image in canvas
  )
}

function removeTile(positionX, positionY){
  canvas.clearRect(
    positionX * TILE_SIZE, 
    positionY * TILE_SIZE, 
    TILE_SIZE, 
    TILE_SIZE
  );
}

function removeTilesFromRoom(roomId){
  Object.entries(houseTiles).forEach(([key, value]) => {
    if(value == roomId){
      delete houseTiles[key];
    }
  });
  selectedRoomId = null;
  tileImgElement = null;
  reloadDiagram();
}

function reloadDiagram(){
  canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // Iterate over houseTiles and draw its tiles into canvas
  Object.entries(houseTiles).forEach(([key, value]) => {
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
}

//============== CANVAS OPTIONS FUNCTIONS ==============//

// Triggered when a tile image is clicked in the rooms list
function setRoomToPaint(clickedRoomId, clickedTileImg){
  selectedRoomId = clickedRoomId;
  tileImgElement = clickedTileImg;
  
  //Update UI to highlight selected tile
  removeLastTileHightlight();
  highlightSelectedTile();

  // Disable eraser mode
  setEraserMode(false);
}

function setEraserMode(setTo){
  if(setTo === true){
    isEraserModeOn = true;
    eraserModeIndicator.innerHTML = 'ON'
  } else {
    isEraserModeOn = false;
    eraserModeIndicator.innerHTML = 'OFF'
  }
}

function highlightSelectedTile(){ 
  if(tileImgElement){
    tileImgElement.classList.add("selected-tile");
  }
}

function removeLastTileHightlight(){
  let selectedTile = document.querySelector(".selected-tile");
  if (selectedTile) {
    selectedTile.classList.remove("selected-tile");
  }
}