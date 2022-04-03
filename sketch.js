var bg,bgImg;
var player, idleA, jumpA, runA, deadA;
var ground, groundImg;
var tree1, tree2, tree3, mushroom1, mushroom2, rasengan, obstacle, obstaclesGroup;
var jumpState, singleJumpTime;

function preload(){
  bgImg = loadImage("assets/BG.png")
  
  jumpA = loadImage("assets/Jump (7).png");
  runA = loadAnimation("assets/Run (1).png", "assets/Run (3).png", "assets/Run (5).png", "assets/Run (6).png", "assets/Run (8).png", "assets/Run (9).png", "assets/Run (12).png", "assets/Run (13).png", "assets/Run (15).png");
  deadA = loadImage("assets/Dead (15).png");

  groundImg = loadImage("assets/groundImg.png");

  tree1 = loadImage("assets/Tree_1.png");
  tree2 = loadImage("assets/Tree_2.png");
  tree3 = loadImage("assets/Tree_3.png");

  mushroom1 = loadImage("assets/Mushroom_1.png");
  mushroom2 = loadImage("assets/Mushroom_2.png");

  rasengan = loadImage("assets/magik.png");
  
  jumpState = 0;
  singleJumpTime = 0;
}

function setup() { 
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(windowWidth/2-20, windowHeight/2-40,20,20);
  bg.addImage(bgImg);
  bg.scale = 1.5;
  
  player = createSprite(windowWidth-1150, windowHeight-300, 50, 50);
  player.addAnimation("run", runA);
  player.addAnimation("jump", jumpA);
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
  console.log(singleJumpTime);
  
  if(keyCode === 32){
    player.changeAnimation("jump", jumpA);
    player.y = 500;
    singleJumpTime += 1;
  }
  else if(player.y >= 842.6){
    player.changeAnimation("jump", jumpA);
  }
  else{
    player.y = 842.5;
    player.changeAnimation("run", runA);
  }
  
  if(ground.x < 200){
    ground.x = ground.width/2;
  }

  if(singleJumpTime > 25){
    player.y = 842;
    singleJumpTime = 0;
    keyCode = 39;
  }

  player.velocityY += 5;
  
  spawnObstacles1();
  drawSprites();
}

function spawnObstacles1() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,height-95,20,30);
    //obstacle.setCollider('circle',0,0,45);
    obstacle.debug = true;
  
    obstacle.velocityX = ground.velocityX;
    
    var rand = Math.round(random(1, 3));

    switch(rand) {
      case 1:
        obstacle.addImage(tree1);
        break;
      case 2:
        obstacle.addImage(tree2);
        break;
      case 3:
        obstacle.addImage(tree3);
        break;
    }
    
    obstacle.scale = 0.3;
    obstacle.lifetime = 300;
    obstacle.depth = player.depth;
    player.depth +=1;
    
    obstaclesGroup.add(obstacle);
  }
}