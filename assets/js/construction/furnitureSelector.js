Array.from(furnitureSelector.querySelectorAll("button")).forEach( (button) => {
  button.addEventListener('click', (event) => {
    hideAllFurnitureLists();
    
    let furnitureRoomId = button.id.replace("Button", "")
    let furnitureRoom = document.getElementById(furnitureRoomId)
    furnitureRoom.classList.remove("d-none")
  })
})

function hideAllFurnitureLists(){
  Array.from(allFurnitureList.children).forEach( (furnitureRoomDiv) => {
    furnitureRoomDiv.classList.add("d-none")
  })
}