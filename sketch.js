var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

var allPlayers

var car1, car2, car3, car4;

//array to store all the cares
var cars

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

if(playerCount===4){
  game.update(1);
}
if(gameState===1){
  clear();
  game.play();
}
  // if(Player count is 4){
  //   Update the gameState to 1 which is PLAY
  // }
  // if(gameState is PLAY){
  //   call the play screen which is Game Start
  // }
}
