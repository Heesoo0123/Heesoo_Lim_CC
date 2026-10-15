let frames = []

async function setup() {
createCanvas(windowWidth, windowHeight)
frameRate(12)
rectMode(CENTER)
imageMode(CENTER)

//image(img, width/2, height/2)
for(let i = 1; i <=12; i++){
frames[i-1] = await loadImage("walk_cycle_pngg_sequence/" + i + ".png")
print("walk_cycle_png_sequence/" + i + ".png")
}
print(frames)

}

let counter = 0 //정수형 변수
let xLoc = 0 
let xV = 7.5
let dir = 1 

function draw() {
    background(200)

    let currentFrame = frames(counter % frames.length) //similar to if statement, if counter is greater than the length of the array, it will loop back to the beginning of the array

    push()
    translate(xLoc,height/2)
    scale(dir,1)

    if(KeyIsDown(RIGHT_ARROW)){
        dir = 1
        xV = 7.5 //velocity 는 속도 

        counter++
        xLoc+=xV
    }

    if(KeyIsDown(LEFT_ARROW)){
        dir = -1
        xV = -7.5
        counter++ //  in p5.js increases the value of a numeric variable named counter by 1
        xLoc+=xV
    }
     image(currentFrame, 0,0)
    pop()

    fill(0)
    noStroke()

    if(dist(xLoc, height/2, width/2, height/2) < 50){
        fill(200,150,0)

        window.location.href = "../../index.html" //redirects to the index.html page when the character is close enough to the rectangle
    }
    rect(width/2, height/2, 100, 200)



    // if(xLoc>width){
    //     dir = -1
    //     xV = -7.5
    // }
    // else if(xLoc<0){
    //     dir = 1
    //     xV = 7.5
    // }

   

    
    xLoc += xV //if the xLoc is greater than the width of the canvas, reset it to 0
}
