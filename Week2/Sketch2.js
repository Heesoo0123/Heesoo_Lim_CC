function setup(){
   createCanvas(windowWidth, windowHeight)
   background(100,200,255)
   
   rectMode(CENTER)
   fill(10,25,20)
   noStroke()

   strokeWeight(5)
   stroke(200,100,0)

}
function draw(){
stroke(150,100,0)
fill(100,50,255,50)
rect(mouseX,mouseY,50,50)
ellipse(mouseX,mouseY,10,10)


stroke(204,255,0)
fill(150,200,255,90)
ellipse(mouseY,mouseX,150,150)
ellipse(mouseY,mouseX,10,10)
    
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