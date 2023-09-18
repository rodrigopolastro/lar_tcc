saveDiagramButton.addEventListener('click', updateDiagramPositions);

function updateDiagramPositions(){
  updateDiagramPositionsRequest = new XMLHttpRequest();
  updateDiagramPositionsRequest.onreadystatechange = informDiagramSave;
  updateDiagramPositionsRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/housesController.php");
  updateDiagramPositionsRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  updateDiagramPositionsRequest.send("operation=updateDiagramPositions" + 
                              "&diagram_positions=" + JSON.stringify(diagramPositions));
}

function informDiagramSave(){
  if (updateDiagramPositionsRequest.readyState === XMLHttpRequest.DONE) { 
    if (updateDiagramPositionsRequest.status === 200) {  
      alert("Diagrama salvo com sucesso!");
    } else {
      alert("There was a problem with the 'updateDiagramPositionsRequest' request.");
    }
  }
}

