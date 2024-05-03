function deleteAllFurniture(){
  
    deleteAllFurnitureRequest = new XMLHttpRequest();
    deleteAllFurnitureRequest.onreadystatechange = removeAllFurnitureFromList;
    deleteAllFurnitureRequest.open("POST", "/lar_tcc/controllers/furnitureController.php");
    deleteAllFurnitureRequest.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded",
      );
    deleteAllFurnitureRequest.send("operation=deleteAllFurniture");
  }
  
  function removeAllFurnitureFromList(){
    if (deleteAllFurnitureRequest.readyState === XMLHttpRequest.DONE) { 
      if (deleteAllFurnitureRequest.status === 200) {  
        Array.from(myFurnitureList.children).forEach(furniture => furniture.remove());
        updateDiagramPositions();
        // reloadDiagram();
      } else {
        alert("There was a problem with the 'deleteAllFurniture' request.");
      }
    }
  }