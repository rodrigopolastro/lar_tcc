function deleteFurniture(deletingFurnitureId){
  furnitureId = deletingFurnitureId;

  deleteFurnitureRequest = new XMLHttpRequest();
  deleteFurnitureRequest.onreadystatechange = removeFromDiagramAndFurnitureList;
  deleteFurnitureRequest.open("POST", "/myDirectories/lar_tcc/controllers/furnitureController.php");
  deleteFurnitureRequest.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded",
    );
  deleteFurnitureRequest.send("operation=deleteFurniture" + 
                             "&furniture_id=" + furnitureId);
}

function removeFromDiagramAndFurnitureList(){
  if (deleteFurnitureRequest.readyState === XMLHttpRequest.DONE) { 
    if (deleteFurnitureRequest.status === 200) {  
      const response = JSON.parse(deleteFurnitureRequest.responseText);
      // console.log(deleteFurnitureRequest.responseText)
      if(response.is_furniture_deleted){
        const deletedFurnitureDiv = document.querySelector("[data-furniture-id='" + furnitureId + "']");
        deletedFurnitureDiv.remove();
        
        removeFurnitureFromDiagram(furnitureId);
      } else {
        alert("Ocorreu um erro na exclusão do cômodo: furniture_id inválido");
      }
    } else {
      alert("There was a problem with the 'deleteFurniture' request.");
    }
  }
}