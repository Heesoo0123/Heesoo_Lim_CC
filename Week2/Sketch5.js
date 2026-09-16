let y = 0;
let x;
function setup(){
    createCanvas(windowWidth, windowHeight)
    background(0,100,255,50)

    x = width/2;
    strokeWeight(5)
}
function draw(){
    stroke(255,0,0,50)
    ellipse(x,y,10,100)

    

    y+= 10
    if(y > height - 50){
        y = -200
        x = random(0,width)
    }
    print(y)
}