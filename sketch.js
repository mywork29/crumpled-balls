
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
 // bobObject1 = new Ball (100,400,(this.r)/2);

 ground = new Ground(600,height,1200,20);
  
 bobDiameter = 40;

  startBobPositionX = width/5;
  startBobPositionY = height/2+200;

  bobObject1 = new Ball(startBobPositionX-bobDiameter*2, startBobPositionY,bobDiameter);
	boxPosition=width/2-100
    boxY=610;

    


    boxleftSprite=createSprite(boxPosition, boxY, 20,100);
    boxleftSprite.shapeColor=color('purple');

    boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
    World.add(world, boxLeftBody);

    boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
    boxBase.shapeColor=color('purple');

    boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
    World.add(world, boxBottomBody);

    boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
    boxleftSprite.shapeColor=color('purple');

    boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
    World.add(world, boxRightBody);


    Engine.run(engine);
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('pink');
  bobObject1.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed () {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:30,y:-90});
  }
} 




