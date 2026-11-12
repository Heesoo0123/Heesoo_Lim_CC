let handPose;
let video;
let hands = [];

let tileSize = 20; 
let spread = 1;    


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


  let targetSpread = 1;
  if (hands.length > 0) {
    let thumb = hands[0].thumb_tip;
    let index = hands[0].index_finger_tip;
    let d = dist(thumb.x, thumb.y, index.x, index.y);

   
    targetSpread = map(d, 20, 250, 1, 3, true);
  }


  spread = lerp(spread, targetSpread, 0.2);


  video.loadPixels();
  if (video.pixels.length === 0) return;

  noStroke();
  let amount = map(spread, 1, 3, 0, 1, true);

  for (let y = 0; y < height; y += tileSize) {
    for (let x = 0; x < width; x += tileSize) {
      
      let cx = x + tileSize / 2;
      let cy = y + tileSize / 2;

   
      let i = (cy * width + cx) * 4;
      let r = video.pixels[i];
      let g = video.pixels[i + 1];
      let b = video.pixels[i + 2];

   
      let bright = (r + g + b) / 3;

      let newR = bright;
      let newG = bright * 0.3;
      let newB = 255 - bright;

   
      r = lerp(r, newR, amount);
      g = lerp(g, newG, amount);
      b = lerp(b, newB, amount);

    
      let newX = width / 2 + (cx - width / 2) * spread;
      let newY = height / 2 + (cy - height / 2) * spread;

      fill(r, g, b);
      rect(newX, newY, tileSize - 1, tileSize - 1);
    }
  }
}