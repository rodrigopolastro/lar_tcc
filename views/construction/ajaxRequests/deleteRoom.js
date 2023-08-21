function deleteRoom(deletingRoomId){
  roomId = deletingRoomId;

  deleteRoomRequest = new XMLHttpRequest();
  deleteRoomRequest.onreadystatechange = removeDeletedRoomDiv;
  deleteRoomRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/roomsController.php");
  deleteRoomRequest.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded",
    );
  deleteRoomRequest.send("operation=deleteRoom" + 
                        "&room_id=" + roomId);
}

function removeDeletedRoomDiv(){
  if (deleteRoomRequest.readyState === XMLHttpRequest.DONE) { 
    if (deleteRoomRequest.status === 200) {  
      const deletedRoom = document.querySelector("[data-room-id='" + roomId + "']");
      deletedRoom.remove();
    } else {
      alert("There was a problem with the 'deleteRoom' request.");
    }
  }
}