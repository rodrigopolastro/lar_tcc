window.addEventListener('load', selectRooms);

function selectRooms(){
  selectRoomsRequest = new XMLHttpRequest();
  selectRoomsRequest.onreadystatechange = listRooms;
  selectRoomsRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/roomsController.php");
  selectRoomsRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  selectRoomsRequest.send("operation=selectRooms");
}

function listRooms(){
  if (selectRoomsRequest.readyState === XMLHttpRequest.DONE) { 
    if (selectRoomsRequest.status === 200) {
      const rooms = JSON.parse(selectRoomsRequest.responseText);
      rooms.forEach(room => { createRoomDiv(room); })

      //The diagram can only be loaded after all the rooms elements are created
      selectDiagramPositions();
    } else {
      alert("There was a problem with the 'selectRooms' request.");
    }
  }
}
