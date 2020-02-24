  //this set up function only gets run once
function setup() {
  createCanvas(400, 400);
}

//will continually run
function draw() {
  background("white");
  //ellipse (x position, y position, width, height);
  stroke(6);
  //delete later but for now so u can see circle
  ellipse (100, 100, 50, 50);
  stroke(6);
  rectMode(CENTER);
  fill("red")
  rect(150, 150, 150, 150);
  strokeWeight (5);
  fill("gray");
  // 15-17: size,outline size, color
  rect( 50, 50, 70, 40);
  rect( 135, 50, 90, 40);
  
}