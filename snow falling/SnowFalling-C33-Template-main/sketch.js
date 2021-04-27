const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var backgroundImg;






function preload() {
  backgroundImg = loadImage("snow2.jpg");
}

 function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  drawSprites();
}