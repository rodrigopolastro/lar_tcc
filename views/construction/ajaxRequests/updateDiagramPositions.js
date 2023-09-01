saveDiagramButton.addEventListener('click', updateDiagramPositions);

function updateDiagramPositions(){
  updateHouseTilesRequest = new XMLHttpRequest();
  updateHouseTilesRequest.onreadystatechange = informDiagramSave;
  updateHouseTilesRequest.open("POST", "/htdocsDirectories/lar_tcc/controllers/tilesController.php");
  updateHouseTilesRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded",
  );
  updateHouseTilesRequest.send("operation=updateDiagramPositions" + 
                              "&diagram_positions=" + JSON.stringify(houseTiles));
}

function informDiagramSave(){
  if (updateHouseTilesRequest.readyState === XMLHttpRequest.DONE) { 
    if (updateHouseTilesRequest.status === 200) {  
      alert("Diagrama salvo com sucesso!");
    } else {
      alert("There was a problem with the 'updateHouseTilesRequest' request.");
    }
  }
}

