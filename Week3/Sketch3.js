let r = 0

let w, h;
let numRects = 10;

function setup(){

    createCanvas(800,800)

    w = width/numRects

    h = height/numRects

    //rectMode(CENTER)
    angleMode(DEGREES)

    background(0)
    fill(100)
    strokeWeight(2)
    stroke(255)

    // frameRate(2)


}

function draw(){

    background(0)

    translate(w/2,h/2)

//     for(let x = 0; x<numRects; x++){

//         for(let y = 0; y<numRects; y++){

//         push()
//         translate( w * x, h * y)
//         rotate(r*y)
//         rect(0,0,10 + y*2,h/2);
//         pop()

//    }

// }
 
// for(let x = 0; x<numRects; x++){

//         for(let y = 0; y<numRects; y++){

//             for(let i = 0; i<5; i++){

//         push()
//         translate( w * x, h * y)
//         rect(0,0,w-3*i,h-10*1);
//         pop()

//    }

// }

for(let x = 0; x<numRects; x++){

        for(let y = 0; y<numRects; y++){

            for(let i = 0; i<5; i++){

    let d = dist(mouseX,mouseY, w * x, h * y)

    d = map(d,0,1000,0,1);
    d = constrain(d,0,1);
    
        push();
        translate( w * x, h * y)
        rect(0,0,w*d,h*d);
        pop()

   }

}


r++
}
}