var lastTilePositionClicked = [], lastWallPositionClicked = [];

//============== INITIALIZATION ==============//

//STRUCTURE: 
//  KEY   = "x-y" (coordinates in the diagram, both being integer numbers representing the tiles lines and colmns)
//  VALUE = Tiles => roomId;
//          Walls => roomId;
//          TopWalls => imageId;
//          Furniture => furnitureId (user furniture, not the furniture image);

var diagramPositions = {
  tiles:{},
  furniture:{
    startingPositions:{},
    allPositions:{}
  },
  walls:{
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
      if(roomImgElement || isEraserModeOn){
        updateDiagramTiles(event);   
      } else {
        alert('selecione um piso para pintar!');
      }
      break;

    case 'walls':
      isMouseDown = true;
      if(roomImgElement || isEraserModeOn){
        updateDiagramWalls(event);   
      } else {
        alert('selecione uma parede para pintar!');
      }
      break;
  
    case 'furniture':
      if(furnitureImgElement || isEraserModeOn){
        updateDiagramFurniture(event); 
      } else {
        alert('selecione um móvel para inserir!');
      }
      break;

    case 'topWalls':
      if(topWallImgElement || isEraserModeOn){
        updateTopWalls(event); 
      } else {
        alert('selecione uma parede para inserir!');
      }
      break;

    case 'none':
      alert('Você precisa adicionar móveis à sua coleção!');
      break;
    }
});
houseDiagram.addEventListener("mousemove", (event) => {
   if (isMouseDown) {
    if (currentLayer == 'tiles'){
      updateDiagramTiles(event);
    } 
    if(currentLayer == 'walls'){
      updateDiagramWalls(event)
    }
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
    walls:{
      startingPositions:{},
      allPositions:{}
    },
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
    highlightTileOrWall();
    highlightSelectedFurniture();
  } else {
    setEraserMode(true);
    removeTileOrWallHighlight();
    removeLastFurnitureHightlight();
  }
});

function setEraserMode(setTo){
  if(setTo === true){
    isEraserModeOn = true;
    eraserModeIndicator.innerHTML = 'Ligada'
    eraserModeButton.classList.remove("opacity-25")
    eraserModeButton.classList.add("opacity-100")
  } else {
    isEraserModeOn = false;
    eraserModeIndicator.innerHTML = 'Desligada'
    eraserModeButton.classList.remove("opacity-100")
    eraserModeButton.classList.add("opacity-25")
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
  if(positionClicked[0] != lastTilePositionClicked[0] || positionClicked[1] != lastTilePositionClicked[1]){
    lastTilePositionClicked = positionClicked;
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

function updateDiagramWalls(mouseEvent) {
  let positionClicked = getCoordsInElement(mouseEvent);
  if(isEraserModeOn){
    removeWall(positionClicked)
  } else if(areWallPositionsAvailable(positionClicked)){
    registerWallPositions(selectedRoomId);
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

function updateTopWalls(mouseEvent){
  let positionClicked = getCoordsInElement(mouseEvent);
  let key = positionClicked[0] + "-" + positionClicked[1];

  if(isEraserModeOn){
    delete diagramPositions.topWalls[key]
  } else {
    // if(!diagramPositions.topWalls.hasOwnProperty(key)){
      diagramPositions.topWalls[key] = selectedTopWallName;
    // }
  }
  reloadDiagram()
}

function reloadDiagram(){
  // console.log(diagramPositions)
  canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  //LOAD TILES
  Object.entries(diagramPositions.tiles).forEach(([key, value]) => {
    let roomDiv = document.querySelector("[data-room-id='" + value + "']");
    let roomTileImg = roomDiv.querySelectorAll("img")[0]; //first img element inside room div

    // //Determine x/y position of this placement from key ("3-4" -> x=3, y=4)
    let positionX = Number(key.split("-")[0]);
    let positionY = Number(key.split("-")[1]);

    canvas.drawImage(
      roomTileImg, 
      positionX * TILE_SIZE,  
      positionY * TILE_SIZE, 
      TILE_SIZE,     
      TILE_SIZE       
    );
  });

  //LOAD WALLS
  Object.entries(diagramPositions.walls.startingPositions).forEach(([key, value]) => {
    let roomDiv = document.querySelector("[data-room-id='" + value + "']");
    let roomWallImg = roomDiv.querySelectorAll("img")[1]; //second img element inside room div

    let positionX = Number(key.split("-")[0]);

    let wallWidth = 1;
    let wallHeight = 3;
    //Load image from bottom to top (which is more intuitive for the user) instead of 
    //the default top to bottom canvas approach
    let positionY = Number(key.split("-")[1]) - (wallHeight - 1);

    canvas.drawImage(
      roomWallImg, 
      positionX * TILE_SIZE,  
      positionY * TILE_SIZE, 
      TILE_SIZE * wallWidth,     
      TILE_SIZE * wallHeight      
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
  
  //LOAD TOP WALLS
  Object.entries(diagramPositions.topWalls).forEach(([key, value]) => {
    let topWallImg = document.querySelector("[data-top-wall-name='" + value + "']");

    // //Determine x/y position of this placement from key ("3-4" -> x=3, y=4)
    let positionX = Number(key.split("-")[0]);
    let positionY = Number(key.split("-")[1]);

    canvas.drawImage(
      topWallImg, 
      positionX * TILE_SIZE,  
      positionY * TILE_SIZE, 
      TILE_SIZE,     
      TILE_SIZE       
    );
  });
}






