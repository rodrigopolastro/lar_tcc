const createRoomButton = document.getElementById('createRoomButton');
const roomNameInput    = document.getElementById('roomNameInput');
const roomTileInput    = document.getElementById('roomTileInput');
var room_name, tile_name;

document.body.onload = displayPlaceholderTile();

roomTileInput.addEventListener('click', () => {
  tile_name = 'tile6.png';
  roomTileInput.src = findTilePath(tile_name);
  alert("Opening tile options.");
});

createRoomButton.addEventListener('click', () => {
  if(isPlaceholderTile(tile_name)){
    alert("selecione um piso!");
  } else {
    room_name = roomNameInput.value;
    insertRoom();
    displayPlaceholderTile();
    roomNameInput.value = "";
  }
});

function displayPlaceholderTile(){
  tile_name = placeholderTileName;
  roomTileInput.src = findTilePath(tile_name);
}

function insertRoom(){
  insertRoomRequest = new XMLHttpRequest();
  insertRoomRequest.onreadystatechange = displayCreatedRoom;
  insertRoomRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/roomsController.php");
  insertRoomRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  insertRoomRequest.send("operation=insertRoom" + 
                        "&room_name=" + room_name +
                        "&tile_name=" + tile_name);
}

function displayCreatedRoom(){
  // alert(insertRoomRequest.readyState);
  if (insertRoomRequest.readyState === XMLHttpRequest.DONE) { 
    if (insertRoomRequest.status === 200) {              
      createdRoomId = insertRoomRequest.responseText;     
      createRoomDiv(createdRoomId, room_name, tile_name);
    } else {
      alert("There was a problem with the 'listRooms' request.");
    }
  }
}

