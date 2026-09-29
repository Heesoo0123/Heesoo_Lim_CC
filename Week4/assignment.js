function setup() {
  createCanvas(576, 384);
  rectMode(CENTER)
  noFill();
  stroke(0);
}

function draw() {
  background(255);

  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 5; y++) {
        let mouseSize = map(mouseX,0, width,10,50)
        let size = mouseSize + y * 5
      rect(40 + x * 70, 40 + y * 70,size,size);
    }
  }
}