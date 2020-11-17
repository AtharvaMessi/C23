class Ground {
    
    constructor(){
        var options ={
            isStatic: true       }
        this.body = Bodies.rectangle(200,390,400,10,options);
        this.width = 400;
        this.height = 10;
        World.add(world,this.body);
    }

    display(){
        rectMode(CENTER);
        fill("brown")
        rect(this.body.position.x, this.body.position.y,this.width,this.height);
    }
}
