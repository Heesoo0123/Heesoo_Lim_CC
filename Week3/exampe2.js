// simple demo of what lerp is

let x = 0

let lerpMouseX = 0
let lerpMouseY = 0

function setup(){

    createCanvas(windowWidth, windowHeight)

    rectMode(CENTER)
    angleMode(DEGREES)

}

function draw(){

    background(0)

    stroke(255)
    strokeWeight(2)
    noFill()

    push()
    translate(width/2,height/2)
    rect(0,0,50)
    pop()

    x = lerp(0,width,0.75)

    push()
    translate(x,height/2)
    rect(0,0,50,50)
    pop()


// follow my mouse

lerpMouseX = lerp(lerpMouseX, mouseX, 0.01)  //lerp 
lerpMouseY = lerp(lerpMouseY, mouseY, 0.01) 

push()
    translate(lerpMouseX,lerpMouseY)
    rect(0,0,50,50)
    pop()

}