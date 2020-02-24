function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background("pink");
  
  for (var x =60; x<= width-25; x += 15) {
    for (var y = 60; y<= height-25; y+= 15) {
      ellipse(x, y, 100, 100);
    }
  }
}