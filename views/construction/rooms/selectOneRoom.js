function selectOneRoom(editingRoomId) {
  roomId = editingRoomId;
  
  selectOneRoomRequest = new XMLHttpRequest();
  selectOneRoomRequest.onreadystatechange = displayRoomInfo;
  selectOneRoomRequest.open("POST", "/lar_tcc/controllers/roomsController.php");
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
      modalRoomWallInputImg.src = findWallPath(room.wall_name);
      tileId   = room.fk_tile_id;
      tileName = room.tile_name;
      wallId   = room.fk_wall_id;
      wallName = room.wall_name;
    } else {
      alert("There was a problem with the 'selectOneRoomRequest' request.");
    }
  }
}