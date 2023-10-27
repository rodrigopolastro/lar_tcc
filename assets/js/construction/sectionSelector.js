myRoomsSectionButton.addEventListener('click', () => {
  myRoomsSection.classList.remove('d-none');

  myFurnitureSection.classList.add('d-none');
  allFurnitureSection.classList.add('d-none');

  currentLayer = 'tiles';
});

allFurnitureSectionButton.addEventListener('click', () => {
  allFurnitureSection.classList.remove('d-none');

  myRoomsSection.classList.add('d-none');
  myFurnitureSection.classList.add('d-none');

  currentLayer = 'furniture'
});

myFurnitureSectionButton.addEventListener('click', () => {
  myFurnitureSection.classList.remove('d-none');

  myRoomsSection.classList.add('d-none');
  allFurnitureSection.classList.add('d-none');

  //This section is only for listing the already added furniture, not to add new ones
  currentLayer = 'none';
});

