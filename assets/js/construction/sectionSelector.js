const roomsSection      = document.getElementById('roomsSection');
const furnitureSection  = document.getElementById('furnitureSection');
const roomsSectionButton     = document.getElementById('roomsSectionButton');
const furnitureSectionButton = document.getElementById('furnitureSectionButton');

roomsSectionButton.addEventListener('click', () => {
  // Make rooms section visible and 
  // furniture section invisible
  roomsSection.classList.remove('d-none');
  furnitureSection.classList.add('d-none');
});

furnitureSectionButton.addEventListener('click', () => {
  // Make furniture section visible and 
  // rooms section invisible
  furnitureSection.classList.remove('d-none');
  roomsSection.classList.add('d-none');
});
