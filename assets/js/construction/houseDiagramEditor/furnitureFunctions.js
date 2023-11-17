// Triggered when a furniture image is clicked in the rooms list
function setFurnitureToPaint(clickedFurnitureId, clickedFurnitureImg, clickedFurnitureWidth, clickedFurnitureHeight){
  selectedFurnitureImageId = clickedFurnitureId;
  furnitureImgElement      = clickedFurnitureImg;
  furnitureWidth           = clickedFurnitureWidth;
  furnitureHeight          = clickedFurnitureHeight;
  //Update UI to highlight selected tile
  removeLastFurnitureHightlight();
  highlightSelectedFurniture();

  // Disable eraser mode
  setEraserMode(false);
}

//Update the UI to show selected furniture
function highlightSelectedFurniture(){ 
  if(furnitureImgElement){
    furnitureImgElement.parentElement.classList.remove("border-brown");
    furnitureImgElement.parentElement.classList.remove("bg-cream");
    furnitureImgElement.parentElement.classList.add("selected-furniture");
  }
}

function removeLastFurnitureHightlight(){
  let selectedFurniture = document.querySelector(".selected-furniture");
  if (selectedFurniture) {
    selectedFurniture.classList.remove("selected-furniture");
    selectedFurniture.classList.add("border-brown");
    selectedFurniture.classList.add("bg-cream");
  }
}

//Only return true (allow furniture insertion) if all
//the positions the furniture will occupy are available.
function areFurniturePositionsAvailable(positionClicked){
  let tileKey = positionClicked[0] + "-" + positionClicked[1];
  let clickedRoomId = diagramPositions.tiles[tileKey];

  furniturePositions = [];

  //Ex: A 4x2 object is clicked on the bottom-left corner position (positionClicked=[0,19]) .
  //It must: (width=4, height=2)
  //- Occupy height=2 lines with width=4 tiles each.
  //- Line 1 (last line):        "0-19", "1-19", "2-19", "3-19"
  //- Line 2 (penultimate line): "0-18", "1-18", "2-18", "3-18"
  for(let j=0; j<furnitureHeight; j++){
    let line = positionClicked[1] - j;
    for(let i=0; i<furnitureWidth; i++){
      let column = positionClicked[0] + i;
      let key = column + "-" + line; 
      
      //furniture only requires that the first clicked line has tiles 
      if(j == 0){
        if(!diagramPositions.tiles.hasOwnProperty(key)){
          console.log('ERRO NA INSERÇÃO DO MÓVEL: Linha inicial inválida')
          return false;
        }
      }

      // Block furniture insertion in empty spaces (with no tiles or walls)
      // if(!diagramPositions.tiles.hasOwnProperty(key) && !diagramPositions.walls.allPositions.hasOwnProperty(key)){
      //   console.log('ERRO NA INSERÇÃO DO MÓVEL: Espaço vazio em alguma outra posição.')
      //   return false;
      // }
      
      // Block furniture insertion if it occupies two or more different rooms
      let tileRoomId = diagramPositions.tiles[key]
      if(tileRoomId && (tileRoomId != clickedRoomId)){
        console.log('ERRO NA INSERÇÃO DO MÓVEL: Dois ou mais cômodos diferentes.')
        return false;
      }
      
      // Block furniture insertion if does not fit into the diagram
      if(line < 0 || column > NUMBER_OF_COLUMNS - 1){
        console.log('ERRO NA INSERÇÃO DO MÓVEL: Limites do diagrama excedidos.')
        return false;
      }
      
      // Block furniture insertion if there is another furniture on those positions
      if(diagramPositions.furniture.allPositions.hasOwnProperty(key)){
        console.log('ERRO NA INSERÇÃO DO MÓVEL: Já há um móvel ocupando essa posição.')
        return false;
      } 
      furniturePositions.push(key);
    }
  }
  return true;
}

function registerFurniturePositions(createdFurnitureId){
  diagramPositions.furniture.startingPositions[furniturePositions[0]] = createdFurnitureId;
  for(position of furniturePositions){
    diagramPositions.furniture.allPositions[position] = createdFurnitureId;
  }

  reloadDiagram();
  updateDiagramPositions();
}

function removeFurnitureFromDiagram(furnitureId){

  let startingPositions = diagramPositions.furniture.startingPositions;
  Object.keys(startingPositions).forEach((key) => {
    if(startingPositions[key] == furnitureId){
      delete diagramPositions.furniture.startingPositions[key];
    }
  });

  let allPositions = diagramPositions.furniture.allPositions;
  Object.keys(allPositions).forEach((key) => {
    if(allPositions[key] == furnitureId){
      delete diagramPositions.furniture.allPositions[key];
    }
  });

  reloadDiagram();
  updateDiagramPositions();
}
