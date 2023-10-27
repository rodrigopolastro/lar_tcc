var lastPositionClicked=[];

//============== INITIALIZATION ==============//

//STRUCTURE: 
//  KEY   = "x-y" (coordinates in the diagram, both being integer numbers representing the tiles lines and colmns)
//  VALUE = Tiles => roomId;
//          Walls and TopWalls => imageId;
//          Furniture => furnitureId (user furniture, not the furniture image)

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
      if(tileImgElement || isEraserModeOn){
        updateDiagramTiles(event);   
      } else {
        alert('selecione um piso para pintar!');
      }
      break;
  
    case 'furniture':
      if(furnitureImgElement || isEraserModeOn){
        updateDiagramFurniture(event); 
      } else {
        alert('selecione um móvel para inserir!');
      }
      break;

    case 'none':
      alert('Você precisa adicionar móveis à sua coleção!');
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
  deleteAllFurniture(); //Delete furniture from database (and reload diagram)
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

//OBS: the 'saveButton' click event is defined on 'updateDiagramPositions' AJAX request file

//============== CANVAS MODIFICATION FUNCTIONS ==============//
function updateDiagramTiles(mouseEvent) {
  let positionClicked = getCoordsInElement(mouseEvent);

  
  //Only reloads diagram if a new tile is clicked. (avoid new canvas reloads 
  //and diagram requests for every possible pixel in a tile since we're listening to the 'mousemove' event)

  //BROOOOOOOOO
  //Pleeease make apply early returns here.
  //Those 4 nested IFs are hurting my soul
  if(positionClicked[0] != lastPositionClicked[0] || positionClicked[1] != lastPositionClicked[1]){
    // console.log(lastPositionClicked)
    // console.log(positionClicked)
    lastPositionClicked = positionClicked;
    let key = positionClicked[0] + "-" + positionClicked[1];
    
    if(isEraserModeOn){
      if(diagramPositions.tiles.hasOwnProperty(key)){
        if(!diagramPositions.furniture.allPositions.hasOwnProperty(key)){
          delete diagramPositions.tiles[key];
          reloadDiagram();           
          updateDiagramPositions();
        } else {
          console.log('ERRO NA DELEÇÃO DO PISO: Há um móvel sobre este piso.')
        }
      } else {
        console.log('ERRO NA DELEÇÃO DO PISO: Não há nenhum piso na posição selecionada')
      }
    } else {
      if(!diagramPositions.furniture.allPositions.hasOwnProperty(key)){
        diagramPositions.tiles[key] = selectedRoomId;
        reloadDiagram();           
        updateDiagramPositions();
      } else {
        console.log('ERRO NA INSERÇÃO DO PISO: Há um móvel sobre esta posição!')
      }
    }
  }
} 

function updateDiagramFurniture(mouseEvent){
  let positionClicked = getCoordsInElement(mouseEvent);
  let key = positionClicked[0] + "-" + positionClicked[1]; 

  if(diagramPositions.tiles.hasOwnProperty(key)){
    if(isEraserModeOn){
      //Delete user furniture from database before removing it from the diagram
      furnitureId = diagramPositions.furniture.allPositions[key]
      if(furnitureId){ deleteFurniture(furnitureId) };
    } else {
      if(areFurniturePositionsAvailable(positionClicked)){
          //Data required for the furniture creation
          createdFurnitureStartingPosition = key;
          furnitureRoomId = diagramPositions.tiles[key]
          furnitureName = furnitureNameInput.value;
          //Request to register user furniture before adding it to the diagram
          insertFurniture(); 
      }
    }
  } else {
    console.log('ERRO NA MODIFICAÇÃO DO MÓVEL: Espaço vazio clicado.')
  }
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
    let furnitureDiv    = document.querySelector("[data-furniture-id='" + value + "']");
    let furnitureWidth  = furnitureDiv.dataset.tilesWidth;
    let furnitureHeight = furnitureDiv.dataset.tilesHeight;
    let furnitureImage  = furnitureDiv.querySelector("img");

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






