function createTileImg(tile, parentElement, tileDisplayElement){
  const tileImage = createElementWithAttributes('img', {src: findTilePath(tile.tile_name), class:'tile-image'});

  //Anonymous function being used as a callback to the function that sets the selected tile.
  //It's done this way because the latter function has parameters, 
  //so referencing it directly in the eventListener ends up calling it for every tile div created
  tileImage.addEventListener('click', function() {
    setRoomTile(tile.tile_id, tile.tile_name, tileDisplayElement)
  });
  tileImage.dataset.tileId = tile.tile_id;
  
  parentElement.appendChild(tileImage);
}

function setRoomTile(selectedTileId, selectedTileName, tileDisplayElement){
  tileId = selectedTileId;
  tileName = selectedTileName;
  tileDisplayElement.src = findTilePath(tileName);
}