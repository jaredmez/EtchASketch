const gridContainer = document.querySelector("#gridContainer");


var defaultSize = 16;

function setDefaultGrid() {
    gridContainer.style.gridTemplateColumns = 'repeat(16, 1fr)';
    gridContainer.style.gridTemplateRows = 'repeat(16, 1fr)';
}

setDefaultGrid();

function setGridElements() {
    for (let i=0; i < defaultSize*defaultSize; i++) {
        const gridFiller = document.createElement("div");
        gridFiller.classList.add("gridElement")
        gridFiller.addEventListener("mouseenter", hovered);
        gridContainer.appendChild(gridFiller);
    }

}
setGridElements();


//add eventlistener to "Reset" button
const buttonEl = document.querySelector("#buttonContainer");
buttonEl.addEventListener("click", onReset)

function onReset(){
    //clear grid
    emptyGrid();
    //prompt user for a number between 0 and 100
    var newGridSize = prompt("Please enter number for squares per side", "Between 1 - 100");
    
    //create square grid deteremine by user input
    setNewGrid(newGridSize);

    //fill grid with respective number of div elements
    //all these div elements should act just like default did
    setNewGridElements(newGridSize);
}

function setNewGrid(newSize) {
    gridContainer.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${newSize}, 1fr)`;
}

function setNewGridElements(newSize) {
    for (let i=0; i < newSize*newSize; i++) {
        const gridFiller = document.createElement("div");
        gridFiller.classList.add("gridElement")
        gridFiller.addEventListener("mouseenter", hovered);
        gridContainer.appendChild(gridFiller);
    }
}

function emptyGrid(){
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
        gridContainer.removeChild(element);
    })
}

function hovered(event){
    event.target.style.backgroundColor = 'black';
}