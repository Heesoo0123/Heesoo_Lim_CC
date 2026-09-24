function setup(){
createCanvas(720,400,WEBGL)
colorMode(HSB)
angleMode(DEGREES)
noStroke()
textOutput()
}


function draw(){

    background(0)

    let circleHue = map(mouseX,0,width,0,360)
    let d = map(mouseY,0,height,20,300)
    constrain(d,0,50)

    fill(circleHue,80,90)

    for (let i =0;i<5; i++){
        push()

        let angle = frameCount + i*72
        let x = cos(angle) * 130
        let z = sin(angle) * 130

        translate(x, 0, z)
        sphere(d/2)

        pop()
    }
}