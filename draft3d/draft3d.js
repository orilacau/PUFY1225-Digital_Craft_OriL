function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background("transparent");
  //rectMode(CENTER)
  rotateX(frameCount * 0.02);
   rotateY(frameCount * 0.02);
  translate(70, 20);
  strokeWeight(1);
  fill('pink')
  //torus(30, 10);
  //big, fat
  torus(40, 20);
  rotateX(frameCount * 0.02);
   rotateY(frameCount * 0.02);
  translate(80, 5);
  strokeWeight(1);
  fill('transparent');
  torus(40, 20);
  rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
  translate(150, 50);
  strokeWeight(1);
  fill('blue');
  torus(40, 20);
 
  
  //rectMode(CENTER)
  rotateX(frameCount * 0.02);
   rotateY(frameCount * 0.02);
  translate(10, 20);
  strokeWeight(1);
  fill('red')
  //torus(30, 10);
  //big, fat
  torus(40, 20);
  rotateX(frameCount * 0.02);
   rotateY(frameCount * 0.02);
  translate(100, 50);
  strokeWeight(1);
  fill('green');
  torus(40, 20);
  rotateX(frameCount * 0.02);
   rotateY(frameCount * 0.02);
  translate(150, 100);
  strokeWeight(1);
  fill('yellow');
  torus(40, 20);

  
  //rectMode(CENTER)
  rotateX(frameCount * 0.02);
   rotateY(frameCount * 0.02);
  translate(70, 20);
  strokeWeight(1);
  fill('purple')
  //torus(30, 10);
  //big, fat
  torus(40, 20);
  rotateX(frameCount * 0.02);
   rotateY(frameCount * 0.02);
  translate(60, 50);
  strokeWeight(1);
  fill('orange');
  torus(40, 20);
  rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
  translate(150, 50);
  strokeWeight(1);
  fill('turquoise');
  torus(40, 20);
  
    rotateX(frameCount * 0.02);
   rotateY(frameCount * 0.02);
  translate(70, 20);
  strokeWeight(1);
  fill('indigo')
  //torus(30, 10);
  //big, fat
  torus(40, 20);
  rotateX(frameCount * 0.02);
   rotateY(frameCount * 0.02);
  translate(60, 50);
  strokeWeight(1);
  fill('magenta');
  torus(40, 20);
  rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
  translate(150, 50);
  strokeWeight(1);
  fill('lime');
  torus(40, 20);
 

}

