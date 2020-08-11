class Umbrella{
    constructor(x,y){
        var options ={
            isStatic: true
        }
        this.body = Bodies.circle(x,y,150,options);
        this.radius = 150;
        this.image = loadImage("boy.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius*2,this.radius*2);
    }
}