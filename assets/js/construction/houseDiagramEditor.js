var isMouseDown = false;
var isEraserModeOn = false;
var selectedRoomId, selectedTile, tileImgElement;
var houseTiles = {}
var canvas = houseDiagram.getContext("2d");

// TO DO:
// - Save button stores houseTiles object into database
// - Room Tile updated changes diagram tiles for that room
// - Room deleted removes diagram tiles for that room

window.addEventListener('load', () => {
  houseDiagram.width = CANVAS_WIDTH;
  houseDiagram.height = CANVAS_HEIGHT;
});

eraserModeButton.addEventListener('click', () => {
  if(isEraserModeOn){
    isEraserModeOn = false;
    eraserModeIndicator.innerHTML = 'OFF'
  } else {
    isEraserModeOn = true;
    eraserModeIndicator.innerHTML = 'ON'
  }
});

function setRoomToPaint(clickedRoomId, clickedRoomTileName, clickedTileImg){
  selectedRoomId = clickedRoomId;
  selectedTile   = clickedRoomTileName;
  tileImgElement = clickedTileImg;

  //Update the UI to show selected tile
  let lastSelectedTile = document.querySelector(".selected-tile");
  if (lastSelectedTile) {
    lastSelectedTile.classList.remove("selected-tile");
  }
  tileImgElement.classList.add("selected-tile");
}

// //Handler for placing new tiles on the map
function updateCanvas(mouseEvent) {
  if(tileImgElement){
    let positionClicked = getCoordsInElement(mouseEvent);
    let key = positionClicked[0] + "-" + positionClicked[1];
    
    if(isEraserModeOn){
      delete houseTiles[key];
      removeTile(positionClicked[0], positionClicked[1]);
    } else {
      houseTiles[key] = selectedRoomId;
      addTile(positionClicked[0], positionClicked[1]);
    }
  document.getElementById("here").innerHTML = JSON.stringify(houseTiles);
  } else {
    alert('selecione um piso para pintar!')
  }
}

function removeTile(x, y){
  canvas.clearRect(
    x * TILE_SIZE, 
    y * TILE_SIZE, 
    TILE_SIZE, 
    TILE_SIZE
  );
}

function addTile(x, y){
  canvas.drawImage(
    tileImgElement, //Image element to grab
    x * TILE_SIZE,  //X position in the canvas
    y * TILE_SIZE,  //Y position in the canvas
    TILE_SIZE,      //Final width of image in canvas
    TILE_SIZE       //Final height of image in canvas
  )
}

// //Bind mouse events for painting (or removing) tiles on click/drag
houseDiagram.addEventListener("mousedown", (event) => {
   isMouseDown = true;
   updateCanvas(event);
});
houseDiagram.addEventListener("mouseup", () => {
   isMouseDown = false;
});
houseDiagram.addEventListener("mouseleave", () => {
   isMouseDown = false;
});

houseDiagram.addEventListener("mousemove", (event) => {
   if (isMouseDown) {
    updateCanvas(event);
   }
});

//Reset state to empty
clearCanvasButton.addEventListener('click', () => {
  houseTiles = {};
  canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
});


