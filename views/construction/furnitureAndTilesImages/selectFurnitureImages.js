function selectFurnitureImages(){
  selectFurnitureImagesRequest = new XMLHttpRequest();
  selectFurnitureImagesRequest.onreadystatechange = listFurnitureImages;
  selectFurnitureImagesRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/imagesController.php");
  selectFurnitureImagesRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  selectFurnitureImagesRequest.send("operation=selectFurnitureImages");
}

function listFurnitureImages(){
  if (selectFurnitureImagesRequest.readyState === XMLHttpRequest.DONE) { 
    if (selectFurnitureImagesRequest.status === 200) {
      const furnitureImages = JSON.parse(selectFurnitureImagesRequest.responseText);
      furnitureImages.forEach(furnitureImg => { createFurnitureImg(furnitureImg); })

      //The diagram can only be loaded after all the rooms and furniture image elements are created. 
      //For this reason, the rooms request calls the furniture request and this one loads the diagram.
      selectDiagramPositions();
    } else {
      alert("There was a problem with the 'selectRooms' request.");
    }
  }
}
