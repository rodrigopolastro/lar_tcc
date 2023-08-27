function deleteRoom(deletingRoomId){
  roomId = deletingRoomId;

  deleteRoomRequest = new XMLHttpRequest();
  deleteRoomRequest.onreadystatechange = removeFromDiagramAndRoomsList;
  deleteRoomRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/roomsController.php");
  deleteRoomRequest.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded",
    );
  deleteRoomRequest.send("operation=deleteRoom" + 
                        "&room_id=" + roomId);
}

function removeFromDiagramAndRoomsList(){
  if (deleteRoomRequest.readyState === XMLHttpRequest.DONE) { 
    if (deleteRoomRequest.status === 200) {  
      //Remove deleted room tiles from diagram
      removeTilesFromRoom(roomId);
      //Save changes in database
      updateDiagramPositions();

      const deletedRoomDiv = document.querySelector("[data-room-id='" + roomId + "']");
      deletedRoomDiv.remove();
    } else {
      alert("There was a problem with the 'deleteRoom' request.");
    }
  }
}