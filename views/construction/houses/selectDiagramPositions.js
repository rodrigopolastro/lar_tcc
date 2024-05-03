//The diagram can only be loaded after all the rooms and furniture image elements are created. 
//For this reason, the rooms request calls the furniture request and this one loads the diagram.
function selectDiagramPositions(){
  diagramPositionsRequest = new XMLHttpRequest();
  diagramPositionsRequest.onreadystatechange = loadDiagram;
  diagramPositionsRequest.open("POST", "/lar_tcc/controllers/housesController.php");
  diagramPositionsRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  diagramPositionsRequest.send("operation=selectHouseDiagram");
}

function loadDiagram(){
  if (diagramPositionsRequest.readyState === XMLHttpRequest.DONE) { 
    if (diagramPositionsRequest.status === 200) {  
      // console.log(diagramPositionsRequest.responseText)
      const houseData = JSON.parse(diagramPositionsRequest.responseText);
      diagramPositions = JSON.parse(houseData.diagram_positions);
      reloadDiagram();
    } else {
      alert("There was a problem with the 'diagramPositionsRequest' request.");
    }
  }
}

