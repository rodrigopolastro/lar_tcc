// window.addEventListener('load', selectHouseDiagram);

function selectHouseDiagram(){
  selectHouseDiagramRequest = new XMLHttpRequest();
  selectHouseDiagramRequest.onreadystatechange = loadStaticDiagram;
  selectHouseDiagramRequest.open("POST", "/lar_tcc/controllers/housesController.php");
  selectHouseDiagramRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  selectHouseDiagramRequest.send("operation=selectHouseDiagram");
}

function loadStaticDiagram(){
  if (selectHouseDiagramRequest.readyState === XMLHttpRequest.DONE) { 
    if (selectHouseDiagramRequest.status === 200) {  
      // alert(selectHouseDiagramRequest.responseText)
      const houseData = JSON.parse(selectHouseDiagramRequest.responseText);
      staticDiagramPositions = JSON.parse(houseData.diagram_positions);
      diagramDataURL = houseData.diagram_image
      loadStaticDiagramImage();
    } else {
      alert("There was a problem with the 'diagramPositionsRequest' request.");
    }
  }
}

