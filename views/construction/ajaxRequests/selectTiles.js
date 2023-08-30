window.addEventListener('load', selectTiles);

function selectTiles(){
  selectTilesRequest = new XMLHttpRequest();
  selectTilesRequest.onreadystatechange = listTiles;
  selectTilesRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/tilesController.php");
  selectTilesRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  selectTilesRequest.send("operation=selectTiles" +
                         "&placeholder_tile=" + PLACEHOLDER_TILE_NAME);
}

function listTiles(){
  if (selectTilesRequest.readyState === XMLHttpRequest.DONE) { 
    if (selectTilesRequest.status === 200) {   
      const tiles = JSON.parse(selectTilesRequest.responseText);

      tiles.forEach(tile => {
        createTileImg(tile, popoverContent, roomTileInputImg);
        createTileImg(tile, modalTilesList, modalRoomTileInputImg);
      })
      
      const popover = new bootstrap.Popover(roomTileInputDiv, {
        html: true, //CRUCIAL LINE -> otherwise the 'content' will be treated as plain text
        trigger: 'focus',
        title: 'Pisos Disponíveis',
        content: popoverContent
      });
    } else {
      alert("There was a problem with the 'selectTiles' request.");
    }
  } 
}