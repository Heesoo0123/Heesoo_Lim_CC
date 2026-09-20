let r = 0
function setup(){

    createCanvas(windowWidth,windowHeight)
    
    rectMode(CENTER);
    angleMode(DEGREES);
}

function draw(){
//create a canvas every sencond so it erases the previous frame.
    background(0)

//shape style
    noFill()
    strokeWeight(2)
    stroke(255)

    // translate(width/2-mouseX,0)
    
    
    push()

    // translate(width/2,height/2) // rotate and translate order changes the pivot point of the rotation
    // rotate(r)

    // stroke(255,0,0)
    // line(0,0,150,0)

    // stroke(0,255,0)
    // line(0,0,0,150)

    // stroke(255)
    // line(100,0,50,50)

    // translate(0, 150)
    // // rotate(r)
    // rect(0,0,50,50)

    // translate(50,50)
    // rotate(r)
    // rect(100,0,50,50)

    // rect(0,0,50)

    // line(0,0,0,200)
    // rotate(-r)


    translate(0,200) // rotate and translate order changes the pivot point of the rotation
    rotate(r) //remove rotate stops self rotation
    rect(0,0,50)

    line(0,0,0,200)

    translate(0,200) // rotate and translate order changes the pivot point of the rotation
    rotate(0) //remove rotate stops self rotation
    rect(0,0, 50)

    pop() //restores them. 

    push() //// push saves the current transformation and style settings.

    translate(450,height/2) // rotate and translate order changes the pivot point of the rotation
    rotate(r)
    rect(0,0, 50)

    line(0,0,0,200)

    translate(0,200) // rotate and translate order changes the pivot point of the rotation
    rotate(-r) //remove rotate stops self rotation
    rect(0,0, 50)

    line(0,0,0,200)

    translate(0,200) // rotate and translate order changes the pivot point of the rotation
    rotate(-r) //remove rotate stops self rotation
    rect(0,0, 50)

    pop()

    translate(width/2,3*height/4)
    rect(0,0, 400,height/2)
    
    rect(0,0,50,80)

    translate(0,-height/4 -50)
    rect(0,0,80,150)

    fill(0)

    translate (0,-100)

    rect(0,0,150,100,10) // end rounding 



    r++
}

