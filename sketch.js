
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine,world;

var dustbinn,paper,ground
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinn= new Dustbin(1200,650)
	paper= new Paper(200,450,40)
	ground= new Ground(width/2,650,width,20)
	


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbinn.display()
  paper.display()
  ground.display()
}

function keyPressed(){
	if (keyCode===UP_ARROW){
	    Matter.Body.applyForce(paper.body,paper.body.positon,{x:85,y:-85})
	}
}



