modalCreateFurnitureButton.addEventListener('click', () => {
  if(furnitureImageId){
    furnitureImageName = furnitureNameInput.value;
    insertFurniture(); 
  } else {
    alert("Selecione um móvel");
  }
});

function insertFurniture(){
  insertFurnitureRequest = new XMLHttpRequest();
  insertFurnitureRequest.onreadystatechange = displayCreatedFurniture;
  insertFurnitureRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/furnitureController.php");
  insertFurnitureRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  insertFurnitureRequest.send("operation=insertFurniture" + 
                        "&furniture_name=" + furnitureImageName +
                        "&furniture_image_id=" + furnitureImageId);
}

function displayCreatedFurniture(){
  if (insertFurnitureRequest.readyState === XMLHttpRequest.DONE) { 
    if (insertFurnitureRequest.status === 200) { 
      alert("ainda não insere nada...")  
      // const response = JSON.parse(insertFurnitureRequest.responseText);
      
      // if(response.is_room_created){
      //   createRoomDiv({
      //     room_id: response.value,
      //     room_name: roomName,
      //     tile_id: tileId,
      //     tile_name: tileName
      //   });
      //   displayPlaceholderTile();
      // } else {
      //   alert("Erro na criação do cômodo: " + response.value);
      // }
    } else {
      alert("There was a problem with the 'insertRoom' request.");
    }
  }
}

