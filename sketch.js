const Body = Matter.Body;
const Bodies = Matter.Bodies
const Engine = Matter.Engine;
const World = Matter.World;

var engine,world;

var rainDrops = [];

function preload(){
  thunder1 = loadImage("thunder1.png");
  thunder2 = loadImage("thunder2.png");
}

function setup() {
  createCanvas(600,800);
  engine = Engine.create();
  world = engine.world;
  for(var r = 0; r<200; r++){
    rainDrops.push(new Rain(random(20,580),random(20,780)));
  }

  boy = new Umbrella(300,650);

}

function draw() {
  background(0);  
  Engine.update(engine);
  for(var r = 0; r<rainDrops.length; r++){
    rainDrops[r].display();
    rainDrops[r].update();
  }
  boy.display();
  if(frameCount % 50===0){
    var rand = Math.round(random(1,4));
    switch(rand){
      case 1: image(thunder1,550,50);
      break;
      case 2: image(thunder2,50,50);
      break;
      case 3: image(thunder1,400,100);
      break;
      case 4: image(thunder2,200,100);
      break;
      default:break;
    }
  }
 
  
}