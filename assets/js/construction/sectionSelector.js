Array.from(sectionSelector.children).forEach( (button) => {
  button.addEventListener('click', (event) => {
    hideAllSections();
    
    let sectionId = button.id.replace("Button", "");
    let sectionDiv = document.getElementById(sectionId);
    sectionDiv.classList.remove("d-none")

    currentLayer = button.dataset.layerName;
    if(currentLayer == "rooms"){
      currentLayer = lastRoomsLayer;
    }
  })
})

function hideAllSections(){
  myRoomsSection.classList.add('d-none');
  myFurnitureSection.classList.add('d-none');
  allFurnitureSection.classList.add('d-none');
  topWallsSection.classList.add('d-none');
}