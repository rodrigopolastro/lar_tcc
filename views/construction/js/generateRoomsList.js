const roomsSection      = document.getElementById('roomsSection')
const furnitureSection  = document.getElementById('furnitureSection')
const roomsList         = document.getElementById('roomsList')

// const roomNameInput = document.getElementById('roomNameInput')
// const roomTileInput = document.getElementById('roomTileInput')

const modifyRoomsButton = document.getElementById('modifyRoomsButton')
modifyRoomsButton.addEventListener('click', requestRooms)

document.body.onload = requestRooms()
function requestRooms(){
  listRoomsRequest = new XMLHttpRequest();
  listRoomsRequest.onreadystatechange = listRooms;
  listRoomsRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/roomsController.php");
  listRoomsRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  listRoomsRequest.send("operation=selectRooms")
}

function listRooms(){
  // Make rooms section visible and furniture section invisible
  roomsSection.classList.remove('d-none');
  furnitureSection.classList.add('d-none');

  if (listRoomsRequest.readyState === XMLHttpRequest.DONE) { 
    if (listRoomsRequest.status === 200) {   
      const rooms = JSON.parse(listRoomsRequest.responseText);
      
      rooms.forEach(room => {
        createRoomDiv(room.room_id, room.room_name, 'https://placeholder.co/100');
      })
    } else {
      alert("There was a problem with the 'listRooms' request.");
    }
  }
}

function createRoomDiv(roomId, roomName, roomTileImage){
  // set roomId as a data attribute
  const roomDiv = createElementWithAttributes('div', {});

  const roomNameElement  = createElementWithAttributes('h4', {});
  const roomNameText     = document.createTextNode(roomName);
  const roomTile         = createElementWithAttributes('img', {src: roomTileImage, onclick:''});
  const buttonDeleteRoom = createElementWithAttributes('button', {onclick:'', class:'btn btn-danger'});
  const buttonEditRoom   = createElementWithAttributes('button', {onclick:'', class:'btn btn-success'});

  buttonEditRoom.innerHTML = 'Editar Cômodo';
  buttonDeleteRoom.innerHTML = 'Excluir Cômodo';

  roomDiv.appendChild(roomNameElement).appendChild(roomNameText);
  roomDiv.appendChild(roomTile);
  roomDiv.appendChild(buttonDeleteRoom);
  roomDiv.appendChild(buttonEditRoom);

  roomsList.appendChild(roomDiv);
}
