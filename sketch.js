
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var b1,b2,b3;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 1200);




	engine = Engine.create();
	world = engine.world;
ground=new GroundClass(450,680,1500,10);
paper=new PaperClass(100,650,40);
b1=new BasketClass(1100,660,200,213);
b2=new BasketClass(400,620,10,100);
b3=new BasketClass(600,620,10,100);



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  paper.display();
  b1.display();
 
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});

  
	}
}


