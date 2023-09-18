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

function removeTilesFromRoom(roomId){
  Object.entries(diagramPositions.tiles).forEach(([key, value]) => {
    if(value == roomId){
      delete diagramPositions.tiles[key];
    }
  });
  selectedRoomId = null;
  tileImgElement = null;
  reloadDiagram();
}

//Update the UI to show selected tile
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
