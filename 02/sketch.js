var ypos = 200;
var xpos = 80;
var xstep = 60;

function setup() {
    createCanvas(400, 400);
    noLoop();
}

function draw() {
    background(255);
    fill (50);
  	noStroke();

  	for (var i = 0; i < 5; i++) {
  		ellipse(xpos + (xstep * i), ypos, 40, 40);
  	}
}


/*run contents of loop 5 times
ellipse (80 + (60 * 0), 200,40)
ellipse (80 + (60 * 1), 200,40)
ellipse (80 + (60 * 2), 200,40)
ellipse (80 + (60 * 3), 200,40)
ellipse (80 + (60 * 4), 200,40)/*