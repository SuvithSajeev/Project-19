var towerImg, tower;
var GoombaImg, Goomba, GoombasGroup;
var bird, birdImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play";

function preload(){
  towerImg = loadImage("tower.jpg");
  GoombaImg = loadImage("goomba_walking.png");
  birdImg = loadImage("bird.png");

  GoombasGroup = new Group();
  invisibleBlockGroup  =new Group();

}

function setup() {
  createCanvas(600, 600);

  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  tower.scale = 2

  bird = createSprite(200,200,50,50);
  bird.addImage("bird",birdImg);
  bird.scale = 0.4;

}

function draw() {
  background(200);
  
 if(gameState === "play"){
  
  if(keyDown("right_arrow")){
    bird.x = bird.x + 3;
  
  }

  if(keyDown("left_arrow")){
    bird.x = bird.x - 3;
  
  }

  if(keyDown("space")){
    bird.velocityY = - 5;
    
 }
 
 bird.velocityY = bird.velocityY + 0.8;
 
 if(tower.y > 300){
  tower.y = 200
}

 spawnGoombas();

  if(GoombasGroup.isTouching(bird)){
    bird.velocityY = 0;
    gameState = "end";
  }

  if(bird.y > 600){
    gameState = "end"; 
  }

 drawSprites();
 
 }

 if(gameState === "end"){
  stroke("blue");
  fill("yellow");
  textSize(35);
  text("Game Over",230,250);
  

 }

}

function spawnGoombas()
{
  if(frameCount%240 === 0){
  
  Goomba = createSprite(200,-50);
  Goomba.addImage("Goomba",GoombaImg);
  Goomba.scale = 0.3;  


  invisibleBlock = createSprite(200,15);
 
  invisibleBlock.height = 2;
  invisibleBlock.visible = false;

  
  Goomba.x = Math.round(random(120,400));
  Goomba.velocityY = 1;

  

  invisibleBlock.x = Goomba.x;
  invisibleBlock.velocityY = 1;

  bird.depth = Goomba.depth;
  bird.depth +=1;

  Goomba.lifetime = 620;
  



  GoombasGroup.add(Goomba);
  
  invisibleBlock.debug = true;
  invisibleBlockGroup.add(invisibleBlock);


  }
  
}
