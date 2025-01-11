const canvas = document.querySelector(".canvas");
const inputSize = document.querySelector(".input-size");
const inputColor = document.querySelector(".input-color");
const usedColors = document.querySelector(".used-colors");
const buttonSave = document.querySelector(".button-save");
const colResize = document.querySelector(".resize");
const main = document.querySelector("main");

let isPainting = false;

const createElement = (tag, className = "") => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const setPixelColor = (pixel) => {
    pixel.style.backgroundColor = inputColor.value;
}

const createPixel = () => {
    const pixel = createElement("div", "pixel");

    pixel.addEventListener("mousedown", () => setPixelColor(pixel));
    pixel.addEventListener("mouseover", () => {
        if (isPainting) setPixelColor(pixel);
    });

    return pixel;
}

const loadCanvas = () => {
    const length = inputSize.value;

    canvas.innerHTML = "";

    for ( let i = 0; i < length; i += 1 ) {
        const row = createElement("div", "row");

        for ( let j = 0; j < length; j += 1 ) {
            row.append(createPixel());
        }

        canvas.append(row);
    }
}

const updateCanvasSize = () => {
    loadCanvas();
}

canvas.addEventListener("mousedown", () => (isPainting = true));
canvas.addEventListener("mouseup", () => (isPainting = false));

inputSize.addEventListener("change", updateCanvasSize());

loadCanvas();