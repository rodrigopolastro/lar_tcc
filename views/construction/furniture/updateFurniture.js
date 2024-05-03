modalUpdateFurnitureButton.addEventListener('click', () => {
  if(furnitureId){
    furnitureName = modalFurnitureNameInput.value;
    updateFurniture();
  }
});

function updateFurniture(){
  updateFurnitureRequest = new XMLHttpRequest();
  updateFurnitureRequest.onreadystatechange = updateFurnitureList;
  updateFurnitureRequest.open("POST", "/lar_tcc/controllers/furnitureController.php");
  updateFurnitureRequest.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded",
    );
    updateFurnitureRequest.send("operation=updateFurniture" + 
                               "&furniture_id=" + furnitureId +
                               "&furniture_name=" + furnitureName);
}

function updateFurnitureList(){
  if (updateFurnitureRequest.readyState === XMLHttpRequest.DONE) { 
    if (updateFurnitureRequest.status === 200) { 
      const response = JSON.parse(updateFurnitureRequest.responseText);
      if(response.is_furniture_updated){
        const updatedFurniture = document.querySelector("[data-furniture-id='" + furnitureId + "']");
        updatedFurniture.querySelector('h4').innerHTML = furnitureName;
      } else {
        alert("Erro na edição do nome do móvel: " + response.value);
      }
    } else {
      alert("There was a problem with the 'updateFurniture' request.");
    }
  }
}