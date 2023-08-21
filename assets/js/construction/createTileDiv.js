function createTileDiv(tileId, tileName, parentElement, tileDisplayElement){
  const tileImage = createElementWithAttributes('img', {src: findTilePath(tileName), class:'tile-image'});

  //Anonymous function being used as a callback to the function that sets the selected tile.
  //It's done this way because the latter function has parameters, 
  //so referencing it directly in the eventListener ends up calling it for every tile div created
  tileImage.addEventListener('click', function() {
    setRoomTile(tileId, tileName, tileDisplayElement)
  });
  tileImage.dataset.tileId = tileId;
  
  parentElement.appendChild(tileImage);
}

function setRoomTile(selectedTileId, selectedTileName, tileDisplayElement){
  tileId = selectedTileId;
  tileName = selectedTileName;
  tileDisplayElement.src = findTilePath(tileName);
}