const Engine= Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;


var backgroundImg;
var snowman;
var drops=[];
var maxdrop=100

function preload(){
backgroundImg=loadImage("snow1.jpg");
}

function setup() {
  engine = Engine.create();
    world = engine.world;

   createCanvas(800,400);

   
   if(frameCount %150===0){
       for(var i=0;i<maxdrop ; i++){
        drops.push(new Snowfall(random(0,400),random(0,400)));
    
      }
       }  
 snowman= new Snowman(250,350);
   
}

function draw() {
  Engine.update(engine); 

  if(backgroundImg){
    background(backgroundImg);

  }
   snowman.display();

   
   for(var i=0; i<maxdrop;i++){
    drops[i].display()
    drops[i].updateY();

}
}