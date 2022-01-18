// Make 16 x 16 grid of square divs in .container
const container = document.querySelector('.container');
container.style.display = "flex";
container.style.flexDirection = "column";

const containerDimension = 500;
container.style.height = `${containerDimension}px`;
container.style.width = `${containerDimension}px`;
container.style.border = '1px solid black';
container.style.marginBottom = '20px';

resetAndMakeGrid(16, 'black');

// Clear
// Get clear button
const clearBtn = document.querySelector('button.clear');
clearBtn.addEventListener('click', clearBoard)

// Change grid size 
const changeSizeBtn = document.querySelector('button.change-size');
changeSizeBtn.addEventListener('click', () => {
    let newSize = +prompt('Enter New Grid Size (default = 16)');

    // Set maximum gridSize
    if (!newSize || newSize > 100) {
        if (newSize > 100) alert(`Sorry, That is too big. It will use the default value of 16`);
        newSize = 16;
    }
    resetAndMakeGrid(newSize, 'black');
})

// Change brush color
const changeColorBtn = document.querySelector('button.change-color');
changeColorBtn.addEventListener('click', () => {
    const newColor = prompt('Enter new valid color\nNote: Hex, RGB, HSL and CSS color names are supported');

    setBrushColor(newColor);
})

// Function to make a square grid of side `gridSize` and
// append it to `container`
function appendGrid(gridSize) {

    for (let row = 0; row < gridSize; row++) {
        const gridRow = document.createElement('div');

        // Make row flex so that the columns will line up accordingly
        gridRow.classList.add('row');
        gridRow.style.display = "flex";
        gridRow.style.justifyContent = 'center'; // So it looks neat
        gridRow.style.height = '100%';

        for (let col = 0; col < gridSize; col++) {
            const gridCol = document.createElement('div');
            gridCol.classList.add('column');
            gridCol.style.height = '100%';
            gridCol.style.width = '100%';

            // When the mouse hovers over any column, it changes to black color
            // making it look like drawing with black ink

            gridRow.appendChild(gridCol);
        }
        container.appendChild(gridRow);
    }
}

function setBrushColor(color) {
    const columns = document.querySelectorAll('.column');
    columns.forEach((column) => {
        column.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = color;
        })
    })
}


function resetAndMakeGrid(gridSize, brushColor) {
    container.innerHTML = "";

    appendGrid(gridSize);
    setBrushColor(brushColor);
}

function clearBoard() {
    const columns = document.querySelectorAll('.column');
    columns.forEach((column) => {
        column.style.backgroundColor = '';
    })
}