var x_val = 0;
var y_val = 200;
var n_height=100
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(random(mouseX),random(mouseY),250);
  
  x_val=x_val+(mouseX-x_val)* 0.04;
  y_val=y_val+(mouseY-y_val)* 0.04;
  
  fill(random(250),random(250),random(250));
  circle(x_val, y_val-(50+n_height), 20,20);
  
  if(mouseIsPressed&&n_height===50) {
     n_height = 5;
  }
  if(!mouseIsPressed) {
    n_height = 50;
  }
}