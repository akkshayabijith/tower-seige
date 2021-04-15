const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("go corona.jpg");
  coronaimg = loadImage("corona.jpg");
  
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,250,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
  
  mask = new Mask(90,90)
  line = new Elas(mask.body,{x:100, y:100});


  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  imageMode(CENTER)
  image(polygon_img,block16.body.position.x,block16.body.position.y,30,40);
  image(polygon_img,block15.body.position.x,block15.body.position.y,30,40);
  image(polygon_img,block14.body.position.x,block14.body.position.y,30,40);
  image(polygon_img,block13.body.position.x,block13.body.position.y,30,40);
  image(polygon_img,block12.body.position.x,block12.body.position.y,30,40);
  image(polygon_img,block11.body.position.x,block11.body.position.y,30,40);
  image(polygon_img,block10.body.position.x,block10.body.position.y,30,40);
  image(polygon_img,block9.body.position.x,block9.body.position.y,30,40);
  image(polygon_img,block8.body.position.x,block8.body.position.y,30,40);
  image(polygon_img,block7.body.position.x,block7.body.position.y,30,40);
  image(polygon_img,block6.body.position.x,block6.body.position.y,30,40);
  image(polygon_img,block5.body.position.x,block5.body.position.y,30,40);
  image(polygon_img,block4.body.position.x,block4.body.position.y,30,40);
  image(polygon_img,block3.body.position.x,block3.body.position.y,30,40);
  image(polygon_img,block2.body.position.x,block2.body.position.y,30,40);
  image(polygon_img,block1.body.position.x,block1.body.position.y,30,40);

  stand2.display();
  image(coronaimg,stand2.body.position.x,stand2.body.position.y-25,30,40);
  image(coronaimg,stand2.body.position.x-30,stand2.body.position.y-25,30,40);
  image(coronaimg,stand2.body.position.x-60,stand2.body.position.y-25,30,40);
  image(coronaimg,stand2.body.position.x-90,stand2.body.position.y-25,30,40);
  image(coronaimg,stand2.body.position.x+30,stand2.body.position.y-25,30,40);
  image(coronaimg,stand2.body.position.x+60,stand2.body.position.y-25,30,40);
  image(coronaimg,stand2.body.position.x+90,stand2.body.position.y-25,30,40);
  image(coronaimg,stand2.body.position.x,stand2.body.position.y-65,30,40);
  image(coronaimg,stand2.body.position.x+30,stand2.body.position.y-65,30,40);
  image(coronaimg,stand2.body.position.x+60,stand2.body.position.y-65,30,40);
  image(coronaimg,stand2.body.position.x-30,stand2.body.position.y-65,30,40);
  image(coronaimg,stand2.body.position.x-60,stand2.body.position.y-65,30,40);
  image(coronaimg,stand2.body.position.x,stand2.body.position.y-105,30,40);
  image(coronaimg,stand2.body.position.x-30,stand2.body.position.y-105,30,40);
  image(coronaimg,stand2.body.position.x+30,stand2.body.position.y-105,30,40);
  image(coronaimg,stand2.body.position.x,stand2.body.position.y-145,30,40);
}
