//This function is called in the 'selectFurnitureImages' request, right before loading the images.
function createDefaultRoomsList(){
  Object.entries(DEFAULT_ROOMS).forEach(([roomName, displayName]) => {
    const defaultRoomDiv   = createElementWithAttributes('div', {id: roomName + "Furniture"})
    const defaultRoomTitle = createElementWithAttributes('h3', {});
    const defaultRoomTitleText = document.createTextNode(displayName);
    
    allFurnitureList
    .appendChild(defaultRoomDiv)
    .appendChild(defaultRoomTitle)
    .appendChild(defaultRoomTitleText);
  }) 
}