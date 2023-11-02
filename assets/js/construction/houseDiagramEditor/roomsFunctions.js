// Triggered when a tile image is clicked in the rooms list
function setRoomTileToPaint(clickedRoomId, clickedTileImg){
  currentLayer = 'tiles';
  selectedRoomId = clickedRoomId;
  roomImgElement = clickedTileImg;
  
  //Update UI to highlight selected tile
  removeLastTileHightlight();
  highlightSelectedTile();

  // Disable eraser mode
  setEraserMode(false);
}

// Triggered when a wall image is clicked in the rooms list
function setRoomWallToPaint(clickedRoomId, clickedWallImg){
  currentLayer = 'walls';
  selectedRoomId = clickedRoomId;
  roomImgElement = clickedWallImg;
  
  //Update UI to highlight selected tile
  removeLastTileHightlight();
  highlightSelectedTile();

  // Disable eraser mode
  setEraserMode(false);
}

function removeTilesFromRoom(roomId){
  Object.entries(diagramPositions.tiles).forEach(([key, value]) => {
    if(value == roomId){
      delete diagramPositions.tiles[key];
    }
  });
  selectedRoomId = null;
  roomImgElement = null;

  reloadDiagram();
  updateDiagramPositions();
}

//Update the UI to show selected tile
function highlightSelectedTile(){ 
  if(roomImgElement){
    roomImgElement.classList.add("selected-room-img");
  }
}

function removeLastTileHightlight(){
  let selectedTile = document.querySelector(".selected-room-img");
  if (selectedTile) {
    selectedTile.classList.remove("selected-room-img");
  }
}
