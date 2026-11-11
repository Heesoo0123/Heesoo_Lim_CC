
let video;
let handPose;
let hands = [];

async function setup() {
  createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  handPose = await ml5.handPose();
  handPose.detectStart(video, gotHands);
}

function draw() {
  background(220);
  image(video, 0, 0);

  if (hands.length > 0) { // Check if any hands are detected
    let fingerX = hands[0].index_finger_tip.x;
    let fingerY = hands[0].index_finger_tip.y;

    fill(255, 0, 0);
    noStroke();
    circle(fingerX, fingerY, 30);
  }
}

function gotHands(results) {
  hands = results;
}
