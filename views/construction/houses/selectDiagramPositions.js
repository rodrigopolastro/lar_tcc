//The diagram can only be loaded after all the rooms and furniture image elements are created. 
//For this reason, the rooms request calls the furniture request and this one loads the diagram.
function selectDiagramPositions(){
  diagramPositionsRequest = new XMLHttpRequest();
  diagramPositionsRequest.onreadystatechange = loadDiagram;
  diagramPositionsRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/housesController.php");
  diagramPositionsRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  diagramPositionsRequest.send("operation=selectDiagramPositions");
}

function loadDiagram(){
  if (diagramPositionsRequest.readyState === XMLHttpRequest.DONE) { 
    if (diagramPositionsRequest.status === 200) {  
      diagramPositions = JSON.parse(diagramPositionsRequest.responseText);
      reloadDiagram();
    } else {
      alert("There was a problem with the 'diagramPositionsRequest' request.");
    }
  }
}

