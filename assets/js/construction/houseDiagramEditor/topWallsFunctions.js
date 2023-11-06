Array.from(topWallsList.children).forEach(topWall => {
    topWall.addEventListener('click', () => { setTopWallToPaint(topWall) })
});

function setTopWallToPaint(clickedTopWallImg){
    selectedTopWallName = clickedTopWallImg.dataset.topWallName;
    topWallImgElement = clickedTopWallImg;

    // Disable eraser mode
    setEraserMode(false);
}

