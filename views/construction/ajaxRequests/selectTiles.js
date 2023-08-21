document.body.onload = selectTiles();

function selectTiles(){
  selectTilesRequest = new XMLHttpRequest();
  selectTilesRequest.onreadystatechange = listTiles;
  selectTilesRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/tilesController.php");
  selectTilesRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  selectTilesRequest.send("operation=selectTiles" +
                         "&placeholderTile=" + placeholderTileName);
}

function listTiles(){
  if (selectTilesRequest.readyState === XMLHttpRequest.DONE) { 
    if (selectTilesRequest.status === 200) { 
      // alert(selectTilesRequest.responseText);  
      const tiles = JSON.parse(selectTilesRequest.responseText);

      tiles.forEach(tile => {
        createTileDiv(tile.tile_id, tile.tile_name);
      })

      const options = {
        //CRUCIAL LINE (otherwise the 'content' will be treated as plain text) 
        html: true,
        
        trigger: 'focus',
        title: 'Pisos Disponíveis',
        content: popoverContent
      }
      
      const popover = new bootstrap.Popover(roomTileInputDiv, options);
    } else {
      alert("There was a problem with the 'selectTiles' request.");
    }
  } 
}