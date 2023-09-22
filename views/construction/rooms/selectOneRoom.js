function selectOneRoom(editingRoomId) {
  roomId = editingRoomId;
  
  selectOneRoomRequest = new XMLHttpRequest();
  selectOneRoomRequest.onreadystatechange = displayRoomInfo;
  selectOneRoomRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/roomsController.php");
  selectOneRoomRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  selectOneRoomRequest.send("operation=selectRoom" + 
                           "&room_id=" + roomId);
}

function displayRoomInfo() {
  if (selectOneRoomRequest.readyState === XMLHttpRequest.DONE) { 
    if (selectOneRoomRequest.status === 200) {              
      const room = JSON.parse(selectOneRoomRequest.responseText);
      
      modalRoomNameInput.value = room.room_name;
      modalRoomTileInputImg.src = findTilePath(room.tile_name);
      tileName = room.tile_name;
      tileId   = room.fk_tile_id;
    } else {
      alert("There was a problem with the 'selectOneRoomRequest' request.");
    }
  }
}