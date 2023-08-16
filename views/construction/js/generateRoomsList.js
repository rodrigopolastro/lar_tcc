const roomsSection      = document.getElementById('roomsSection');
const furnitureSection  = document.getElementById('furnitureSection');
const modifyRoomsButton = document.getElementById('modifyRoomsButton');
const modifyFurnitureButton = document.getElementById('modifyFurnitureButton');

modifyRoomsButton.addEventListener('click', () => {
  // Make rooms section visible and furniture section invisible
  roomsSection.classList.remove('d-none');
  furnitureSection.classList.add('d-none');
});

document.body.onload = requestRooms();
function requestRooms(){
  listRoomsRequest = new XMLHttpRequest();
  listRoomsRequest.onreadystatechange = listRooms;
  listRoomsRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/roomsController.php");
  listRoomsRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  listRoomsRequest.send("operation=selectRooms");
}

function listRooms(){
  if (listRoomsRequest.readyState === XMLHttpRequest.DONE) { 
    if (listRoomsRequest.status === 200) {   
      const rooms = JSON.parse(listRoomsRequest.responseText);
      
      rooms.forEach(room => {
        createRoomDiv(room.room_id, room.room_name, room.tile_path);
      })
    } else {
      alert("There was a problem with the 'listRooms' request.");
    }
  }
}
