
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4
var pig1,pig2
var log1,log2
var ground
var bird1



  var block8,block9,block10,block11,block12,block13,block14,block15,block16,bloackstand
  var polygon
  
  function setup() {
    createCanvas(800,400);
    createSprite(400, 200, 50, 50);
    block8=new Box(330,235,30,40)
    block9=new Box(360,235,30,40)
    block10=new Box(390,235,30,40)
    block11=new Box(420,235,30,40)
    block12=new Box(450,235,30,40)
    block13=new Box(450,195,30,40)
    block14=new Box(390,195,30,40)
    block15=new Box(420,195,30,40)
    block16=new Box(390,155,30,40)
    polygon=Bodies.circle(50,200,20)
    World .add(world.polygon)
    polygon=new Slingshot(this.polygon,{x:100,y:200})
  
    blockstand=new Box(350,250,10,100)
    
    
  }
  
  function draw() {
    background(255,255,255);  
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    blockstand.display()
    drawSprites();
  }


function draw(){
    background(0);
  
    Engine.update(engine);
    
box1.display();
box2.display();
ground.display();
pig1.display();
log1.display();

box3.display();
box4.display();
pig2.display();
log2.display();
bird1.display();
}
