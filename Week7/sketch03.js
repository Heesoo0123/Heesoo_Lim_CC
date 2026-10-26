let aquariumVideo;
const VIDEO_OPACITY = 0.45; // 0 = invisible, 1 = opaque.
const VIDEO_BLUR = 10; // Pixels, matching the aquarium light.
let fishX = [];
let fishY = [];
let fishSpeed = [];
let fishSize = [];
let fishDirection = [];
let fishTurn = [];

let numFish = 8;

function setup() {
  createCanvas(1000, 700);
  aquariumVideo = createVideo('42696-432087106_medium.mp4');
  aquariumVideo.hide();
  aquariumVideo.elt.muted = true;
  aquariumVideo.elt.loop = true;
  aquariumVideo.elt.playsInline = true;
  aquariumVideo.elt.addEventListener('loadeddata', startAquariumVideo);
  // A click also starts playback if the browser blocks autoplay.
  drawingContext.canvas.addEventListener('pointerdown', startAquariumVideo);

  for (let i = 0; i < numFish; i++) {
    fishX[i] = random(150, width - 150);
    fishY[i] = random(100, height - 100);
    fishSpeed[i] = random(0.5, 2);
    fishSize[i] = random(0.4, 0.6);
    fishDirection[i] = 1;
    fishTurn[i] = 1;
  }
}

function draw() {
  background(0,0,6);
  drawBackground();
  drawAquariumVideo();
  

  for (let i = 0; i < numFish; i++) {

    // Smoothly flip the fish
    fishTurn[i] = lerp(fishTurn[i], fishDirection[i], 0.08);

    // Slow down while turning
    fishX[i] += fishSpeed[i] * fishTurn[i];

    // Bounce at the walls
    if (fishX[i] > width - 150) {
      fishDirection[i] = -1;
    }

    if (fishX[i] < 150) {
      fishDirection[i] = 1;
    }

    // Gentle floating movement
    let swimY = fishY[i] + sin(frameCount * 0.03 + i) * 10;

    push();
    translate(fishX[i], swimY);
    scale(fishTurn[i], 1);

    drawFish(0, 0, fishSize[i]);

    pop();
  }
}
function drawBackground() {
  noStroke();

  // 1. Blurred purple light
  drawingContext.filter = 'blur(10px)';

  fill(3,0,209);
  rect(50, 150, 900, 400);
  fill(255);
  rect(50, 150, 900, 50);

//   fill(0)
//   rect(300, 150, 500, 200);

//   fill(117,1,252)
//   rect(550,510,800,500)

  // 2. Turn off blur
  drawingContext.filter = 'none';

  // 3. Aquarium walls (sharp)
  // fill(60, 50, 45);
  // stroke(150)
  // strokeWeight(1)
  // rect(60, 0, 50, height);
  // rect(860, 0, 50, height);

 
}

function drawFish(x, y, s) {
  push();

  translate(x, y);
  scale(s);

  // Original fish coordinates are centered around (250, 250)
  translate(-250, -250);

  // argami_hair
  fill(190,5,45);
  noStroke();
  quad(190, 160, 110, 229, 180, 280, 240, 240);

  // head
  fill(255, 20, 56);
  stroke(117, 1, 252);
  strokeWeight(3);
  ellipse(250, 250, 150, 80);

  // body
  noStroke();
  fill(210, 19, 230);
  ellipse(196, 260, 130, 120);
  fill(255, 20, 56);
  ellipse(196, 266, 130, 120);

  // tail
  fill(255, 20, 56);
  triangle(30, 350, 170, 280, 80, 260);
  stroke(196, 20, 120);
  triangle(30, 220, 90, 280, 180, 260);

  // agarmi_hand
  fill(242, 99, 80);
  stroke(255, 30, 60);
  triangle(190, 280, 260, 280, 150, 320);

  // eye_outside
  fill(227, 146, 80);
  stroke(255, 80, 51);
  strokeWeight(1);
  ellipse(290, 250, 30, 30);

  // eyes
  fill(0);
  stroke(233, 207, 151);
  strokeWeight(1);
  ellipse(290, 250, 20, 20);

  pop();
}
function startAquariumVideo() {
  if (aquariumVideo) {
    const playback = aquariumVideo.elt.play();
    if (playback) playback.catch(() => {}); // Retry on canvas click.
  }
}

function drawAquariumVideo() {
  if (!aquariumVideo || aquariumVideo.elt.readyState < 2) return;

  push();
  const context = drawingContext;
  const previousFilter = context.filter;
  context.save();
  try {
    // Keep the video inside the existing blue rectangle.
    context.beginPath();
    context.rect(50, 150, 900, 400);
    context.clip();
    context.globalAlpha = VIDEO_OPACITY;
    context.filter = 'blur(' + VIDEO_BLUR + 'px)';
    context.drawImage(aquariumVideo.elt, 50, 150, 900, 400);
  } finally {
    context.restore();
    context.filter = previousFilter;
    pop();
  }
}

