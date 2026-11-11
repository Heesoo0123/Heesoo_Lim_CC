let movie;
let square;    // a square buffer that holds the cropped video
let cols = 4;  // how many squares across

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);

  movie = createVideo('skateboard.mp4');
  movie.size(640, 360);
  movie.elt.muted = true;
  movie.loop();
  movie.hide();

  // an offscreen square "mini canvas"
  square = createGraphics(360, 360);
}

function draw() {
  background(0);

  // 1. crop the middle of the video into the square buffer
  //    (video is 640 wide, square is 360, so shift left by 140 to center it)
  square.image(movie, -(640 - 360) / 2, 0, 640, 360);

  // 2. mouse controls the number of squares (1 to 8 across)
  cols = floor(map(mouseX, 0, width, 1, 9, true));
  let tile = width / cols;
  let rows = ceil(height / tile);

  // 3. fill the screen with squares
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let x = col * tile;
      let y = row * tile;

      push();
      if ((row + col) % 2 === 1) {
        // mirror every other square
        translate(x + tile, y);
        scale(-1, 1);
        image(square, 0, 0, tile, tile);
      } else {
        image(square, x, y, tile, tile);
      }
      pop();
    }
  }
}

function mousePressed() {
  movie.loop(); // backup in case autoplay was blocked
}