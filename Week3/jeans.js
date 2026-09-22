function setup(){
    createCanvas(600, 600, WEBGL)
    angleMode(DEGREES)
}

function draw(){
    background(220)


    let foldAngle = mouseY / 5

    // rotateX(mouseY/ 30)
    foldAngle = constrain(foldAngle,0,100)

    translate(0,-150,0)
    rotateX(foldAngle)
translate(0,150,0)
    fill("skyblue")
    stroke(0)
    plane(200,300)
}