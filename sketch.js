var  Engine =Matter.Engine
var  World =Matter.World
var Bodies= Matter.Bodies
var engine,world,ball,ground,box1,box2

function setup() {
  createCanvas(800,400);

  engine=Engine.create()
  world=engine.world 
// create objects from class
ground=new Ground(400,350,800,10)
box1=new Box(400,340,50,50)
box2=new Box(420,240,50,100)
}


function draw() {
  background(0); 
  Engine.update(engine)
  ground.show ()
  box1.show()
  box2.show()

}