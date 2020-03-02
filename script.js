// ----------------------------- Variables ----------------------------- //

let game;
let score;
let numberOfStaticHit = 0;
let recentScores;
let userClicks = [];
let greeting, button, input;
let hasGameStarted = false;
let numberOfMissedTargets = 0;
const numTargets = 5;
let targets = [];


// ----------------------------- New Variables ---------------------------- //

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

// ----------------------------- Restart Game ----------------------------- //

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    input = createInput();
    input.position(width / 2 - 250, height / 2);

    button = createButton('Play');
    button.position(width / 2 - 250, height / 2 + 80);
    button.mousePressed(start);
}


function start() {
    button.style("visibility", "hidden");
    input.style("visibility", "hidden");
    hasGameStarted = true;
    
    restartGame();
}

function restartGame() {
    generator();
    
}
// ----------------------------- Generate Targets ----------------------------- //

function generator() {
    
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

