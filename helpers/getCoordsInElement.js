function getCoordsInElement(event) {
  // Gets the x and y coordinates of the clicked element
  const { x, y } = event.target.getBoundingClientRect();
  
  let mouseXInElement = event.clientX - x;
  let mouseYInElement = event.clientY - y;

  //=> [column, line]
  return [Math.floor(mouseXInElement / TILE_SIZE), Math.floor(mouseYInElement / TILE_SIZE)];
}


