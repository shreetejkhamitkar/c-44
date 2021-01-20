const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var soldier1Img,soldier1;
var villager1,villager2,villager3,terrorist1;
var villager1Img,villager2Img,villager3Img,terrorist1Img;
var backgroundImg;

function preload(){
villager1Img=loadImage("villager 1.jpg");
villager2Img=loadImage("villager 2.jpg");
villager3Img=loadImage("villager 3.jpg");
terrorist1Img=loadImage("terrorist1.jpg");
soldier1Img=loadImage("army 1.jpg");
backgroundImg=loadImage("background 4.jpg");
}
function setup() {
  createCanvas(displayWidth-20,displayHeight-170);
soldier1=createSprite(100,500,10,10);
soldier1.addImage(soldier1Img);
soldier1.scale=0.1;
  engine=Engine.create();
  world=engine.world;
}

function draw() {

  background(backgroundImg); 

  Engine.update(engine);
  drawSprites();
}