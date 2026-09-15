function setup(){
   createCanvas(400, 400)
   background(173,252,255)

   fill(114,0,145)
   //noStroke()

   strokeWeight(5)
   stroke(255,0,30)

}
function draw(){
   fill(255,0,0)
   stroke(0,0,255)
ellipse(mouseX,mouseY,30,50)
    
}

// function mouseDragged() {
// line(pmouseX,pmouseY,mouseX,mouseY)
// }
function keyPressed() {

    if (key === 'e') {
        background(255,0,30)
    // Code to run.
  }
   if (key === 'r') {
        background(0,0,255)
    // Code to run.
  }
}