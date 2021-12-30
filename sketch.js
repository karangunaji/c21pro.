
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball ;
var groundObj
var engine 
var world
var leftSide
var rightSide

function preload()
{
	
}

function setup() {
	createCanvas(1350,635);
	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(width/2,600,width,20);
	leftSide =  new Ground(1000,530,20,120);
	rightSide = new Ground(1200,530,20,120);





	//Create the Bodies Here.

	var ball_options = {
		isStatic: false,
		restitution : 0.3,
        friction : 0,   
		density : 1.2 
	}

   ball = Bodies.circle(200,100,20,ball_options)
   World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  groundObj.display()
  ellipse(ball.position.x,ball.position.y,20,20);
  leftSide.display()
  rightSide.display()
  
  



  drawSprites();

  




 
}



function keyPressed(){

if (keyCode==UP_ARROW){

	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});

	
}
else (ball.x>screen.width)
	{ball.position.x,ball.position.y,20,20
}

}





