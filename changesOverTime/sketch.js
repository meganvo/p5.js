var xpos = 0;
var ypos = 0;

function setup() { //happens once
	createCanvas(400, 400);
}

function draw() {
  background(50);
  noFill();
  stroke(255);
  strokeWeight(8);
  ellipse(
    200 + sin(xpos) * 100, 
    200 + sin(ypos) * 100,
    45, 45);
  xpos += 0.05;
  ypos += 0.04;
}


