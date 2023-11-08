function createWallImg(wall, parentElement, wallDisplayElement){
  const wallDiv = createElementWithAttributes('div', { 
    // width: 100, 
    class: "wall-image rounded-2 d-flex align-items-center justify-content-center overflow-hidden m-2",
    style: "width:90px; height:90px",
  })
  // const wallImage = createElementWithAttributes('img', {src: findWallPath(wall.wall_name), class:'col-6', height: "400px"});
  const wallImage = createElementWithAttributes('img', {src: findWallPath(wall.wall_name), class:'', height: "360px"});

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