//============== INITIALIZATION ==============//

//STRUCTURE: 
//  KEY   = "x-y" (coordinates in the diagram, both being integer numbers representing the tiles lines and colmns)
//  VALUE = Tiles => roomId;
//          Walls and TopWalls => imageId;
//          Furniture => furnitureId (user furniture, not the furniture image)

var staticDiagramPositions = {
  tiles:{},
  walls:{},
  furniture:{
    startingPositions:{},
    allPositions:{}
  },
  topWalls:{}
};
//OBS: This initializaion above is only for reading purposes, because
//the variable is actually filled with the data from the database.

window.addEventListener('load', () => {
  staticHouseDiagram.width = CANVAS_WIDTH;
  staticHouseDiagram.height = CANVAS_HEIGHT;
  selectHouseDiagram();
  
});

//============== CANVAS EVENTS ==============//
staticHouseDiagram.addEventListener("mousedown", (mouseEvent) => {
  let positionClicked = getCoordsInElement(mouseEvent);
  let key = positionClicked[0] + "-" + positionClicked[1];

  roomId = staticDiagramPositions.tiles[key];
  if(roomId){
    selectTasks();
  }
});


function loadStaticDiagramImage(){
  // console.log(diagramDataURL)
  const canvas = staticHouseDiagram.getContext("2d");
  const diagramImage = new Image()
  diagramImage.src = diagramDataURL;
  diagramImage.onload = () => {
    canvas.drawImage(diagramImage, 0, 0)
  }
}
