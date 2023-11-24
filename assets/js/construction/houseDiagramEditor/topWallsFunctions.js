Array.from(topWallsList.children).forEach(topWallDiv => {
    let topWallImg = topWallDiv.querySelector("img")
    topWallDiv.addEventListener('click', () => { setTopWallToPaint(topWallImg) })
});

function setTopWallToPaint(clickedTopWallImg){
    selectedTopWallName = clickedTopWallImg.dataset.topWallName;
    topWallImgElement = clickedTopWallImg;

    // Disable eraser mode
    setEraserMode(false);

    removeLastTopWallHightlight();
    highlightSelectedTopWall();
}

//Update the UI to show selected furniture
function highlightSelectedTopWall(){ 
    if(topWallImgElement){
        topWallImgElement.parentElement.classList.remove("border-brown");
        topWallImgElement.parentElement.classList.remove("bg-cream");
        topWallImgElement.parentElement.classList.add("selected-topWall");
    }   
  }
  
  function removeLastTopWallHightlight(){
    let selectedTopWall = document.querySelector(".selected-topWall");
    if (selectedTopWall) {
        selectedTopWall.classList.remove("selected-topWall");
        selectedTopWall.classList.add("border-brown");
        selectedTopWall.classList.add("bg-cream");
    }
  }

