function selectDiagramPositions(){
  diagramPositionsRequest = new XMLHttpRequest();
  diagramPositionsRequest.onreadystatechange = sla;
  diagramPositionsRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/tilesController.php");
  diagramPositionsRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  diagramPositionsRequest.send("operation=selectDiagramPositions");
}

function sla(){
  if (diagramPositionsRequest.readyState === XMLHttpRequest.DONE) { 
    if (diagramPositionsRequest.status === 200) {  
      houseTiles = JSON.parse(diagramPositionsRequest.responseText);
      loadDiagram();
    } else {
      alert("There was a problem with the 'diagramPositionsRequest' request.");
    }
  }
}

