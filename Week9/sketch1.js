let handPose;
let video;
let hands = [];

let tileSize = 20; // size of each square in pixels
let spread = 1;    // 1 = normal picture, bigger = squares further apart


async function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  rectMode(CENTER);

  handPose = await ml5.handPose();

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  handPose.detectStart(video, gotHands);
}

function gotHands(results) {
  hands = results;
}

function draw() {
  if (!video) return;
  background(0);

  // 1. ml5: measure the distance between thumb and index finger
  let targetSpread = 1;
  if (hands.length > 0) {
    let thumb = hands[0].thumb_tip;
    let index = hands[0].index_finger_tip;
    let d = dist(thumb.x, thumb.y, index.x, index.y);

    // pinch distance 20–250 px becomes a spread of 1–3
    targetSpread = map(d, 20, 250, 1, 3, true);
  }

  // ease toward the target so the movement is smooth, not jumpy
  spread = lerp(spread, targetSpread, 0.2);

  // 2. Pixel array: read the webcam's pixels
  video.loadPixels();
  if (video.pixels.length === 0) return;

  noStroke();
  let amount = map(spread, 1, 3, 0, 1, true);

    // 3. Go through the video one square at a time
  for (let y = 0; y < height; y += tileSize) {
    for (let x = 0; x < width; x += tileSize) {
      // center of this square in the original video
      let cx = x + tileSize / 2;
      let cy = y + tileSize / 2;

      // read the color of the pixel at the square's center
      let i = (cy * width + cx) * 4;
      let r = video.pixels[i];
      let g = video.pixels[i + 1];
      let b = video.pixels[i + 2];

      // brightness of this square: average of red, green, blue
      let bright = (r + g + b) / 3;

      // the two-tone version: bright areas → pink, dark areas → blue
      let newR = bright;
      let newG = bright * 0.3;
      let newB = 255 - bright;

      // blend from the original color to the two-tone color
      r = lerp(r, newR, amount);
      g = lerp(g, newG, amount);
      b = lerp(b, newB, amount);

      // push the square away from the canvas center
      let newX = width / 2 + (cx - width / 2) * spread;
      let newY = height / 2 + (cy - height / 2) * spread;

      fill(r, g, b);
      rect(newX, newY, tileSize - 1, tileSize - 1);
    }
  }
}