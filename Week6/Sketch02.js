
let sizes = [20, 50, 30, 70, 40];

let frames = [];
let xLoc = 0;
let reverse = 1;
let counter = 0;

let scene = 1;
let pg;

async function setup() {
  createCanvas(400, 400);
  frameRate(8);
  imageMode(CENTER);

  pg = createGraphics(400, 400);

  for (let i = 1; i <= 4; i++) {
    frames.push(await loadImage('frog_0' + i + '.jpg'));
  }
}

function draw() {
  background(0);

  if (scene === 1) {

    pg.background(0);

    for (let i = 0; i < sizes.length; i++) {
      let movement = sin(frameCount * 0.03 + i) * 80;

      pg.noFill();
      pg.stroke(255);

      pg.circle(160 + i * 20, 200,
                sizes[i] * 1.5 + movement * 2);
    }

    image(pg, width / 2, height / 2);

    fill(255);
    noStroke();
    text('Press 2 to see the frog', 20, 30);

  } else if (scene === 2) {

    // SKETCH 02: Frog animation
    fill(255);
    noStroke();
    text('Press A or D to move', 20, 30);

    if (frames.length < 4) {
      return;
    }

    let img = frames[counter % frames.length];

    if (keyIsPressed) {
      if (key === 'a') {
        xLoc -= 5;
        reverse = -1;
        counter++;

      } else if (key === 'd') {
        xLoc += 5;
        reverse = 1;
        counter++;
      }
    }

    push();
    translate(width / 2 + xLoc, height / 2);
    scale(reverse, 1);
    image(img, 0, 0, 200, 200);
    pop();

    // Change scene when frog reaches right edge
    if (width / 2 + xLoc >= width - 50) {
      scene = 1;
      xLoc = 0;
      counter = 0;
    }
  }
}

function keyPressed() {
  if (key === '2') {
    scene = 2;
    xLoc = 0;
    counter = 0;
  }
}
