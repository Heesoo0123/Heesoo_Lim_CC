function setup(){
    createCanvas(400,400)
    pixelDensity(1)
}

function draw(){
    loadPixels()
    let px = pixels
    let index = 0
    for(let y = 0; y < height; y++) {
        for(let x = 0; x < width; x++) {

            // let r = random(255)
            // let r =255
            // let g = random(255)
            // let b = random(255)

            px(index) = r 

            index += 4



    }
}