function setup(){
    createCanvas(600, 600, WEBGL)
    angleMode(DEGREES)
}

function draw(){
    background(220)

    let foldAngle = mouseY / 5

    foldAngle = constrain(foldAngle,0,100)
    

    translate(0,-150,0)

    rotateX(foldAngle)

    translate(0,25,0)

    fill(150)
    stroke(0)
    plane(200,50)

    push()

    translate(0,50,0)

    rotateX(foldAngle)

    translate(50,50,40)
    rotateZ(-10)

    fill(150)
    stroke(0)
    plane(100,150)

    translate(0,150,0)

    fill(150)
    stroke(0)
    plane(100,150)

    pop()

    push()

    translate(0,50,0)

    rotateX(foldAngle)

    translate(-50,50,40)
    rotateZ(10)

    fill(150)
    stroke(0)
    plane(100,150)

    translate(0,150,0)

    fill(150)
    stroke(0)
    plane(100,150)

    pop()
    

    // push()

    // translate(100,-150,0)

    // rotateX(foldAngle)

    // translate(0,150,0)

    // fill(150)
    // noStroke(0)
    // plane(100,150)

    // pop()

    
}

//  translate(450,height/2) // rotate and translate order changes the pivot point of the rotation
//     rotate(r)
//     rect(0,0, 50)

//     line(0,0,0,200)

//     translate(0,200) // rotate and translate order changes the pivot point of the rotation
//     rotate(-r) //remove rotate stops self rotation
//     rect(0,0, 50)

//     line(0,0,0,200)

//     translate(0,200) // rotate and translate order changes the pivot point of the rotation
//     rotate(-r) //remove rotate stops self rotation
//     rect(0,0, 50)
