const colorPkr = document.querySelector(".color-picker")
const sizePkr = document.querySelector(".size-picker")
const colorBtn = document.querySelector(".color-button")
const eraserBtn = document.querySelector(".eraser-button")
const clearBtn = document.querySelector(".clear-button")
const sizeDsp = document.querySelector(".size-display")
const grid = document.querySelector("#grid")

let mouseDown = false
let mouseUp = true

let color = colorPkr.value

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
            e.target.style.backgroundColor = color
            mouseDown = true
            mouseUp = false
        })
        gridItem.addEventListener("mouseup", e => {
            mouseUp = true
            mouseDown = false
        })
        gridItem.addEventListener("mouseover", e => {
            if (mouseDown){
                e.target.style.backgroundColor = color
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

function changeColor(newColor) {
    color = newColor
}

function displaySize(size) {
    sizeDsp.textContent = `${size} x ${size}`
}

colorPkr.addEventListener("change", () => changeColor(colorPkr.value))

eraserBtn.addEventListener("click", () => changeColor("white"))

colorBtn.addEventListener("click", () => changeColor(colorPkr.value))

clearBtn.addEventListener("click", updateGrid)

sizePkr.addEventListener("change", updateGrid)
sizePkr.addEventListener("input", () => displaySize(sizePkr.value))

window.onload = () => {
    updateGrid()
    displaySize(sizePkr.value)
}