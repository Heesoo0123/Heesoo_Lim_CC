let x;
let y;
let w = 100, h=100;
let diameter = 50;
let xSpeed = 5;
let ySpeed = 10;

function setup(){
   createCanvas(windowWidth, windowHeight)
   x = width/2;
   y = 50
   strokeWeight(5)
}

function draw(){
   background(100,400,140,50)
   ellipse(x,y,w,h)

   if(y > height - h/2){
    ySpeed = -ySpeed;
   }
   if(y < h/2){
    ySpeed = -ySpeed;
   }
   if(x < w/2){
    xSpeed = -xSpeed;
   }
   if(x > width - w/2){
    xSpeed = -xSpeed;
   }

   x += xSpeed;
   y += ySpeed;
   
}