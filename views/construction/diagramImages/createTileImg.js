function createTileImg(tile, parentElement, tileDisplayElement){
  const tileImage = createElementWithAttributes('img', {src: findTilePath(tile.tile_name), class:'max-square rounded-2 m-2'});

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