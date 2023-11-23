Array.from(sectionSelector.children).forEach( (button) => {
  button.addEventListener('click', (event) => {
    hideAllSections();
    button.classList.remove("bg-green");
    button.classList.remove("txt-green");
    button.classList.remove("border-green");
    button.classList.add("selected-section");
    button.classList.add("txt-brown");
    
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
  let selectedSectionButton = document.querySelector(".selected-section");
  if(selectedSectionButton){
    selectedSectionButton.classList.add("bg-green");
    selectedSectionButton.classList.add("txt-green");
    selectedSectionButton.classList.add("border-green");
    selectedSectionButton.classList.remove("selected-section");
    selectedSectionButton.classList.remove("selected-section");
  }

  myRoomsSection.classList.add('d-none');
  myFurnitureSection.classList.add('d-none');
  allFurnitureSection.classList.add('d-none');
  topWallsSection.classList.add('d-none');
}