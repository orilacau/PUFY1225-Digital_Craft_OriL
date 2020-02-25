function setup () {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  noFill();
  for (var i=10; i<600; i+=10) {
    ellipse (width/2, height/2, i, i);
  }
  
  }