function setup() {
  createCanvas(600, 800);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(220);

  textSize(30);         
  textAlign(CENTER);    
  fill(0);               

  text("MOM:CLEAN UP YOUR CLOTHES!", width / 2, 170);

  let foldAngle = map(mouseY, 0, height, 0, 160);
  foldAngle = constrain(foldAngle, 0, 160);

  translate(width / 2, 100);

  // 허리
  fill(100, 140, 190);
  rect(0, 0, 200, 50);

  // 오른쪽 다리
  push();

  translate(50, 25);
  rotate(-10);

  // 허벅지 중심
  translate(0, 75);
  rect(0, 0, 90, 150);

  // 무릎으로 이동
  translate(0, 75);

  // 무릎에서 접기
  rotate(foldAngle);

  // 종아리 중심
  translate(0, 75);
  rect(0, 0, 90, 150);

  pop();

  // 왼쪽 다리
  push();

  translate(-50, 25);
  rotate(10);

  translate(0, 75);
  rect(0, 0, 90, 150);

  translate(0, 75);
  rotate(-foldAngle);

  translate(0, 75);
  rect(0, 0, 90, 150);

  pop();
}