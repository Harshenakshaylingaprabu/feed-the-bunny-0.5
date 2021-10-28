const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope
var fruit
var fruit_cons

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  rope = new Rope(7,{x:250,y:10})
  fruit = Bodies.circle(300,300,20)
  Matter.Composite.add(rope.body,fruit)
  fruit_cons=new Link(rope,fruit)
}

function draw() 
{
  background(51);
  ground.show();
  
  Engine.update(engine);
  rope.show()
  ellipse(fruit.position.x,fruit.position.y,20,20)
 
   
}
