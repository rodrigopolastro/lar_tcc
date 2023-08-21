function createTileDiv(tileId, tileName){
  const tileImage = createElementWithAttributes('img', {src: findTilePath(tileName), class:'tile-image'});

  //Anonymous function being used as a callback to the 'update' function
  //It's done this way because the 'update' function has parameters, 
  //so referencing it in the eventListener ends up calling it for every tile div created
  tileImage.addEventListener('click', function() {
    updateInputTileImg(tileId, tileName)
  });
  tileImage.dataset.tileId = tileId;
  
  popoverContent.appendChild(tileImage);
}

function updateInputTileImg(idParameter, nameParameter){
  tileId = idParameter;
  tileName = nameParameter;
  roomTileInputImg.src = findTilePath(tileName);
}