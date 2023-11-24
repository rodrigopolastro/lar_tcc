// This button was removed.
// saveDiagramButton.addEventListener('click', updateDiagramPositions);

function updateDiagramPositions(){
  let dataURL = houseDiagram.toDataURL();
  // console.log(dataURL)
  // console.log(dataURL);

  updateDiagramPositionsRequest = new XMLHttpRequest();
  updateDiagramPositionsRequest.onreadystatechange = informDiagramSave;
  updateDiagramPositionsRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/housesController.php");
  updateDiagramPositionsRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  updateDiagramPositionsRequest.send("operation=updateDiagramPositions" + 
                                    "&diagram_positions=" + JSON.stringify(diagramPositions) + 
                                    "&diagram_image=" + dataURL);
}

function informDiagramSave(){
  if (updateDiagramPositionsRequest.readyState === XMLHttpRequest.DONE) { 
    if (updateDiagramPositionsRequest.status === 200) {  
      // console.log("Diagrama salvo com sucesso: \n\n" + JSON.stringify(diagramPositions));
      // reloadDiagram();
    } else {
      alert("There was a problem with the 'updateDiagramPositions' request.");
    }
  }
}

