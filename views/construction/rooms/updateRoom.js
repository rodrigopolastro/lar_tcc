modalUpdateRoomButton.addEventListener('click', () => {
  if(roomId && tileId){
    roomName = modalRoomNameInput.value;
    updateRoom();
  }
});

function updateRoom(){
  updateRoomRequest = new XMLHttpRequest();
  updateRoomRequest.onreadystatechange = updateDiagramAndRoomsList;
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

function updateDiagramAndRoomsList(){
  if (updateRoomRequest.readyState === XMLHttpRequest.DONE) { 
    if (updateRoomRequest.status === 200) { 
      const response = JSON.parse(updateRoomRequest.responseText);

      if(response.is_room_updated){
        const updatedRoom = document.querySelector("[data-room-id='" + roomId + "']");
        updatedRoom.querySelector('h4').innerHTML = roomName;
        updatedRoom.querySelector('img').src = findTilePath(tileName);
        
        //Reload diagram with new room tile
        reloadDiagram();
      } else {
        alert("Erro na edição do cômodo: " + response.value);
      }
    } else {
      alert("There was a problem with the 'updateRoom' request.");
    }
  }
}