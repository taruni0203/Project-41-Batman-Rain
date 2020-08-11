class Rain{
    constructor(x,y){
        var options ={
            friction: 0.001,
            density: 0.001
        }
        this.body = Bodies.circle(x,y,3,options);
        this.radius = 3;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        stroke("navy");
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
    update(){
        if(this.body.position.y>height){
            Body.setPosition(this.body, {x: random(20,580), y: 0});
        }
    }
}