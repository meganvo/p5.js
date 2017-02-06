//EXERCISE: Write a sketch that draws a rectangle. If the mouse position is inside the rectangle, draw the rectangle with a blue fill. If the mouse position is outside the rectangle, draw the rectangle with a red fill.
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);
  noStroke();
  rect(100, 100, 200, 200);
  if ((mouseY >= 100) && //if the mouse height is greater than or equal to 100 AND ALSO
      (mouseY <= 300) && //if the mouse height is greater than or equal to 300 AND ALSO
      (mouseX >= 100) && //if the mouse width is greater than or equal to 100 AND ALSO
      (mouseX <= 300)) { //if the mouse width is greater than or equal to 300
   fill(74,144,226); //fill rectangle blue
  }
  else { //if the above is not true
    fill(208,2,27); //fill rectangle red
  }
}
