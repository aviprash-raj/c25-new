class Paper{
    constructor(x,y,Radius){
    var option ={
        isStatic:false,
      restitution:0.3,
      friction:0.8,
       density:1.5
    }
    this.body=Bodies.circle(x,y,Radius,option);
    this.Radius=Radius;
      World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        //add.Image(paperball.jpeg);
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.Radius);
    
    }
    
    }