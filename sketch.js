var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var track,c1,c2;
var cars, car1, car2;
function preload(){
c1=loadImage("images/car1.png");
c2=loadImage("images/car3.png");
track=loadImage("images/track.jpg");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();

  game = new Game();
  game.getState();
  
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
