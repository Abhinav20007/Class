const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const constraint = Matter.Constraint

var engine,world
var ground
var box1,box2,box3,box4,box5
var rope1
var ball1
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world
  ground = new Ground(400,400,1000,10)
  box1 = new Box(490,350,50,50)
  box2 = new Box(490,300,50,50)
  box3 = new Box(490,250,50,50)
  box4 = new Box(490,200,50,50)
  box5 = new Box(490,150,50,50)
  
  ball1 = new ball(200,50,70)
  rope1 = new Sling(ball1.body, { x: 200, y: 200 });
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  drawSprites();
  ground.display();
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  ball1.display();
  rope1.display();
}
function mouseDragged(){
 
      Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
  
}
function mouseReleased(){
  rope1.fly();
}
function keyPressed(){
  if(keyCode === 32){
     rope1.attach(ball1.body);
     Matter.Body.setPosition(ball1.body,{x:200,y:50})
   }
}