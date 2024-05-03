function selectPieceOfFurniture(editingFurnitureId) {
  furnitureId = editingFurnitureId;
  
  selectPieceOfFurnitureRequest = new XMLHttpRequest();
  selectPieceOfFurnitureRequest.onreadystatechange = displayFurnitureName;
  selectPieceOfFurnitureRequest.open("POST", "/myDirectories/lar_tcc/controllers/furnitureController.php");
  selectPieceOfFurnitureRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  selectPieceOfFurnitureRequest.send("operation=selectPieceOfFurniture" + 
                                    "&furniture_id=" + furnitureId);
}

function displayFurnitureName() {
  if (selectPieceOfFurnitureRequest.readyState === XMLHttpRequest.DONE) { 
    if (selectPieceOfFurnitureRequest.status === 200) {              
      const furniture = JSON.parse(selectPieceOfFurnitureRequest.responseText);
      // alert(selectPieceOfFurnitureRequest.responseText)
      modalFurnitureNameInput.value = furniture.furniture_name;
      modalFurnitureImg.src = findFurniturePath(furniture.default_room_name, furniture.furniture_image_name)
      // tileName = room.tile_name;
      // tileId   = room.fk_tile_id;
    } else {
      alert("There was a problem with the 'selectPieceOfFurnitureRequest' request.");
    }
  }
}