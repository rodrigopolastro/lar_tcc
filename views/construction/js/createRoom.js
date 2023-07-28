const createRoomButton = document.getElementById('createRoomButton');
const roomNameInput    = document.getElementById('roomNameInput');

createRoomButton.addEventListener('click', insertRoomRequest);

function insertRoomRequest(){
  var room_name = roomNameInput.value;
  var room_tile = 'https://placeholder.co/100';

  createRoomRequest = new XMLHttpRequest();
  createRoomRequest.onreadystatechange = getCreatedRoomId(room_name, room_tile);
  createRoomRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/roomsController.php");
  createRoomRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  createRoomRequest.send("operation=insertRoom" + 
                        "&room_name=" + room_name)
}

function getCreatedRoomId(room_name, room_tile){
  if (createRoomRequest.readyState === XMLHttpRequest.DONE) { 
    if (createRoomRequest.status === 200) {              
      alert(createRoomRequest.responseText);
      createdRoomId = createRoomRequest.responseText;     
      creataafdasdfeRoomDiv(createdRoomId, room_name, room_tile);

    } else {
      alert("There was a problem with the 'listRooms' request.");
    }
  }
}