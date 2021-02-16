
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ground2,ground3,ground4,hammer1,soil1,soil2,soil3,soil4,soil5,soil6,soil7,soil8,soil9,iron,rubber,stone1

function preload(){
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Gnd(600,590,1200,20)
	ground3=new Gnd(10,300,20,600)
	ground4=new Gnd(1190,300,20,600)

	soil1=new Soil_p(600,580,5)
	soil2=new Soil_p(600.5,580,5)
	soil3=new Soil_p(601,580,5)
	soil4=new Soil_p(601.5,580,5)
	soil5=new Soil_p(602,580,5)
	soil6=new Soil_p(602.5,580,5)
	soil7=new Soil_p(603,580,5)
	soil8=new Soil_p(603.5,580,5)
	soil9=new Soil_p(604,580,5)

	rubber=new Rubber(700,400)
	iron=new Ib(300,500)

	stone1=new Stone(400,400,100,100)

	hammer1=new Hammer(600,300)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  ground.display()
  ground3.display()
  ground4.display()
  soil1.display()
  soil2.display()
  soil3.display()
  soil4.display()
  soil5.display()
  soil6.display()
  soil7.display()
  soil8.display()
  soil9.display()
  iron.display()
  rubber.display()
  stone1.display()
  hammer1.display()
  drawSprites();
 
}



