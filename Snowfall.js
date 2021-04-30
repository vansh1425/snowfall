class Snowfall {
    constructor(x,y){
    var options ={
      friction:0.1,
      restitution:0.8
        }
        
        this.snow = Bodies.circle(x,y,4,options);
        this.radius=4;
        this.image = loadImage("snow4.webp");
   
        World.add(world,this.snow);
      }
   display(){
     fill("blue");
     ellipseMode(CENTER);
     ellipse(this.snow.position.x,this.snow.position.y,this.radius,this.radius);
     image(this.image, this.snow.position.x, this.snow.position.y);
   }
   updateY(){
     if(this.snow.position.y>height){
       Matter.Body.setPosition(this.snow,{x:random(0,400),y:random(0,400)});
     }
   }
}