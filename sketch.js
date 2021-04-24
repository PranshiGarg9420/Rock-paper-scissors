var database;
var back_img;
var rockImg,paperImg, scissorsImg;
var gameState =0;
var playerCount = 0;
var allPlayers;
var player1, player2;
var player, form,game;
var player1Img, player2Img;
var players;
var rock, paper, scissors;



var score1,score2;

function preload(){
  back_img = loadImage("images/bkg img.jpg");
  rockImg= loadImage("images/rock img.png");
  paperImg= loadImage("images/papaer img.png");
  scissorsImg= loadImage("images/scissors img.png");
  player1Img= loadImage("images/player 1.png");
  player2Img= loadImage("images/player2.png");

 
}
function setup() {
  createCanvas(1400, 700);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}