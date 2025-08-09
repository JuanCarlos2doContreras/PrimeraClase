var x;

function setup() {
  createCanvas(400, 400);
  background(0,0,255);
}

function draw() {
  strokeWeight(0);
  x=random(10,100);
  fill(255,x);
  ellipse(mouseX,mouseY,x,x);
  frameRate(x);
}
