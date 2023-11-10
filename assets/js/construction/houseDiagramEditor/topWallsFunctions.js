Array.from(topWallsList.children).forEach(topWallDiv => {
    let topWallImg = topWallDiv.querySelector("img")
    topWallDiv.addEventListener('click', () => { setTopWallToPaint(topWallImg) })
});

function setTopWallToPaint(clickedTopWallImg){
    selectedTopWallName = clickedTopWallImg.dataset.topWallName;
    topWallImgElement = clickedTopWallImg;

    // Disable eraser mode
    setEraserMode(false);
}

