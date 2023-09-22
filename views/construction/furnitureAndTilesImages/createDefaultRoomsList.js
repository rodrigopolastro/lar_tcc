//This function is called in the 'selectFurnitureImages' request, right before loading the images.
function createDefaultRoomsList(){
  alert('passou aqui')
  Object.entries(DEFAULT_ROOMS).forEach(([roomName, displayName]) => {
    const defaultRoomDiv   = createElementWithAttributes('div', {id: roomName + "Furniture"})
    const defaultRoomTitle = createElementWithAttributes('h3', {});
    const defaultRoomTitleText = document.createTextNode(displayName);
    
    allFurnitureSection
    .appendChild(defaultRoomDiv)
    .appendChild(defaultRoomTitle)
    .appendChild(defaultRoomTitleText);
  })
}