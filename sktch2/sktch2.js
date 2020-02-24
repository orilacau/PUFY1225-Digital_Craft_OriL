const textToWrite = "this is hard";
const frequency = 0.0019;
const fontSize = 100;

//auto start variables
let centerX, centerY, startX, step, amplitude;

function setup() {
	createCanvas(windowWidth, windowHeight);
	centerX = windowWidth/2;
	centerY = windowHeight/2;
	textFont('Helvetica');
	textSize(fontSize);
	
	step = 0;
	startX = centerX - textWidth(textToWrite) / 2;
}

function getY(x){
	return centerY / 2 + noise(step, x * frequency) * amplitude;
}

function draw() {
	background(255);
  fill(10);
	
	//for calculating the noise in getY function
	step += 0.01;
	amplitude = map(mouseY, 0, height, 300, 800);
	
	//draw liquid
	beginShape();
		vertex(0, height);
		for(let x = 0; x < width; x += 20){
			vertex(x, getY(x));
		}
		vertex(width, getY(width));
		vertex(width, height);
	endShape(CLOSE);
	
	//draw text
	let x = startX;
	for (var i = 0; i < textToWrite.length; i++) {
		let charWidth = textWidth(textToWrite.charAt(i));
		x += charWidth/2;
		let y = getY(x);
	
		//calculate angle
		let angle = atan2(getY(x - charWidth / 2) - getY(x + charWidth / 2), -fontSize) + PI;
		angle *= 2;//expression
		push();
			//apply angle
			translate(x, y);
				rotate(angle);
			translate(-x, -y);	
			text(textToWrite.charAt(i), x-charWidth/2, y);
		pop();
		x += charWidth/2;
	}//for
}

function mouseMoved(){
	startX = mouseX - textWidth(textToWrite) / 20;
}