//This function is called in 'selectRooms' request because the diagram can only
//be loaded after all the tile images (in rooms list) are generated
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

