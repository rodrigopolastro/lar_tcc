const createRoomButton = document.getElementById('createRoomButton');
const roomNameInput    = document.getElementById('roomNameInput');
const roomTileInput    = document.getElementById('roomTileInput');
var roomName, tileName;

document.body.onload = displayPlaceholderTile();

roomTileInput.addEventListener('click', () => {
  tileName = 'tile6.png';
  roomTileInput.src = findTilePath(tileName);
  alert("Opening tile options.");
});

createRoomButton.addEventListener('click', () => {
  //Function defined in 'helpers/roomTilePath.js'
  //It returns true if tileName is different than the placeholderTileName
  if(isTileSelected(tileName)){
    roomName = roomNameInput.value;
    //TO DO: if(isRoomNameValid(roomName)){}

    // It must return false (roomName invalid) if:
    // 1)roomName variable is empty (and inform it) 
    // 2)the current user already has a room with the given name
    insertRoom();
  } else {
    alert("Selecione um piso!");
  }
});

function displayPlaceholderTile(){
  tileName = placeholderTileName;
  roomTileInput.src = findTilePath(tileName);
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
                        "&room_name=" + roomName +
                        "&tile_name=" + tileName);
}

function displayCreatedRoom(){
  if (insertRoomRequest.readyState === XMLHttpRequest.DONE) { 
    if (insertRoomRequest.status === 200) {   
      const response = JSON.parse(insertRoomRequest.responseText);
      if(response.is_room_created){
        createdRoomId = response.value;
           
        createRoomDiv(createdRoomId, roomName, tileName);
        displayPlaceholderTile();
        roomNameInput.value = "";
      } else {
        alert("Erro na criação do cômodo: " + response.value);
      }
    } else {
      alert("There was a problem with the 'insertRoom' request.");
    }
  }
}

