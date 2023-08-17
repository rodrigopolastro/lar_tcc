document.body.onload = selectRooms();
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
      
      rooms.forEach(room => {
        createRoomDiv(room.room_id, room.room_name, room.tile_name);
      })
    } else {
      alert("There was a problem with the 'selectRooms' request.");
    }
  }
}
