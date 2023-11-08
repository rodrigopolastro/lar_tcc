function createFurnitureImg(furnitureImage){
  const furnitureDivElement = createElementWithAttributes('div', {
    class: 'd-inline-block p-2 m-1 border border-4 border-start-0 border-bottom-0 shadow-sm rounded-2'
  })
  const furnitureImgElement = createElementWithAttributes('img', {
    //Search furniture image by its name in the respective room folder
    src: findFurniturePath(furnitureImage.default_room_name, furnitureImage.furniture_image_name), 
    class:'',
    height: '80px'
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

  let listId = furnitureImage.default_room_name + "Furniture";
  let listToAdd = document.getElementById(listId);
  listToAdd.appendChild(furnitureDivElement).appendChild(furnitureImgElement);
}