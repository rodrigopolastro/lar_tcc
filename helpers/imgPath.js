//TILES IMAGES
function findTilePath(tileName){
  return (TILES_DIRECTORY + tileName);
}

function isTileSelected(tileName){
  return (tileName != PLACEHOLDER_TILE_NAME);
}

function displayPlaceholderTile(){
  tileName = PLACEHOLDER_TILE_NAME;
  roomTileInputImg.src = findTilePath(tileName);
}
window.addEventListener('load', displayPlaceholderTile);

//FURNITURE IMAGES
function findFurniturePath(defaultRoomName, furnitureName){
  return (FURNITURE_DIRECTORY + defaultRoomName + "/" + furnitureName);
}

