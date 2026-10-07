function setup() {
  createCanvas(600, 600);
  background(255);
  beginRecordSvg("noisyLines.svg");

  let centerX = 300;
  let centerY = 400;

  noFill();
  stroke(0);

  
  for (let x = 20; x < width; x += 20) {
    noisyLine(x, 20, centerX, centerY - 80);
  }

 
  for (let x = 20; x < width; x += 20) {
    noisyLine(x, height - 20, centerX, centerY + 100);
  }


  for (let y = 20; y < height; y += 20) {
    noisyLine(20, y, centerX - 70, centerY);
  }

  
  for (let y = 20; y < height; y += 20) {
    noisyLine(width - 20, y, centerX + 70, centerY);
  }

 endRecordSvg()
 

}

function noisyLine(x1, y1, x2, y2) {

  beginShape();

  for (let i = 0; i <= 50; i++) {

    let x = lerp(x1, x2, i / 50);
    let y = lerp(y1, y2, i / 50);

    let n = noise(i * 0.1) * 5 - 2.5;

    vertex(x, y + n);
  }

  endShape();
}