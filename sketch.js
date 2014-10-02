
var trailX = [0, 0, 0, 0, 0, 0, 0];

var trailY = [0, 0, 0, 0, 0, 0, 0];


function setup() {
  createCanvas(800, 600);
  
  noFill();

  stroke(235, 0, 0);

}

function draw () 
{

	background(0);
	ellipse(mouseX, mouseY, 100, 100)

	trailX[0] = (mouseX + trailX[0] *9) /10;
	trailY[0] = (mouseY + trailY[0] *9) /10;
	ellipse(trailX[0], trailY[0], 80, 80);

	for ( var i = 1; i < 8; i = i + 1)
	{

	trailX[i] = (trailX[i-1] + trailX[i] *9) / 10;
	trailY[i] = (trailY[i-1] + trailY[i] *9) / 10;
	ellipse(trailX[i], trailY[i], 80, 80);

	}
}

