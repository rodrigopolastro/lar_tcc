const tilesDirectory = "/htdocsDirectories/lar_tcc/assets/images/tiles/";
function findTilePath(tileName){
  return (tilesDirectory + tileName);
}

const placeholderTileName = "placeholderTile.png";
function isTileSelected(tileName){
  return (tileName != placeholderTileName);
}