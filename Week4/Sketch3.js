// let wavesPerCanvas = 8
// let amplitude = 50
// let offset = 0;
// let yloc //why is let yloc outside 
let num



function setup(){
    createCanvas(400,400)
    yLoc =height/2
    noFill()
}

function draw(){
    background(230)

    // let v = floor(random(3,20))

    // nShape(mouseX,mouseY,v, v*4)

    // push()

    // translate(0,yLoc)

    // beginShape()
    // for(let i =0; i<width; i++){

    //     mappedI = map(i,0,width,0, wavesPerCanvas*TWO_PI)
    //     let y = sin(mappedI - offset)*amplitude
    //     let x = i

    //     vertex(x,y)
    // }
    // endShape()

    // pop()

    // offset = frameCount*0.01
    noiseWave(1,100,height/2,0.05)

}

function sinWave(wavesPerCanvas,amplitude,yLoc,speed){

    let offset = frameCount*speed

    push()

    translate(0,yLoc)

    beginShape()
    for(let i =0; i<width; i++){

        mappedI = map(i,0,width,0, wavesPerCanvas*TWO_PI)
        let y = sin(mappedI - offset)*amplitude
        let x = i
        vertex(x,y)
    }
    endShape()

    pop()
}

function nShape(xLoc, yLoc,numVertices, radius){

    push()
    translate (xLoc,yLoc)

    beignShape()
    for(let i = 0; i<numVertices; i++){
        let mappedI = map(i, 0, numVertices, 0, TWO_PI)

        let x = sin(mappedI)*radius
        let y = cos(mappedI)*radius
        
        vertex(x,y)
    }
        endShape(CLOSE) //last vertex is connected to beginning of the vertex

    
    pop()



}
function noiseWave(density,amplitude,yLoc,speed){
    let offset = frameCount*speed

    push()

    translate(0,yLoc)

    beginShape()
    for(let x =0; x<width; i++){

        let seed = map(x, 0, width,0,density)+offset
        let y = noise(seed)*amplitude
        
        vertex(x,y)
    }
    endShape()

    pop()

}

function mousePressed(){
    let v = floor(random(3,20))

    nShape(mouseX,mouseY,v, v*4)
}


