window.addEventListener('load', selectFurnitureImages);

function selectFurnitureImages(){
  selectFurnitureImagesRequest = new XMLHttpRequest();
  selectFurnitureImagesRequest.onreadystatechange = listFurnitureImages;
  selectFurnitureImagesRequest.open("POST", "/lar_tcc/controllers/imagesController.php");
  selectFurnitureImagesRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  selectFurnitureImagesRequest.send("operation=selectFurnitureImages");
}

function listFurnitureImages(){
  if (selectFurnitureImagesRequest.readyState === XMLHttpRequest.DONE) { 
    if (selectFurnitureImagesRequest.status === 200) {
      // createDefaultRoomsList();
      const furnitureImages = JSON.parse(selectFurnitureImagesRequest.responseText);
      furnitureImages.forEach(furnitureImage => { createFurnitureImg(furnitureImage); })
    } else {
      alert("There was a problem with the 'selectRooms' request.");
    }
  }
}
