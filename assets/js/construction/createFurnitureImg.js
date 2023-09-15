function createFurnitureImg(furniture){
  const furnitureImage = createElementWithAttributes('img', {
    src: findFurniturePath(furniture.default_room_name, furniture.image_name), 
    class:''
  });

  furnitureImage.addEventListener('click', function() {
    setFurntureToPaint(furnitureImage, furniture.tiles_width, furniture.tiles_height)
  });

  furnitureList.appendChild(furnitureImage);
}
