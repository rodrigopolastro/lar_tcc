function createFurnitureImg(furniture){
  const furnitureImage = createElementWithAttributes('img', {
    //Search furniture image by its name in the respective room folder
    src: findFurniturePath(furniture.default_room_name, furniture.furniture_image_name), 
    class:''
  });
  furnitureImage.dataset.furnitureImageId = furniture.furniture_image_id;
  furnitureImage.dataset.tilesWidth        = furniture.tiles_width;
  furnitureImage.dataset.tilesHeight       = furniture.tiles_height;

  furnitureImage.addEventListener('click', function() {
    setFurnitureToPaint(
      furniture.furniture_image_id, 
      furnitureImage, 
      furniture.tiles_width, 
      furniture.tiles_height
    )
  });

  furnitureList.appendChild(furnitureImage);
}
