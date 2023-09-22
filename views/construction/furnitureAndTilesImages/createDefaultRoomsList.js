//This function is called in the 'selectFurnitureImages' request, right before loading the images.
function createDefaultRoomsList(){
  Object.entries(DEFAULT_ROOMS).forEach(([roomName, displayName]) => {
    const defaultRoomDiv   = createElementWithAttributes('div', {id: roomName + "Furniture"})
    const defaultRoomTitle = createElementWithAttributes('h3', {});
    const defaultRoomTitleText = document.createTextNode(displayName);
    
    furniturePopoverContent
    .appendChild(defaultRoomDiv)
    .appendChild(defaultRoomTitle)
    .appendChild(defaultRoomTitleText);
  })

  const furniturePopover = new bootstrap.Popover(furnitureInputDiv, {
    html: true, //CRUCIAL LINE -> otherwise the 'content' will be treated as plain text
    trigger: 'focus',
    title: 'Móveis Disponíveis',
    content: furniturePopoverContent
  });

  furnitureInputDiv.addEventListener('click', () => {
    furniturePopoverContent.classList.remove('d-none');
  })
}