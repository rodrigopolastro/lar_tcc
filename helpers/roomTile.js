function findTilePath(tileName){
  return (tilesDirectory + tileName);
}

function isTileSelected(tileName){
  return (tileName != placeholderTileName);
}

document.body.onload = displayPlaceholderTile();

function displayPlaceholderTile(){
  tileName = placeholderTileName;
  roomTileInputImg.src = findTilePath(tileName);
}
