window.addEventListener('load', () => {
  currentSection = 'roomsSection'
});

roomsSectionButton.addEventListener('click', () => {
  // Make rooms section visible and 
  // furniture section invisible
  roomsSection.classList.remove('d-none');
  furnitureSection.classList.add('d-none');

  currentSection = 'roomsSection';
});

furnitureSectionButton.addEventListener('click', () => {
  // Make furniture section visible and 
  // rooms section invisible
  furnitureSection.classList.remove('d-none');
  roomsSection.classList.add('d-none');

  currentSection = 'furnitureSection';
});
