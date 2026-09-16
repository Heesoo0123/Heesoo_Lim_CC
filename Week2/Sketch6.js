// // Example of color changing with mouseY
let col, col1, col2

function setup(){
    
    createCanvas(windowWidth, windowHeight)
    rectMode(CENTER);

    col1 = color(0,100,255);
    col2 = color(255,100,0);
    background(0)
    noStroke();

}
function draw(){

    let val = map(mouseY,0,height,0,1)
    let ellipseHeight = 30;
    let randomWidth = random(10,300);

    if (val > 0.5){
        ellipseHeight = map(val,0.5,1,10,random(10,200));
    }

    
    col = lerpColor(col1, col2,val)
    fill(col)

    rect(width/2, mouseY, width , 40);
    
    col = lerpColor(col2, col1,val)
    fill(col)

    ellipse(width/2, mouseY, randomWidth , ellipseHeight)
}
