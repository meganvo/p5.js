var xpos = 200;
var ypos = 200;

function setup() { //happens once
	createCanvas(1000, 1000);
	background(255);
}

function draw() {
  fill(
    random() * 255,
    random() * 255,
    random() * 255
    );
  noStroke(255);
  strokeWeight(8);
  ellipse (random()*1000, random()*1000, 10, 10);
}


