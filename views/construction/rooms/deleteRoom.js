modalDeleteRoomButton.addEventListener('click', function() { deleteRoom() })

function deleteRoom(){
  deleteRoomRequest = new XMLHttpRequest();
  deleteRoomRequest.onreadystatechange = removeFromDiagramAndRoomsList;
  deleteRoomRequest.open("POST", "/lar_tcc/controllers/roomsController.php");
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
      const response = JSON.parse(deleteRoomRequest.responseText);

      if(response.is_room_deleted){
        //Delete room div
        const deletedRoomDiv = document.querySelector("[data-room-id='" + roomId + "']");
        deletedRoomDiv.remove();
        
        //Remove deleted room tiles from diagram
        removeRoomTilesAndWalls(roomId);
      } else {
        alert("Ocorreu um erro na exclusão do cômodo: room_id inválido");
      }
    } else {
      alert("There was a problem with the 'deleteRoom' request.");
    }
  }
}