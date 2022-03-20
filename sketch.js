var bg,bgImg;
var player, idleA, jumpA, runA, deadA;
var ground, groundImg;
var tree1, tree2, tree3;
var gameState;

function preload(){
  bgImg = loadImage("assets/BG.png")
  
  idleA = loadAnimation("assets/Idle (1).png", "assets/Idle (2).png", "assets/Idle (3).png", "assets/Idle (4).png", "assets/Idle (5).png", "assets/Idle (6).png", "assets/Idle (7).png", "assets/Idle (8).png", "assets/Idle (9).png", "assets/Idle (10).png", "assets/Idle (11).png", "assets/Idle (12).png", "assets/Idle (13).png", "assets/Idle (14).png", "assets/Idle (15).png")
  jumpA = loadAnimation("assets/Jump (1).png", "assets/Jump (2).png", "assets/Jump (3).png", "assets/Jump (4).png", "assets/Jump (5).png", "assets/Jump (6).png", "assets/Jump (7).png", "assets/Jump (8).png", "assets/Jump (9).png", "assets/Jump (10).png", "assets/Jump (11).png", "assets/Jump (12).png", "assets/Jump (13).png", "assets/Jump (14).png", "assets/Jump (15).png")
  runA = loadAnimation("assets/Run (1).png", "assets/Run (2).png", "assets/Run (3).png", "assets/Run (4).png", "assets/Run (5).png", "assets/Run (6).png", "assets/Run (7).png", "assets/Run (8).png", "assets/Run (9).png", "assets/Run (10).png", "assets/Run (11).png", "assets/Run (12).png", "assets/Run (13).png", "assets/Run (14).png", "assets/Run (15).png")
  deadA = loadAnimation("assets/Dead (1).png", "assets/Dead (2).png", "assets/Dead (3).png", "assets/Dead (4).png", "assets/Dead (5).png", "assets/Dead (6).png", "assets/Dead (7).png", "assets/Dead (8).png", "assets/Dead (9).png", "assets/Dead (10).png", "assets/Dead (11).png", "assets/Dead (12).png", "assets/Dead (13).png", "assets/Dead (14).png", "assets/Dead (15).png")

  groundImg = loadImage("assets/groundImg.png");

  tree1 = loadImage("assets/Tree_1.png");
  tree2 = loadImage("assets/Tree_2.png");
  tree3 = loadImage("assets/Tree_3.png");
}

function setup() { 
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(windowWidth/2-20, windowHeight/2-40,20,20);
  bg.addImage(bgImg);
  bg.scale = 1.5;
  
  player = createSprite(windowWidth-1150, windowHeight-300, 50, 50);
  player.addAnimation("idle", idleA);
  player.addAnimation("jump", jumpA);
  player.addAnimation("run", runA);
  player.addAnimation("dead", deadA);
  player.scale = 0.4;
  player.debug = true;
  player.setCollider("rectangle",-170,-20,350,480);

  ground = createSprite(windowWidth/2+370, windowHeight/2+480, windowWidth, 10);
  ground.addImage(groundImg);
  ground.velocityX = -10
}

function draw() {
  background(0);
  player.collide(ground);
  
  if(keyCode === 32){
    player.changeAnimation("jump", jumpA);
    player.velocityY = -6;
  }
  else if(keyCode === 39){
    player.changeAnimation("run", runA);
  }
  else{
    player.changeAnimation("idle", idleA);
  }
  
  if(ground.x < -10){
    ground.x = ground.width/2;
  }
  
  player.velocityY += 6;
  drawSprites();
}
