
let sizes = [20, 50, 30, 70, 40]; // array of sizes for the circles

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(20);

  for (let i = 0; i < sizes.length; i++) { // loop through the sizes array
    let movement = sin(frameCount * 0.03 + i) * 80; // calculate movement based on sine waves(smooth oscillation between -1 and 1) and index
    //frameCount: changes continously as the animation runs
    //0.03: controls the animation speed
    //+ i: makes each circle breathe at a different time. 

    noFill();
    stroke(255);

    circle(160 + i * 20, 200, sizes[i] * 1.5 + movement*2); 
    //circle(x,y,diameter)
    //160: starting x position
    //i * 20: space between circles
    //sizes[i]*1.5: Controls how much the circle expands and shrinks relative to its original size
    //1.5 +movement*2: adds the oscillation to the size of the circle(if you remove movement, animation disappear)
  //also 
  }
}
