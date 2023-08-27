var isMouseDown = false;
var isEraserModeOn = false;
var selectedRoomId, tileImgElement;
var canvas = houseDiagram.getContext("2d");
var houseTiles = {
  //STRUCTURE:
  //"x-y": roomId
  
  //Ex:
  //"0-0": 3 => Position 0-0 (top left corner) belongs to the room with id=3
};

// Initialization
window.addEventListener('load', () => {
  houseDiagram.width = CANVAS_WIDTH;
  houseDiagram.height = CANVAS_HEIGHT;
});

// Canvas clicked
houseDiagram.addEventListener("mousedown", (event) => {
   isMouseDown = true;
   updateCanvas(event);
});
houseDiagram.addEventListener("mousemove", (event) => {
   if (isMouseDown) {
    updateCanvas(event);
   }
});
houseDiagram.addEventListener("mouseup", () => {
   isMouseDown = false;
});
houseDiagram.addEventListener("mouseleave", () => {
   isMouseDown = false;
});

// House Editor Options
eraserModeButton.addEventListener('click', () => {
  if(isEraserModeOn){
    isEraserModeOn = false;
    eraserModeIndicator.innerHTML = 'OFF'
  } else {
    isEraserModeOn = true;
    eraserModeIndicator.innerHTML = 'ON'
  }
});

clearDiagramButton.addEventListener('click', () => {
  houseTiles = {};
  canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
});

// Triggered when a tile image is clicked in the rooms list
function setRoomToPaint(clickedRoomId, clickedTileImg){
  selectedRoomId = clickedRoomId;
  tileImgElement = clickedTileImg;

  //Update the UI to show selected tile
  let lastSelectedTile = document.querySelector(".selected-tile");
  if (lastSelectedTile) {
    lastSelectedTile.classList.remove("selected-tile");
  }
  tileImgElement.classList.add("selected-tile");
}

function updateCanvas(mouseEvent) {
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
  loadDiagram();
}

function loadDiagram(){
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



