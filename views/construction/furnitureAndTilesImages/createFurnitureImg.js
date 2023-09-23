function createFurnitureImg(furnitureImg){
  const furnitureImage = createElementWithAttributes('img', {
    //Search furniture image by its name in the respective room folder
    src: findFurniturePath(furnitureImg.default_room_name, furnitureImg.furniture_image_name), 
    class:''
  });

  furnitureImage.addEventListener('click', function() {
    furnitureImageId = furnitureImg.furniture_image_id;
    furnitureNameInput.value = furnitureImg.furniture_display_name;
  });

  let listId = furnitureImg.default_room_name + "Furniture";
  let listToAdd = document.getElementById(listId);
  listToAdd.appendChild(furnitureImage);
}