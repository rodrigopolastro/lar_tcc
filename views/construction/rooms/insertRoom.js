createRoomButton.addEventListener('click', () => {
  //'isTileSelected' function is defined in 'helpers/imgPath.js'
  //It returns true if tileName is different than the PLACEHOLDER_TILE_NAME
  if(isTileSelected(tileName)){
    roomName = roomNameInput.value;
    insertRoom();
  } else {
    alert("Selecione um piso!");
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
                        "&tile_id=" + tileId);
}

function displayCreatedRoom(){
  if (insertRoomRequest.readyState === XMLHttpRequest.DONE) { 
    if (insertRoomRequest.status === 200) {   
      const response = JSON.parse(insertRoomRequest.responseText);
      
      if(response.is_room_created){
        createRoomDiv({
          room_id: response.value,
          room_name: roomName,
          tile_id: tileId,
          tile_name: tileName
        });
        displayPlaceholderTile();
      } else {
        alert("Erro na criação do cômodo: " + response.value);
      }
    } else {
      alert("There was a problem with the 'insertRoom' request.");
    }
  }
}

