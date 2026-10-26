let numWaves = 10

function setup() {
    createCanvas(windowWidth, windowHeight)
    noFill()
}

function draw() {
    background(230)

    for (let i = 0; i < numWaves; i++) {
        let yLoc = map(i, 0, numWaves - 1, 0, height)

        let speed

        if (i % 2 == 0) {
            speed = 0.1
        } else {
            speed = -0.1
        }

        sinWave(i, 20, yLoc, speed)
    }
}

function sinWave(wavesPerCanvas, amplitude, yLoc, speed) {

    let offset = frameCount * speed

    push()

    translate(0, yLoc)

    beginShape()

    for (let i = 0; i < width; i++) {

        let mappedI = map(
            i,
            0,
            width,
            0,
            wavesPerCanvas * TWO_PI
        )

        let y = sin(mappedI - offset) * amplitude
        let x = i

        vertex(x, y)
    }

    endShape()

    pop()
}
