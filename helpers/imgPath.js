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

//WALLS IMAGES
function findWallPath(wallName){
  return (WALLS_DIRECTORY + wallName);
}

function displayPlaceholderWall(){
  wallName = PLACEHOLDER_WALL_NAME;
  roomWallInputImg.src = findWallPath(wallName);
}

function isWallSelected(wallName){
  return (wallName != PLACEHOLDER_WALL_NAME);
}
window.addEventListener('load', displayPlaceholderWall);
  
//FURNITURE IMAGES
function findFurniturePath(defaultRoomName, furnitureName){
  return (FURNITURE_DIRECTORY + defaultRoomName + "/" + furnitureName);
}

