modalTaskRoomIdSelect.addEventListener('change', filterFurnitureSelect);

function filterFurnitureSelect(){
  roomId = modalTaskRoomIdSelect.value;

  filterFurnitureRequest = new XMLHttpRequest();
  filterFurnitureRequest.onreadystatechange = updateFurnitureSelect;
  filterFurnitureRequest.open("POST", "/myDirectories/lar_tcc/controllers/furnitureController.php");
  filterFurnitureRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  if(roomId == "noRoom"){
    filterFurnitureRequest.send("operation=selectFurniture");
    furnitureId = null;
  } else {
    filterFurnitureRequest.send("operation=selectFurnitureOfRoom" + 
                                "&room_id=" + roomId);
  }
}

function updateFurnitureSelect(){
  if (filterFurnitureRequest.readyState === XMLHttpRequest.DONE) { 
    if (filterFurnitureRequest.status === 200) {
      // console.log(filterFurnitureRequest.responseText)
      const furniture = JSON.parse(filterFurnitureRequest.responseText);
      
      Array.from(modalTaskFurnitureIdSelect.options).forEach(option => {
        if(option.value != "noFurniture"){
          option.remove();
        }
      })

      furniture.forEach(pieceOfFurniture => {
        const option = createElementWithAttributes('option', {
          value: pieceOfFurniture.furniture_id,
        })
        option.innerHTML = pieceOfFurniture.furniture_name;
        modalTaskFurnitureIdSelect.appendChild(option);

        if(pieceOfFurniture.furniture_id == furnitureId){
          option.selected = true;
        }
      })
    } else {
      alert("There was a problem with the 'selectRooms' request.");
    }
  }
}
