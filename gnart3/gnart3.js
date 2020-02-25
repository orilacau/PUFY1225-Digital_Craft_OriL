function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255,0,200);
  for (var i=0; i<width; i+= 19) {      
    for (var j=0; j<height; j+=19) {
      ellipse(i, j, 20, 20);
  }
 }
}