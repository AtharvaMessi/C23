class Box {
    // box1 = new Box() constructor gets executed
    constructor(a,b,c,d){
        var options ={
            restitution: 1.0
        }
        this.body = Bodies.rectangle(a,b,c,d,options);
        this.width = c;
        this.height = d;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255)
        rect(0,0,this.width,this.height);
        pop();
    }
}
