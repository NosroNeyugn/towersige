const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas;
function preload(){
}
function setup(){
    var canvas = createCanvas(1200,400);
block8 = new Ground(330,235,30,40);
block9 = new Block(360,235,30,40);
block10= new Block(390,235,30,40);
block11 = new Block(420,235,30,40);
block12 = new Block(450,235,30,40);
block13 = new Block(360,235,30,40);
block14 = new Block(390,235,30,40);
block15 = new Block(420,235,30,40);
block16 = new Block(390,235,30,40);

}
function draw(){
    background("black");
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();

}
