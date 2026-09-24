function setup(){
    createCanvas(800,300)
    

    background(0)
    
    rectMode(CENTER)
    angleMode(DEGREES)
    // fill(0)
    noFill()
    stroke(255)

  
}


function draw(){

    background(0)

    translate(400,150)

    let opening = map(mouseX, 0,width,0,80)
    opening = constrain(opening,0,80)

    
    //bandoneon moving part
    push()
    noStroke()
    fill(30,23,24)
    rect(0,0,300 + opening*2 ,230)
    pop()


    //Golden metal
    push()
    noStroke()
    fill(195,174,139)
    rect(0,-150,300+opening*2,50)
    rect(0,150,300+opening*2,50)
    pop()

    //button
    push()
    translate(-opening,0)
    fill(10)
    circle(-300,20,10)
    circle(-300,0,10)
    circle(-300,-20,10)
    circle(-300,40,10)
    circle(-300,-40,10)
    pop()

    push()
    translate(+opening,0)
    fill(10)
    circle(300,20,10)
    circle(300,0,10)
    circle(300,-20,10)
    circle(300,40,10)
    circle(300,-40,10)
    pop()

    

    fill(68,43,30)
    
    //wooden box outside
    push()
    translate(-opening,0)
    noStroke()
    quad(-300,-130,-200,-170,-200, 170,-300,130)
    pop()

    push()
    translate(+opening,0)
    noStroke()
    quad(300,130,200,170,200,-170,300,-130)
    pop()

    //wooden box outside (inside square)
    push()
    translate(-opening,0)
    noFill()
    stroke(185,160,132)
    strokeWeight(6)
    quad(-290, -120, -210, -160, -210, 160, -290, 120)

    pop()

    push()
    translate(+opening,0)
    noFill()
    stroke(185,160,132)
    strokeWeight(6)
    quad(290, 120, 210, 160, 210, -160, 290, -120)
    pop()

    //wooden box
    push()
    strokeWeight(11)
    stroke(195,174,139)
    rect(-200-opening,0,100,310)
    rect(200+opening,0,100,310)
    pop()


    //wooden box inside square
    push()
    noFill()
    stroke(185,160,132)
    strokeWeight(6)
    rect(-200-opening,0,50,270)
    rect(200+opening,0,50,270)
    pop()


    // Inside bright light 
    push()
    // strokeWeight(3)
    // stroke(30,23,24)
    noStroke()
    fill(195,174,139)
    noFill
    rect(-43-opening/2.5,0,15,310)
    rect(43+opening/2.5,0,15,310)
    pop()

    push()
    noStroke()
    fill(72,57,51)
    for(let i =0; i<15; i++){
        let t = i/14
        let lineX = lerp(-140-opening,140+opening,t)
        
        fill(72,57,51)
        rect(lineX,0,10,250)
        // fill(195,174,139)
        // rect(lineX,138,10,26)
        // rect(lineX,-138,10,26)
    }
    pop()


    // // //in between
    // push()
    // noStroke()
    // fill(72,57,51)
    // rect(-65,0,10,250)
    // rect(-85,0,10,250)
    // rect(-105,0,10,250)
    // rect(-125,0,10,250)
    // rect(20,0,10,250)
    // rect(0,0,10,250)
    // rect(-20,0,10,250)
    // rect(-105,0,10,250)
    // rect(-125,0,10,250)
    // rect(-145,0,10,250)
    // rect(-145,0,10,250)
    // rect(65,0,10,250)
    // rect(85,0,10,250)
    // rect(105,0,10,250)
    // rect(125,0,10,250)
    // rect(145,0,10,250)
    // pop()
    
    
}