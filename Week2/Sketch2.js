function setup(){
   createCanvas(windowWidth, windowHeight)
   background(100,200,255)

   fill(100,25,20)
   noStroke()

   strokeWeight(5)
   stroke(200,100,0)

}
function draw(){
ellipse(mouseX,mouseY,50,50)
ellipse(mouseX,mouseY,10,10)
fill(100,200,255)
    
}

function mouseDragged(){
  line(pmouseX,pmouseY,mouseX,mouseY)
}

function mousePressed(){
  background(0,40,50)
  }
function keyPressed(){
   if (key === 'e') {
        background(255,0,30)
  }
}