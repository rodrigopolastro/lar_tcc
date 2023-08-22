function findTilePath(tileName){
  return (TILES_DIRECTORY + tileName);
}

function isTileSelected(tileName){
  return (tileName != PLACEHOLDER_TILE_NAME);
}

document.body.onload = displayPlaceholderTile;

function displayPlaceholderTile(){
  tileName = PLACEHOLDER_TILE_NAME;
  roomTileInputImg.src = findTilePath(tileName);
}
