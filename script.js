const colorPkr = document.querySelector(".color-picker")
const sizePkr = document.querySelector(".size-picker")
const colorBtn = document.querySelector(".color-button")
const eraserBtn = document.querySelector(".eraser-button")
const clearBtn = document.querySelector(".clear-button")
const sizeDsp = document.querySelector(".size-display")
const grid = document.querySelector("#grid")

let mouseDown = false
let mouseUp = true

function updateGrid() {
    clearGrid()
    createGrid(sizePkr.value)
}

function createGrid(size) {

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    for(let i = 0; i < size * size ; i++) {

        let gridItem = document.createElement("div")
        gridItem.addEventListener("mousedown", e => {
            e.target.style.backgroundColor = "black"
            mouseDown = true
            mouseUp = false
        })
        gridItem.addEventListener("mouseup", e => {
            mouseUp = true
            mouseDown = false
        })
        gridItem.addEventListener("mouseover", e => {
            if (mouseDown){
                e.target.style.backgroundColor = "black"
            }
        })
        grid.appendChild(gridItem)

    }

}

function clearGrid() {
    while(grid.firstElementChild) {
        grid.removeChild(grid.firstElementChild)
    }
}

function displaySize(size) {
    sizeDsp.textContent = `${size} x ${size}`
}

clearBtn.addEventListener("click", updateGrid)

sizePkr.addEventListener("change", updateGrid)
sizePkr.addEventListener("input", () => displaySize(sizePkr.value))