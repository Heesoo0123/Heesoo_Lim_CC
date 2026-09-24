let r = 0

let w, h;
let numRects = 10;

function setup(){

    createCanvas(800,800)

    w = width/numRects

    h = height/numRects

    rectMode(CENTER)
    angleMode(DEGREES)

    background(0)
    fill(100)
    strokeWeight(2)
    stroke(255)

    // frameRate(2)


}

function draw(){

    background(0)
    noStroke()

    translate(w/2,h/2)


for(let x = 0; x<numRects; x++){

        for(let y = 0; y<numRects; y++){

            // for(let i = 0; i<5; i++){

    let d = dist(mouseX,mouseY, w * x, h * y)

    d = map(d,0,300,0.5,2);
    d = constrain(d,0,2);
    
        push();
        translate( w * x, h * y)

        let outerColor = color(31,65,162)
        let innerColor = color(232,11,26)

        for(let i = 0; i < 40; i++){
            let t = i / 39;

            let size = lerp (w*d,0,t)
            let circleColor = lerpColor(outerColor, innerColor,t)

        fill(circleColor)
        circle(0,0,size);
        }
        pop()

   }

}

}

