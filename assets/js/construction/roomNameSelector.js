roomNameInput.addEventListener('change', () => {
  if(roomNameInput.value == 'other'){
    roomNameTextInput.classList.remove("d-none")
  } else {
    roomNameTextInput.classList.add("d-none")
  }
})