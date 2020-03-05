// ----------------------------- Variables ----------------------------- //

let game;
let button, inp;
let hasGameStarted = false;
let count;

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

// ----------------------------- Restart Game ----------------------------- //

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    inp = createInput();
    inp.position(width / 2.7, height / 3);

    button = createButton('Play');
    button.position(width / 2.7, height / 2);
    button.mousePressed(start);
}


function start() {
    button.style("visibility", "hidden");
    inp.style("visibility", "hidden");
    hasGameStarted = true;
    
    Game();
}

function Game() {
    gen();
}
    

// ----------------------------- Generate Targets ----------------------------- //

function gen() {
    
    for (let index = 0; index < 10; index++) {
        randomX = Math.floor(Math.random() * windowWidth);
        randomY = Math.floor(Math.random() * windowHeight);
        circle(randomX, randomY, 30);
    }
    
    circle.onClick(Del);
    
}

// ----------------------------- Mouse Press ----------------------------- //

function Del() {
    circle.style("visibility", "hidden");
}

function mouseClicked() {
    for (let i = 0; i < circle.length; i++);
    clicked();
}

function clicked() {

    let x1 = randomX;
    let y1 = randomY;
    let x2 = mouseX;
    let y2 = mouseY;
    let d = dist(x1, y1, x2, y2);
        if (d < 15) {
        splice (1);
    }
} 

