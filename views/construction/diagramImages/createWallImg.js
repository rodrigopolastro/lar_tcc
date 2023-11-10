function createWallImg(wall, parentElement, wallDisplayElement){
  const wallDiv = createElementWithAttributes('div', { 
    class: "max-square rounded-2 d-flex align-items-center justify-content-center overflow-hidden m-2",
  })
  const wallImage = createElementWithAttributes('img', {src: findWallPath(wall.wall_name), class:'w-100 wall-img'});

  wallImage.addEventListener('click', function() {
    setRoomWall(wall.wall_id, wall.wall_name, wallDisplayElement)
  });
  wallImage.dataset.wallId = wall.wall_id;
  
  parentElement
  .appendChild(wallDiv)
  .appendChild(wallImage);
}

function setRoomWall(selectedWallId, selectedWallName, wallDisplayElement){
  wallId = selectedWallId;
  wallName = selectedWallName;
  wallDisplayElement.src = findWallPath(wallName);
}