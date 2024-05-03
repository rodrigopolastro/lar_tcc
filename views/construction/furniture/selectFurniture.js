function selectFurniture(){
  selectFurnitureRequest = new XMLHttpRequest();
  selectFurnitureRequest.onreadystatechange = listFurniture;
  selectFurnitureRequest.open("POST", "/myDirectories/lar_tcc/controllers/furnitureController.php");
  selectFurnitureRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  selectFurnitureRequest.send("operation=selectFurniture");
}

function listFurniture(){
  if (selectFurnitureRequest.readyState === XMLHttpRequest.DONE) { 
    if (selectFurnitureRequest.status === 200) {
      // alert(selectFurnitureRequest.responseText)
      const furniture = JSON.parse(selectFurnitureRequest.responseText);
      furniture.forEach(furniture => { createFurnitureDiv(furniture); })

      //The diagram can only be loaded after all the rooms and furniture image elements are created. 
      //For this reason, the rooms request calls the furniture request and this one loads the diagram.
      selectDiagramPositions();
    } else {
      alert("There was a problem with the 'selectRooms' request.");
    }
  }
}
