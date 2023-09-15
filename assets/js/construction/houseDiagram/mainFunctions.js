var isMouseDown = false;
var isEraserModeOn = false;
var selectedRoomId, tileImgElement;
var furnitureImgElement, furnitureWidth, furnitureHeight;
var currentSection, currentLayer;
var canvas = houseDiagram.getContext("2d");

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
      if(tileImgElement){
        updateDiagramTiles(event);
      } else {
        alert('selecione um piso para pintar!');
      }
      break;
  
    case 'furnitureSection':
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
  diagramPositions = {};
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

  let positionX = positionClicked[0];
  let positionY = positionClicked[1] - (furnitureHeight - 1);

  if(isEraserModeOn){
    // delete diagramPositions[key];
    // removeTile(positionClicked[0], positionClicked[1]);
    alert('apagando móvel');
    } else {
      if(furnitureImgElement){
        // diagramPositions[key] = selectedRoomId;
        canvas.drawImage(
          furnitureImgElement,         
          positionX * TILE_SIZE,  //X position in the canvas
          positionY * TILE_SIZE,  //Y position in the canvas
          furnitureWidth * TILE_SIZE,              //Final width of image in canvas
          furnitureHeight * TILE_SIZE               //Final height of image in canvas
        );
        diagramPositions.furniture[key] = "teste";
      } else {
        alert('selecione um móvel para inserir!')
    }
  }
}

function reloadDiagram(){
  canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // Iterate over diagramPositions and draw its tiles into canvas
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

  Object.entries(diagramPositions.furniture).forEach(([key, value]) => {
    let positionX = Number(key.split("-")[0]);
    let positionY = Number(key.split("-")[1]);
    let furnitureImage = document.querySelector("#furnitureList").querySelector("img");
    let furnitureWidth = furnitureImage.dataset.tilesWidth;
    let furnitureHeight = furnitureImage.dataset.tilesHeight;

    if(value == "teste"){
      canvas.drawImage(
        furnitureImage, 
        positionX * TILE_SIZE,  
        positionY * TILE_SIZE, 
        TILE_SIZE,     
        TILE_SIZE       
      );
    }
  })
}






