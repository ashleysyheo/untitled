const header = document.querySelector('.header');

const screenSize = document.createElement('div');
screenSize.className  = 'header-element';
header.appendChild(screenSize);

let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

const currTime = document.createElement('div');
currTime.className = 'header-element';
header.appendChild(currTime);

let time = () => {
    let date = new Date();
    let hour = `${date.getHours()}`.padStart(2, '0');
    let minute = `${date.getMinutes()}`.padStart(2, '0');
    let second = `${date.getSeconds()}`.padStart(2, '0');
    let displayTime = hour + ":" + minute + ":" + second;

    // console.log(hour);

    // if (hour > 17 || hour < 6) {
    //     console.log('yes')
    //     mode = false;
    // } 
    // if (hour > 5 || hour < 18) {
    //     mode = true;
    //     console.log('no')
    // }

   // s c// onsole.log(mode);

    currTime.innerHTML = displayTime; 
    let timeChange = setTimeout(time, 1000);
}

window.onload = () => {
    screenSize.innerHTML = `(${window.innerWidth} x ${window.innerHeight})`;
    time();
};

window.onresize = () => {
    screenSize.innerHTML = `(${window.innerWidth} x ${window.innerHeight})`;
};


// let currHour = () => {
//     let hour = newDate().getHours();
//     let hourChange = setTimeout(currHour, 1000 * 60 * 60);
//     return hour
// }

let hr = (new Date()).getHours();
console.log(hr);
let mode; 
console.log(mode);

if ( hr > 6 && hr < 18) {
    mode = true;
    console.log(hr);
} else {
    mode = false;
    console.log(hr);
}

// if (6 <= hr <= 17) {
//     mode = true;
// } else {
//     mode = false;
// }


// if () {
//     mode = true;
//     console.log('yes')
// } else  {
//     mode = false;
// }

// console.log(mode);

// var nextDate = new Date();
// if (nextDate.getMinutes() === 0) { // You can check for seconds here too
//     callEveryHour()
// } else {
//     nextDate.setHours(nextDate.getHours() + 1);
//     nextDate.setMinutes(0);
//     nextDate.setSeconds(0);// I wouldn't do milliseconds too ;)

//     var difference = nextDate - new Date();
//     setTimeout(callEveryHour, difference);
// }


const main = document.querySelector('.main');

const optionsContainer = document.createElement('div');
optionsContainer.className = 'options-container';
main.appendChild(optionsContainer);

const shapeSelector = document.createElement('div');
shapeSelector.className = 'shape-selector';
optionsContainer.appendChild(shapeSelector);

const shapes = ['circle', 'triangle', 'square', 'rectangle-hr', 'rectangle-vr', 'line'];

let round = true;
let square = false;
let tri = false;
let rectangleHr = false;
let rectangleVr = false;

const selectedShape = e => {
    let id = e.target.id;
    let shapes = Array.from(document.querySelectorAll('.shape'));

    mode ? (id === 'triangle' ? e.target.style.borderBottomColor = 'black' : e.target.style.backgroundColor = 'black') :
    (id === 'triangle' ? e.target.style.borderBottomColor = 'white' : e.target.style.backgroundColor = 'white');

    let disabledShapes = shapes.filter(elem => elem.id !== id); 
    disabledShapes.forEach(el => {
        if (el.id == 'triangle') {
            el.style.borderBottomColor = 'gray';
        } else {
            el.style.backgroundColor = 'gray'
        }
    });

    id === 'circle' ? round = true : round = false; 
    id === 'triangle' ? tri = true : tri = false; 
    id === 'square' ? square = true : square = false; 
    id === 'rectangle-hr' ? rectangleHr = true : rectangleHr = false; 
    id === 'rectangle-vr' ? rectangleVr = true : rectangleVr = false; 
    id === 'line' ? line = true : line = false; 
}

for (let i=0; i<shapes.length; i++) {
    const shape = document.createElement('div');
    let colorMode = mode ? 'shape--white-mode' : 'shape--black-mode';
    shape.classList.add('shape');
    shape.id = shapes[i];
    if (shapes[i] == 'circle') {
        mode ? shape.style.backgroundColor = 'black' : shape.style.backgroundColor = 'white';
    }
    shape.addEventListener('click', selectedShape);
    shapeSelector.appendChild(shape);
}

const body = document.querySelector('body');

