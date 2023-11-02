// Triggered when a tile image is clicked in the rooms list
function setRoomTileToPaint(clickedRoomId, clickedTileImg){
  currentLayer = 'tiles';
  selectedRoomId = clickedRoomId;
  roomImgElement = clickedTileImg;
  
  //Update UI to highlight selected tile
  removeTileOrWallHighlight();
  highlightTileOrWall();

  // Disable eraser mode
  setEraserMode(false);
}

//Update the UI to show selected tile or wall
function highlightTileOrWall(){ 
  if(roomImgElement){
    roomImgElement.classList.add("selected-room-img");
  }
}

function removeTileOrWallHighlight(){
  let selectedImg = document.querySelector(".selected-room-img");
  if (selectedImg) {
    selectedImg.classList.remove("selected-room-img");
  }
}

// Triggered when a wall image is clicked in the rooms list
function setRoomWallToPaint(clickedRoomId, clickedWallImg){
  currentLayer = 'walls';
  selectedRoomId = clickedRoomId;
  roomImgElement = clickedWallImg;
  
  //Update UI to highlight selected tile
  removeTileOrWallHighlight();
  highlightTileOrWall();

  // Disable eraser mode
  setEraserMode(false);
}

function removeRoomTilesAndWalls(roomId){
  //Remove all tiles
  Object.entries(diagramPositions.tiles).forEach(([key, value]) => {
    if(value == roomId){
      delete diagramPositions.tiles[key];
    }
  });

  //Remove walls' starting positions
  let startingPositions = diagramPositions.walls.startingPositions;
  Object.keys(startingPositions).forEach((key) => {
    if(startingPositions[key] == roomId){
      delete diagramPositions.walls.startingPositions[key];
    }
  });

  //Remove all wall positions
  let allPositions = diagramPositions.walls.allPositions;
  Object.keys(allPositions).forEach((key) => {
    if(allPositions[key] == roomId){
      delete diagramPositions.walls.allPositions[key];
    }
  });

  selectedRoomId = null;
  roomImgElement = null;

  reloadDiagram();
  updateDiagramPositions();
}

function areWallPositionsAvailable(positionClicked){
  wallPositions = [];
  let column = positionClicked[0];
  for(let j=0; j<4; j++){
    let line = positionClicked[1] - j;
    key = column + "-" + line;

    if(diagramPositions.walls.allPositions.hasOwnProperty(key)){
      console.log('ERRO NA INSERÇÃO DA PAREDE: Já há uma parede ocupando essa posição.')
      return false;
    }

    if(line < 0){
      console.log('ERRO NA INSERÇÃO DA PAREDE: Limites do diagrama excedidos.')
      return false;
    }
    wallPositions.push(key)
  }
  return true;
}

function registerWallPositions(createdWallId){
  diagramPositions.walls.startingPositions[wallPositions[0]] = createdWallId;
  for(position of wallPositions){
    diagramPositions.walls.allPositions[position] = createdWallId;
  }

  reloadDiagram();
  updateDiagramPositions();
}

function removeWall(positionClicked){
  let wallStartingPosition = findWallStartingPosition(positionClicked)
  if(wallStartingPosition){
    let startingKey =  wallStartingPosition[0] + "-" + wallStartingPosition[1];
    delete diagramPositions.walls.startingPositions[startingKey];
    
    //delete all wall positions from bottom to top
    let column = wallStartingPosition[0];
    for(let j=0; j<4; j++){
      let line = wallStartingPosition[1] - j;
      let key = column + "-" + line;

      delete diagramPositions.walls.allPositions[key]
    }

    reloadDiagram();
    updateDiagramPositions();
  } else {
    console.log("ERRO NA DELEÇÃO DA PAREDE: Não há nenhuma parede na posição clicada.")
  }
    
  // find starting position by going down in the y coordinate
  function findWallStartingPosition(positionClicked){
    let x = positionClicked[0];
    for(let j=0; j<4; j++){
      let y = positionClicked[1] + j;
      let key = x + "-" + y;

      if(diagramPositions.walls.startingPositions.hasOwnProperty(key)){
        return [x, y];
      }
    }
    return false;
  }
}


