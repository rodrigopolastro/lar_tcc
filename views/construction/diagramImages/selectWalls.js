window.addEventListener('load', selectWalls);

function selectWalls(){
  selectWallsRequest = new XMLHttpRequest();
  selectWallsRequest.onreadystatechange = listWalls;
  selectWallsRequest.open("POST", "/lar_tcc/controllers/imagesController.php");
  selectWallsRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  selectWallsRequest.send("operation=selectWalls");
}

function listWalls(){
  if (selectWallsRequest.readyState === XMLHttpRequest.DONE) { 
    if (selectWallsRequest.status === 200) {   
      const walls = JSON.parse(selectWallsRequest.responseText);
      
      walls.forEach(wall => {
        createWallImg(wall, wallsPopoverContent, roomWallInputImg);
        createWallImg(wall, modalWallsList, modalRoomWallInputImg);
      })
      
      const wallsPopover = new bootstrap.Popover(roomWallInputDiv, {
        html: true, //CRUCIAL LINE -> otherwise the 'content' will be treated as plain text
        trigger: 'focus',
        title: 'Paredes Disponíveis',
        content: wallsPopoverContent
      });

      roomWallInputDiv.addEventListener('click', () => {
        wallsPopoverContent.classList.remove('d-none');
      })
    } else {
      alert("There was a problem with the 'selectWalls' request.");
    }
  } 
}