myRoomsSectionButton.addEventListener('click', () => {
  myRoomsSection.classList.remove('d-none');
  myFurnitureSection.classList.add('d-none');

  currentLayer = 'tiles';
});

myFurnitureSectionButton.addEventListener('click', () => {
  myFurnitureSection.classList.remove('d-none');
  myRoomsSection.classList.add('d-none');

  currentLayer = 'furniture';
});

