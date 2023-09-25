//This function is called when the diagram is clicked and a furniture image is selected
function insertFurniture(){
  insertFurnitureRequest = new XMLHttpRequest();
  insertFurnitureRequest.onreadystatechange = displayCreatedFurniture;
  insertFurnitureRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/furnitureController.php");
  insertFurnitureRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  alert('name=' + furnitureName + 'id image=' + selectedFurnitureImageId)
  insertFurnitureRequest.send("operation=insertFurniture" + 
                             "&furniture_name=" + furnitureName +
                             "&furniture_image_id=" + selectedFurnitureImageId);
}

function displayCreatedFurniture(){
  if (insertFurnitureRequest.readyState === XMLHttpRequest.DONE) { 
    if (insertFurnitureRequest.status === 200) { 
      // alert(insertFurnitureRequest.responseText)  
      const response = JSON.parse(insertFurnitureRequest.responseText);
      
      if(response.is_furniture_created){
        createdFurnitureId = response.value;
        createFurnitureDiv({
          furniture_id: createdFurnitureId,
          furniture_name: furnitureName,
          a: selectedFurnitureImageId,
          // tile_name: tileName
        });
      } else {
        alert("Erro na criação do móvel: " + response.value);
      }
    } else {
      alert("There was a problem with the 'insertFurniture' request.");
    }
  }
}

