// window.addEventListener('load', selectFurniture);

function selectFurniture(){
  selectFurnitureRequest = new XMLHttpRequest();
  selectFurnitureRequest.onreadystatechange = listFurniture;
  selectFurnitureRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/furnitureController.php");
  selectFurnitureRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  selectFurnitureRequest.send("operation=selectfurniture");
}

function listFurniture(){
  if (selectFurnitureRequest.readyState === XMLHttpRequest.DONE) { 
    if (selectFurnitureRequest.status === 200) {
      const furniture = JSON.parse(selectFurnitureRequest.responseText);
      furniture.forEach(room => { createRoomDiv(room); })

      //The diagram can only be loaded after all the rooms elements are created
      selectDiagramPositions();
    } else {
      alert("There was a problem with the 'selectRooms' request.");
    }
  }
}
