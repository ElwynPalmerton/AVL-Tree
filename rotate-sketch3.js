function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);


}

let degrees = 0;
let rotationSpeed = 1;

function draw() {
  background(50, 50, 100);
  strokeWeight(1);
  noStroke();
  fill(250, 100, 50);

  push();
  translate(100, 100);
  scale(4, 1);
  degrees += rotationSpeed;
  rotate(degrees);
  rect(0, 0, 100, 50)
  pop();

  translate(275, 275)
  fill(10, 100, 250)
  rect(0, 0, 100, 100)


}