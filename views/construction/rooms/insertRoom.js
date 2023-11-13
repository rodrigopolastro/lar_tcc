createRoomButton.addEventListener('click', () => {
  //'isTileSelected' function is defined in 'helpers/imgPath.js'
  //It returns true if tileName is different than the PLACEHOLDER_TILE_NAME
  if(isTileSelected(tileName) && isWallSelected(wallName)){
    if(roomNameInput.value == 'other'){
      roomName = roomNameTextInput.value 
      if(!roomName){ roomName = "Novo Cômodo" }
    } else {
      let selectedIndex = roomNameInput.selectedIndex
      roomName = roomNameInput[selectedIndex].innerHTML;
    }
    insertRoom();
  } else {
    alert("Selecione o piso e a parede!");
  }
});

function insertRoom(){
  insertRoomRequest = new XMLHttpRequest();
  insertRoomRequest.onreadystatechange = displayCreatedRoom;
  insertRoomRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/roomsController.php");
  insertRoomRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  insertRoomRequest.send("operation=insertRoom" + 
                        "&room_name=" + roomName +
                        "&tile_id=" + tileId + 
                        "&wall_id=" + wallId);
}

function displayCreatedRoom(){
  if (insertRoomRequest.readyState === XMLHttpRequest.DONE) { 
    if (insertRoomRequest.status === 200) { 
      console.log(insertRoomRequest.responseText)  
      const response = JSON.parse(insertRoomRequest.responseText);
      
      if(response.is_room_created){
        createRoomDiv({
          room_id: response.value,
          room_name: roomName,
          tile_id: tileId,
          tile_name: tileName,
          wall_id: wallId,
          wall_name: wallName
        });
        displayPlaceholderTile();
        displayPlaceholderWall();
      } else {
        alert("Erro na criação do cômodo: " + response.value);
      }
    } else {
      alert("There was a problem with the 'insertRoom' request.");
    }
  }
}

