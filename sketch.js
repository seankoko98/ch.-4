// global variables 
var x = 25;
var h = 20;
var y = 25; 

// Setup code goes here
function setup() {
  createCanvas(480, 120);
 }


// Draw code goes here
function draw() {
  background(204);
  x = 20;
  rect(x, y, 300, h);
  x = x + 100;
  rect(x, y + h, 300, h);
  x = x - 250;
  rect(x, y + h*2, 300, h);
}