// simple demo of what lerp is

let x = 0

let lerpMouseX = 0
let lerpMouseY = 0
let bgRed = 0 

function setup(){

    createCanvas(windowWidth, windowHeight)

    rectMode(CENTER)
    angleMode(DEGREES)

}

function draw(){

    background(0)

    let d = dist(lerpMouseX, lerpMouseY, mouseX, mouseY);
    if (d < 25) {
        bgRed =background(189, 0, 0);
    } else {
        background(0);
}

    stroke(255)
    strokeWeight(2)
    noFill()

    // push()
    // translate(width/2,height/2)
    // rect(0,0,50)
    // pop()

    // x = lerp(0,width,0.75)

    // push()
    // translate(x,height/2)
    // rect(0,0,50,50)
    // pop()


// follow my mouse

lerpMouseX = lerp(lerpMouseX, mouseX, 0.1)  //lerp 
lerpMouseY = lerp(lerpMouseY, mouseY, 0.1) 

push()
    translate(lerpMouseX,lerpMouseY)
  noStroke();
  fill(210, 220, 230, 170);
  push()
  translate(10,5)
  rotate(25)
  ellipse(-13, 15, 16, 40);
  pop()
  push()
  translate(-10,5)
  rotate(-25)
  ellipse(13, 15, 16, 40);
  pop()

  //body
  fill(110, 110, 105);
  ellipse(0, 10, 12, 30);


  fill(150, 150, 145);
  circle(0, -10, 14);


  //legs
  stroke(170, 170, 165);
  strokeWeight(1.5);
  line(-4, 2, -20, 12);
  line(-20, 12, -25, 22);
  line(4, 2, 20, 12);
  line(20, 12, 25, 22);

  line(-4, 10, -17, 23);
  line(-17, 23, -19, 34);
  line(4, 10, 17, 23);
  line(17, 23, 19, 34);

  line(-3, 17, -10, 30);
  line(-10, 30, -8, 39);
  line(3, 17, 10, 30);
  line(10, 30, 8, 39);

  //mouse
  stroke(190, 190, 185);
  strokeWeight(2);
  line(0, -17, 0, -34);

  pop();
    pop()

}