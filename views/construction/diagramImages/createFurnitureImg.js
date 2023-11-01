function createFurnitureImg(furnitureImage){
  const furnitureImgElement = createElementWithAttributes('img', {
    //Search furniture image by its name in the respective room folder
    src: findFurniturePath(furnitureImage.default_room_name, furnitureImage.furniture_image_name), 
    class:''
  });

  // furnitureImage.addEventListener('click', function() {
  //   furnitureImageId = furnitureImg.furniture_image_id;
  // });
  
  furnitureImgElement.addEventListener('click', function() {
    furnitureNameInput.value = furnitureImage.furniture_display_name;
    setFurnitureToPaint(
      furnitureImage.furniture_image_id, 
      furnitureImgElement, 
      furnitureImage.tiles_width, 
      furnitureImage.tiles_height
    )
  });

  //These lists are created in 'createDefaultRoomsList' file
  let listId = furnitureImage.default_room_name + "Furniture";
  let listToAdd = document.getElementById(listId);
  listToAdd.appendChild(furnitureImgElement);
}