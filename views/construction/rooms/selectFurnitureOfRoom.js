function selectFurnitureOfRoom(room_id) {
  roomId = room_id;
  
  selectFurnitureOfRoomRequest = new XMLHttpRequest();
  selectFurnitureOfRoomRequest.onreadystatechange = countResults;
  selectFurnitureOfRoomRequest.open("POST", "/myDirectories/lar_tcc/controllers/furnitureController.php");
  selectFurnitureOfRoomRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  selectFurnitureOfRoomRequest.send("operation=selectFurnitureOfRoom" + 
                                    "&room_id=" + roomId);
}

function countResults() {
  if (selectFurnitureOfRoomRequest.readyState === XMLHttpRequest.DONE) { 
    if (selectFurnitureOfRoomRequest.status === 200) {              
      const furniture = JSON.parse(selectFurnitureOfRoomRequest.responseText);
      if(furniture.length == 0){
        deletingRoomMessage.innerHTML = "Tem certeza que deseja excluir este cômodo?"
        modalDeleteRoomButton.classList.remove('d-none')
      } else {
        deletingRoomMessage.innerHTML = "Não é possível excluir este cômodo pois há móveis sobre ele."
        modalDeleteRoomButton.classList.add('d-none')
      }
    } else {
      alert("There was a problem with the 'selectFurnitureOfRoom' request.");
    }
  }
}