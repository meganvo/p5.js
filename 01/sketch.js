function setup() {
	createCanvas(1000, 1000);
}

function draw() {
	background(200);
	translate(200, 100); 
	for (var x = 20; x < 500; x = x+150){
		for (var y = 20; y < 500; y = y+150){
			push();
			translate(x, y);			
	  		drawSmiley();
			pop();
		}	
	}	
}

function drawSmiley() {
	noStroke();
	textSize(40);
	strokeWeight(0);
	fill(0);
	text("😞", 10, 90);
	fill(248,231,28);
	scale(.2, .2);
	rotate(radians(frameCount));
	ellipse(250, 250, 350, 350);
	fill(0);
	ellipse(300, 200, 30, 80);
	ellipse(200, 200, 30, 80);
	noFill()
	stroke(25);
	strokeWeight(8);
	bezier(150, 300, 150, 400, 350, 400, 350, 300);
}