const lightColour = [[132, 4, 87], [161, 7, 109], [189, 12, 175], [186, 11, 72], [215, 27, 6],
                    [242, 91, 4], [224, 132, 19], [241, 167, 8], [200, 171, 9], [6, 92, 6], 
                    [0, 105, 105], [1, 87, 109], [10, 52, 60], [8, 51, 106], [5, 45, 145], 
                    [52, 21, 113], [108, 4, 122], [58, 5, 76], [14, 3, 69], [1, 25, 33]];

const darkColour = [[244, 143, 251], [243, 206, 254], [253, 202, 225], [255, 180, 201], [253, 110, 110],
                    [251, 159, 114], [241, 197, 174], [252, 222, 160], [251, 218, 28], [240, 247, 18], 
                    [221, 254, 4], [189, 254, 157], [152, 233, 94], [112, 250, 177], [6, 226, 234], 
                    [123, 227, 253], [168, 233, 253], [228, 253, 254], [240, 235, 252], [255, 249, 243]];

const colourSelector = document.createElement('div');
colourSelector.className = 'colour-selector';
optionsContainer.appendChild(colourSelector);

let brushColor; 

const selectedColor = (e) => {
    brushColor = mode ? [...lightColour[parseInt((e.target.id).slice(3,))]] : [...darkColour[parseInt((e.target.id).slice(3,))]]; 
}

for (let i=0; i<20; i++) {
    const colourBlock = document.createElement('div');
    colourBlock.classList = 'colour-block';

    colourBlock.addEventListener('click', selectedColor);

    if (mode) {
        colourBlock.id = `idx${i}`;
        colourBlock.style.backgroundColor = `rgb(${lightColour[i]})`
    } else {
        colourBlock.id = `idx${i}`;
        colourBlock.style.backgroundColor = `rgb(${darkColour[i]})`
    }

    colourSelector.appendChild(colourBlock);
}

if (mode) {
    body.style.backgroundColor = 'whitesmoke';
    body.style.color = 'black';
    document.querySelector('.horizontal-line').style.borderColor = 'black';
    document.querySelector('.shape-selector').style.borderColor = 'black';
    document.querySelector('.colour-selector').style.borderColor = 'black';
    brushColor = lightColour[0];
} else {
    body.style.backgroundColor = 'black';  
    body.style.color = 'white';  
    document.querySelector('.horizontal-line').style.borderColor = 'white';
    document.querySelector('.shape-selector').style.borderColor = 'white';
    document.querySelector('.colour-selector').style.borderColor = 'white';
    brushColor = darkColour[0];
}

// for canvas size 
const convertRemToPixels = (rem) => {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

let canvasWidthMargin = convertRemToPixels(4);
let canvasHeightMargin = convertRemToPixels(27);

function setup() {
    createCanvas(windowWidth - canvasWidthMargin, windowHeight - canvasHeightMargin);
    setInterval(randomColour, 500);
}

function draw() {
    
}

function windowResized() {
    resizeCanvas(windowWidth - canvasWidthMargin, windowHeight - canvasHeightMargin, true);
}

let c; 

function mouseDragged() {
    c = brushColor;
    noFill();
    stroke(color(c));

    if (round == true) {
        ellipse(mouseX, mouseY, 50, 50);
    }
    if (square == true) {
        rect(mouseX, mouseY, 35, 35);
    }
    if (tri == true) {
        // random point 
        triangle(mouseX, mouseY, 240, mouseX, mouseY, 240);
        //triangle( mouseX, mouseY, mouseY, mouseX, mouseY, mouseX);
    }
    if (rectangleVr == true) {
        rect(mouseX, mouseY, 10, 60);
    }
    if (rectangleHr == true) {
        rect(mouseX, mouseY, 60, 10);
    }
    if (line == true) {
        triangle(mouseX, mouseY, 550, 200, 550, 200); 
    }
}

const randomColour = () => {
    let idx = Math.floor(Math.random() * 3);
    if (mode) {
        brushColor[idx] += 10
    } else {
        brushColor[idx] -= 10
    } 
}



// const darkColour = ['#F48FFB', '#F3CEFE', '#FDCAE1', '#FFB4C9', '#FD6E6E', 
//                     '#FB9F72', '#F1C5AE', '#FCDEA0', '#FBDA1C', '#F0F712', 
//                     '#DDFE04', '#BDFE9D', '#98E95E', '#70FAB1', '#06E2EA', 
//                     '#7BE3FD', '#A8E9FD', '#E4FDFE', '#F0EBFC', '#FFF9F3'];