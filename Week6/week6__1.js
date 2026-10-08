//Object Oriendted Programming

// let flower = {
//     x: 300,
//     y:200,
//     numPetals: 6,
//     petalWidth: 40,
//     petalLength: 100,
//     centerDiameter:50
// }

function setup() {

    createCanvas(windowWidth, windowHeight)
    background(0)
    angleMode(DEGREES)

   
//     translate(flower.x, flower.y)
//     for(let r = 0; r< flower.numPetals; r++){
        
//         push()
//         rotate((360/flower.numPetals) * r)
//         translate(flower.petalLength/2,0)
//         ellipse(0,0,flower.petalWidth, flower.petalLength)
        
//         pop()
//    }

   ellipse(0,0,flower.centerDiameter)
   f = new Flower(mouseX, mouseY)
   print(f)

}

function draw() {
    background(0)
    for(let i = 0; i<flowers.length; i++){
        let d = map(mouseX,0,width,-1,1)
        flowers[i].move[d]
        flowers[i].display()
    }
}
function mouseDragged(){
    // f = new Flower(mouseX, mouseY)
    // f.display()
    flowers.push(new Flower(mouseX, mouseY))
}
class Flower {
    constructor(x,y){ //setup function run once when the object is created
        this.x = x
        this.y = y 
        this.numPetals = random(3,16)
        this.petalWidth = random(20,40)
        this.petalLength = random(30,80)
        this.centerDiameter = random(30,40)
        this.centerCol = color(random(255), random(255), random(255))
        this.petalCol = color(random(255), random(255), random(255))
        this.xV = random(-5,5)
        this.yV = random(-5,5)
        this.rotations = 0
        this.rV = random(-5,5) 
    } 

    move(){
        this.x+= this.xV
        this.y+= this.yV
        this.rotations += this.rV
    }
    display(){
        push()
        translate(this.x, this.y)
        rotate(this.rotations)
        for(let r = 0; r< this.numPetals; r++){
        
        push()
        rotate((360/this.numPetals) * r)
        translate(this.petalLength/2,0)
        ellipse(0,0,this.petalWidth, this.petalLength)

        pop()
    }
    fill(this.centerCol)
    ellipse(0,0,this.centerDiameter)
    }

}