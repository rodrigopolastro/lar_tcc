function createFurnitureImg(furnitureImg){
  const furnitureImage = createElementWithAttributes('img', {
    //Search furniture image by its name in the respective room folder
    src: findFurniturePath(furnitureImg.default_room_name, furnitureImg.furniture_image_name), 
    class:''
  });
  furnitureImage.dataset.furnitureImageId  = furnitureImg.furniture_image_id;
  furnitureImage.dataset.tilesWidth        = furnitureImg.tiles_width;
  furnitureImage.dataset.tilesHeight       = furnitureImg.tiles_height;

  furnitureImage.addEventListener('click', function() {
    setFurnitureToPaint(
      furnitureImg.furniture_image_id, 
      furnitureImage, 
      furnitureImg.tiles_width, 
      furnitureImg.tiles_height
    )
  });

  let listToAdd;
  switch(furnitureImg.default_room_name){
    case "kitchen":    listToAdd = kitchenFurniture;    break;
    case "livingRoom": listToAdd = livingRoomFurniture; break;
    case "diningRoom": listToAdd = diningRoomFurniture; break;
    case "bedroom":    listToAdd = bedroomFurniture;    break;
    case "bathroom":   listToAdd = bathroomFurniture;   break;
    case "other":      listToAdd = otherFurniture;      break;
  }

  listToAdd.appendChild(furnitureImage);
}
