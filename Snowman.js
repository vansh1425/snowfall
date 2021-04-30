class Snowman {
    constructor(x,y){
        var options={
            density: 0.6
        }
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        this.width=50;
        this.height=20;
        this.image = loadImage("snowman.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        
        rectMode(CENTER);
        rect(pos.x,pos.y);
        rect(pos.x,pos.y,this.width,this.height);
        image(this.image, pos.x, pos.y);
           
     }
}