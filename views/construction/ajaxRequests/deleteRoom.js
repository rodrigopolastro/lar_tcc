function deleteRoom(deletingRoomId){
  roomId = deletingRoomId;
  deleteRoomRequest = new XMLHttpRequest();
  deleteRoomRequest.onreadystatechange = removeDeletedTaskDiv;
  deleteRoomRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/roomsController.php");
  deleteRoomRequest.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded",
    );
  deleteRoomRequest.send("operation=deleteRoom" + 
                        "&room_id=" + roomId);
}

function removeDeletedTaskDiv(){
  if (deleteRoomRequest.readyState === XMLHttpRequest.DONE) { 
    if (deleteRoomRequest.status === 200) { 
      let attributeValue = "[data-room-id='" + roomId + "']"
      const deletedRoom = document.querySelector(attributeValue);
      deletedRoom.remove();
    } else {
      alert("There was a problem with the 'deleteRoom' request.");
    }
  }
}