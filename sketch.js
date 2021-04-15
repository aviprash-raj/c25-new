
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine,body,ground,bodies,paperBall,dustbin1,dustbin2,dustbin3;
/*function preload()
{
	
}*/

function setup() {
	createCanvas(1000,800);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	ground=new Ground(width/2,780,1000,20);

	dustbin1=new Dustbin(700,700,20,140)
	dustbin2=new Dustbin(890,700,20,140)
	dustbin3=new Dustbin(795,760,170,20)
    paperBall=new Paper(50,290,70,44);

   Engine.run(engine);
  
}


function draw() {
	background(100,19,300);
	Engine.update(engine); 
	 rectMode(CENTER);
	 paperBall.display();
 ground.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 groundObject.display();
 dustbinObj.display();
 paperObject.display();
 paperObject.display();
 groundObject.display();
 dustbinObj.display();
 // keyPressed();
 
}



function keyPressed(){
	if (keyCode === UP_ARROW){
        Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:380,y:-380});
}
}






