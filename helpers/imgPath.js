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
function findFurniturePath(defaultRoomName, furnitureImageName){
  return (FURNITURE_DIRECTORY + defaultRoomName + "/" + furnitureImageName);
}

// function isFurnitureSelected(furnitureImageName){
//   return (furnitureImageName != PLACEHOLDER_FURNITURE_NAME);
// }

// function displayPlaceholderFurniture(){
//   furnitureImageName = PLACEHOLDER_FURNITURE_NAME;
//   furnitureInputImg.src = FURNITURE_DIRECTORY + furnitureImageName;
// }
// window.addEventListener('load', displayPlaceholderFurniture);


