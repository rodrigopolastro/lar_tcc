modalUpdateRoomButton.addEventListener('click', () => {
  if(roomId && tileId){
    roomName = modalRoomNameInput.value;
    updateRoom();
  }
});

function updateRoom(){
  updateRoomRequest = new XMLHttpRequest();
  updateRoomRequest.onreadystatechange = updateEditedRoomDiv;
  updateRoomRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/roomsController.php");
  updateRoomRequest.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded",
    );
  updateRoomRequest.send("operation=updateRoom" + 
                        "&room_id=" + roomId +
                        "&tile_id=" + tileId + 
                        "&room_name=" + roomName);
}

function updateEditedRoomDiv(){
  if (updateRoomRequest.readyState === XMLHttpRequest.DONE) { 
    if (updateRoomRequest.status === 200) { 
      const response = JSON.parse(updateRoomRequest.responseText);

      if(response.is_room_updated){
        const updatedRoom = document.querySelector("[data-room-id='" + roomId + "']");
        updatedRoom.querySelector('h4').innerHTML = roomName;
        updatedRoom.querySelector('img').src = findTilePath(tileName);
      } else {
        alert("Erro na edição do cômodo: " + response.value);
      }
    } else {
      alert("There was a problem with the 'editRoom' request.");
    }
  }
}