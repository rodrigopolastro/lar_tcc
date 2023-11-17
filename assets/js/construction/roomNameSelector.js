roomNameInput.addEventListener('change', () => {
  if(roomNameInput.value == 'Outro'){
    roomNameTextInput.classList.remove("d-none")
  } else {
    roomNameTextInput.classList.add("d-none")
  }
})