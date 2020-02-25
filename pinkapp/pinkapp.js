function setup () {
  createCanvas(600, 600);
  //size of the canvas
}

function draw() {
  background("pink");
  noFill();
  //circles but notfilled so it can make the lines
  for (var i=10; i<900; i+=10) {
    // closest to the middle, greater than is the ammount it goes to the edge, ten is the space between
    ellipse (width/2, height/2, i, i);
  }  
}