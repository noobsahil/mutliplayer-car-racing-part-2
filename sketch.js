var canvas;
var backgroundImage;
var bgImg;
var database;
var form
var player
var game
var gameState, playercount



function preload() {
  backgroundImage = loadImage("./assets/background.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database()

  game = new Game()
  game.start()
  game.getState()

}

function draw() {
  background(backgroundImage);
}

if (playercount === 2) {
  game.updateState(0)
}

if (gameState === 1) {
  game.play()
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}