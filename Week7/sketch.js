let eyeX = 360;
let eyeY = 325;
let eyeSize = 170;

let fishX = 0;
let fishY = 0;

function setup() {
  createCanvas(700, 700);
}

function draw() {
  // Mouse controls time (0 to 1)
  let t = constrain(mouseX / width, 0, 1);

  // Background color changes
  let blue = color(12, 35, 65);
  let green = color(25, 90, 75);
  let yellow = color(150, 110, 45);

  let bgColor;

  if (t < 0.5) {
    bgColor = lerpColor(blue, green, t * 2);
  } else {
    bgColor = lerpColor(green, yellow, (t - 0.5) * 2);
  }

  background(bgColor);

  drawWater();

  // Horizontal movement
  let targetX = map(mouseX, 0, width, -80, 80);
  fishX = lerp(fishX, targetX, 0.05);

  // Vertical movement
  let targetY = map(mouseY, 0, height, -50, 50);
  fishY = lerp(fishY, targetY, 0.05);

  // Gentle floating motion
  let bobY = sin(frameCount * 0.03) * 8;

  push();
  translate(fishX, fishY + bobY);

  drawGuppy();
  drawEye(t);

  pop();
}

// -------------------------
// ANIMATED WATER
// -------------------------
function drawWater() {
  noFill();

  for (let i = 0; i < 12; i++) {
    stroke(170, 220, 230, 20);
    strokeWeight(1);

    let y = i * 65;

    beginShape();

    for (let x = 0; x < width; x += 15) {
      let wave = sin(x * 0.015 + frameCount * 0.01 + i) * 8;
      vertex(x, y + wave);
    }

    endShape();
  }
}

// -------------------------
// GUPPY FACE
// -------------------------
function drawGuppy() {
  noStroke();

  // Body
  fill(34, 114, 111);
  ellipse(190, 390, 670, 480);

  // Head
  fill(74, 164, 140);
  ellipse(280, 355, 490, 420);

  // Shadow
  fill(24, 95, 105, 110);
  ellipse(160, 470, 430, 250);

  // Scales
  for (let x = 50; x < 420; x += 30) {
    for (let y = 210; y < 570; y += 32) {
      let d = dist(x, y, 280, 355);

      if (d < 185) {
        noFill();
        stroke(155, 225, 186, 65);
        strokeWeight(1.5);
        arc(x, y, 24, 26, 0, PI);
      }
    }
  }

  // Mouth
  noFill();
  stroke(12, 66, 70);
  strokeWeight(5);
  arc(470, 460, 125, 55, 0, PI);

  // Eye socket
  noStroke();
  fill(13, 64, 70);
  circle(eyeX, eyeY, eyeSize + 35);

  fill(125, 190, 149);
  circle(eyeX, eyeY, eyeSize + 17);
}

// -------------------------
// EYE + TIME REFLECTION
// -------------------------
function drawEye(t) {
  let blue = color(12, 41, 85);
  let green = color(19, 86, 69);
  let gold = color(139, 94, 30);

  let eyeColor;

  if (t < 0.5) {
    eyeColor = lerpColor(blue, green, t * 2);
  } else {
    eyeColor = lerpColor(green, gold, (t - 0.5) * 2);
  }

  // Eye base
  noStroke();
  fill(eyeColor);
  circle(eyeX, eyeY, eyeSize);

  // Clip everything inside the eye
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.arc(eyeX, eyeY, eyeSize / 2, 0, TWO_PI);
  drawingContext.clip();

  // Curved light reflections
  noFill();
  stroke(180, 230, 240, 55);
  strokeWeight(2);

  for (let i = 0; i < 5; i++) {
    arc(
      eyeX,
      eyeY,
      eyeSize - i * 20,
      eyeSize - i * 20,
      PI * 0.2,
      PI * 1.3
    );
  }

  // Hand grows as time passes
  let handSize = lerp(0.35, 1.1, t);

  // Hand fades away near the end
  let opacity = map(t, 0.65, 1, 230, 0, true);

  // Gentle watery movement
  let wobble = sin(frameCount * 0.04) * 3;

  // Memory echoes
  for (let i = 3; i >= 1; i--) {
    push();
    translate(eyeX + wobble - i * 7, eyeY);
    scale(handSize);
    drawHand(opacity / (i + 2));
    pop();
  }

  // Main hand
  push();
  translate(eyeX + wobble, eyeY);
  scale(handSize);
  drawHand(opacity);
  pop();

  drawingContext.restore();

  // Dark eye rim
  noFill();
  stroke(0, 90);
  strokeWeight(12);
  circle(eyeX, eyeY, eyeSize - 5);

  // Glossy highlights
  noStroke();
  fill(255, 255, 240, 145);
  ellipse(eyeX - 32, eyeY - 36, 47, 20);

  fill(255, 255, 255, 60);
  ellipse(eyeX + 32, eyeY + 39, 17, 10);
}

// -------------------------
// HAND SHAPE
// -------------------------
function drawHand(alpha) {
  noStroke();
  fill(255, 220, 175, alpha);

  // Palm
  rect(-21, -3, 43, 60, 13);

  // Fingers
  rect(-20, -48, 9, 53, 5);
  rect(-9, -63, 10, 65, 5);
  rect(3, -57, 10, 60, 5);
  rect(15, -43, 9, 47, 5);

  // Thumb
  push();
  translate(-19, 9);
  rotate(-PI / 4);
  rect(-8, -6, 13, 37, 6);
  pop();
}