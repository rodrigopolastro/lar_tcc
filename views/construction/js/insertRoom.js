const createRoomButton = document.getElementById('createRoomButton');
const roomNameInput    = document.getElementById('roomNameInput');
const roomTileInput    = document.getElementById('roomTileInput');

createRoomButton.addEventListener('click', insertRoomRequest);

var room_name, tile_path;

function insertRoomRequest(){
  room_name = roomNameInput.value;
  tile_path = roomTileInput.src;

  createRoomRequest = new XMLHttpRequest();
  createRoomRequest.onreadystatechange = displayCreatedRoom;
  createRoomRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/roomsController.php");
  createRoomRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  createRoomRequest.send("operation=insertRoom" + 
                        "&room_name=" + room_name +
                        "&tile_path=" + tile_path);
}

function displayCreatedRoom(){
  // alert(createRoomRequest.readyState);
  if (createRoomRequest.readyState === XMLHttpRequest.DONE) { 
    if (createRoomRequest.status === 200) {              
      createdRoomId = createRoomRequest.responseText;     
      createRoomDiv(createdRoomId, room_name, tile_path);
    } else {
      alert("There was a problem with the 'listRooms' request.");
    }
  }
}

