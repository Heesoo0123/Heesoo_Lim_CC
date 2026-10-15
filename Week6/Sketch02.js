
let frames = [];

let xLoc = 0;
let reverse = 1;
let counter = 0;

async function setup() {
  createCanvas(400, 400);
  frameRate(8);
  imageMode(CENTER);

  for (let i = 1; i <= 4; i++) {
    frames.push(await loadImage('frog_0' + i + '.jpg'));
  }
}

function draw() {
  background(0);

  fill(255);
  noStroke();
  text('Press A to move left, D to move right', 50, 30);

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

 function keyPressed() {
  if (key === 'n') {
    window.location.href = "Week6.html?sketch=2";
  }
}
}

