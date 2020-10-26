
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, dustbinbottom, dustbinSide1, dustbinSide2
var ground


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.



  ball = new Paper();
  dustbinbottom = new Dustbin(650, 580, 200, 20);
  dustbinSide1 = new Dustbin(550, 535, 20, 100);
  dustbinSide2 = new Dustbin(750, 535, 20, 100);
  ground = new Ground();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  dustbinbottom.display();
  dustbinSide1.display(); 
  dustbinSide2.display();
  ground.display();
  keyPressed();
  
  drawSprites();
 
}

function keyPressed() {
if (keyWentDown(UP_ARROW)){
  Matter.Body.applyForce(ball.body, ball.body.position, {x:15, y:-15})

}

}