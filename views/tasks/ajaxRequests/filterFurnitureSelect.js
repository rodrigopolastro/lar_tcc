modalTaskRoomIdSelect.addEventListener('change', filterFurnitureSelect);

function filterFurnitureSelect(){
  roomId = modalTaskRoomIdSelect.value;

  filterFurnitureRequest = new XMLHttpRequest();
  filterFurnitureRequest.onreadystatechange = updateFurnitureSelect;
  filterFurnitureRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/furnitureController.php");
  filterFurnitureRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  if(roomId == "noRoom"){
    filterFurnitureRequest.send("operation=selectFurniture");
  } else {
    filterFurnitureRequest.send("operation=selectFurnitureOfRoom" + 
                                "&room_id=" + roomId);
  }
}

function updateFurnitureSelect(){
  if (filterFurnitureRequest.readyState === XMLHttpRequest.DONE) { 
    if (filterFurnitureRequest.status === 200) {
      console.log(filterFurnitureRequest.responseText)
      const furniture = JSON.parse(filterFurnitureRequest.responseText);
      Array.from(modalTaskFurnitureIdSelect.options).forEach(option => {
        option.remove();
      })

      furniture.forEach(pieceOfFurniture => {
        const option = createElementWithAttributes('option', {
          value: pieceOfFurniture.furniture_id,
        })
        option.innerHTML = pieceOfFurniture.furniture_name;
        modalTaskFurnitureIdSelect.appendChild(option);
      })
      // furniture.forEach(furniture => { createFurnitureDiv(furniture); })

      //The diagram can only be loaded after all the rooms and furniture image elements are created. 
      //For this reason, the rooms request calls the furniture request and this one loads the diagram.
      // selectDiagramPositions();
    } else {
      alert("There was a problem with the 'selectRooms' request.");
    }
  }
}
