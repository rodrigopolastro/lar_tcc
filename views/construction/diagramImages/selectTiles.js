window.addEventListener('load', selectTiles);

function selectTiles(){
  selectTilesRequest = new XMLHttpRequest();
  selectTilesRequest.onreadystatechange = listTiles;
  selectTilesRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/imagesController.php");
  selectTilesRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  selectTilesRequest.send("operation=selectTiles");
}

function listTiles(){
  if (selectTilesRequest.readyState === XMLHttpRequest.DONE) { 
    if (selectTilesRequest.status === 200) {   
      const tiles = JSON.parse(selectTilesRequest.responseText);

      tiles.forEach(tile => {
        createTileImg(tile, tilesPopoverContent, roomTileInputImg);
        createTileImg(tile, modalTilesList, modalRoomTileInputImg);
      })
      
      const tilesPopover = new bootstrap.Popover(roomTileInputDiv, {
        html: true, //CRUCIAL LINE -> otherwise the 'content' will be treated as plain text
        trigger: 'focus',
        title: 'Pisos Disponíveis',
        content: tilesPopoverContent
      });

      roomTileInputDiv.addEventListener('click', () => {
        tilesPopoverContent.classList.remove('d-none');
      })
    } else {
      alert("There was a problem with the 'selectTiles' request.");
    }
  } 
}