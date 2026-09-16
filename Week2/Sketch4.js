// // Color changing with mouseY
let r =0, g =0, b = 0;

function setup(){
    createCanvas(windowWidth, windowHeight)
    rectMode(CORNER);
    // colorMode(HSB);


    background(0)
    // noStroke();

}
function draw(){

    r = map(mouseY, 0, height,150,500)
    g = map(mouseY, 0, height,200,150)
    b = map(mouseY, 0, height,250,0)
    
    fill(r,g,b,150)
    stroke(100,50,255,150)
    rect(mouseX, mouseY, 80 , 150);
}


// Example of bouncing ball
// let y = 0;
// let w = 100, h=100;
// let x;
// let ySpeed = 10;
// let xSpeed = 7;

// function setup(){
//     createCanvas(windowWidth,windowHeight)

//     y = h/2
//     x = width/2
//    //rectMode(CENTER);
//     strokeWeight(5);
//     // background(0);
// }
// function draw(){

//     background(0,100,255,50);
//     stroke(100,200,0);
//     fill(200,200,0)

//     ellipse(x,y,w,h);

//     // y=y+10; 
    
//     if(y>height - h/2){
//          //y = -200;
//          ySpeed = -ySpeed; // x = random(width)
//      }
//      if(y < h/2){
//         ySpeed = -ySpeed
//      }

//      if(x>width - w/2){
//          //y = -200;
//          xSpeed = -xSpeed; // x = random(width)
//      }
//      if(x < w/2){
//         xSpeed = -xSpeed
//      }
    
//      y += ySpeed
//      x += xSpeed

//     print(y)
// }




//Example of X and Y changinng with mouseX and mouseY
// let y = 0;
// function setup(){
//     createCanvas(windowWidth,windowHeight)
//     rectMode(CENTER);
//     strokeWeight(5);
//     // background(0);
// }
// function draw(){

//     background(0,100,255,50);
//     stroke(100,200,0);
//     fill(0,255,200)
//     rect(mouseX,mouseY,100,100);

//     stroke(200,100,0)
//     fill(200,200,0)
//     rect(mouseY,mouseX,100,100);

//     // y++; 
//     // print(y)
// }