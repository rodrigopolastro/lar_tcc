Array.from(furnitureSelector.children).forEach( (button) => {
  button.addEventListener('click', (event) => {
    hideAllFurnitureLists();

    buttonElement = event.target
    let furnitureRoomId = buttonElement.id.replace("Button", "")
    let furnitureRoom = document.getElementById(furnitureRoomId)
    furnitureRoom.classList.remove("d-none")
  })
})

function hideAllFurnitureLists(){
  Array.from(allFurnitureList.children).forEach( (furnitureRoomDiv) => {
    furnitureRoomDiv.classList.add("d-none")
  })
}