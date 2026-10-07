function setup() {
  createCanvas(600, 600);
  background(255);
  beginRecordSvg("triangle.svg");

  let pointX = 300;
  let pointY = 100;

  for (let y = 150; y < 580; y += 15) {
    line(pointX, pointY, 20, y);
  }

  for (let y = 150; y < 580; y += 15) {
    line(pointX, pointY, 580, y);
  }
  endRecordSvg()
}

