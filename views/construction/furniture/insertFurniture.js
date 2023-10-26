//This function is called when the diagram is clicked and a furniture image is selected
function insertFurniture(){
  insertFurnitureRequest = new XMLHttpRequest();
  insertFurnitureRequest.onreadystatechange = addFurnitureToDiagram;
  insertFurnitureRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/furnitureController.php");
  insertFurnitureRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  // alert('name=' + furnitureName + 'id image=' + selectedFurnitureImageId)
  insertFurnitureRequest.send("operation=insertFurniture" + 
                             "&furniture_name=" + furnitureName +
                             "&furniture_image_id=" + selectedFurnitureImageId+
                             "&room_id=" + furnitureRoomId);
}

function addFurnitureToDiagram(){
  if (insertFurnitureRequest.readyState === XMLHttpRequest.DONE) { 
    if (insertFurnitureRequest.status === 200) { 
      // console.log(insertFurnitureRequest.responseText)  
      const response = JSON.parse(insertFurnitureRequest.responseText);
      if(response.is_furniture_created){
        let furniture = response.value;
        createFurnitureDiv(furniture);
        registerFurniturePositions(furniture.furniture_id);
      } else {
        alert("Erro na criação do móvel: " + response.value);
      }
    } else {
      alert("There was a problem with the 'insertFurniture' request.");
    }
  }
}

