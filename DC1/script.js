let font1;
let radius = 250;
let tubeRadius = 150;
let textTexture;
let indexWord = 0;
let words = ['oriana','lacau','parsons'];

function preload() {
  // font1 = loadFont('https://fonts.googleapis.com/css?family=Sigmar+One&display=swap');
}

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
	
	// Create Textue
  textTexture = createGraphics(2*PI*radius,2*PI*tubeRadius);
	textTexture.background(255);
  textTexture.fill(255);
	textTexture.textFont('Sigmar One');
  textTexture.textSize(70);
	
	noStroke();
	changeWord();
}

function draw() {
	background(0);
	
	// Add text to the texture
	let wave = (sin(frameCount * 0.005 + (0.005) * 0.005) * 1);
	textTexture.background(0);
	textTexture.translate(0,(sin(frameCount*0.03+300)*4)*2);
	textTexture.translate(0,wave);
	for(let i = 0; i <=75; i++){
		for(let j = 0; j <=2; j++){
			textTexture.text(words[indexWord], 750*j,i*70);
		}
	}

	// Debug
	// image(textTexture, -700,0);
	
	// Create Solid
	translate(100, 0);
	push();
	rotateZ(radians(45+wave));
	push();
	texture(textTexture);
	torus(radius, tubeRadius,48,48);
	pop();
	pop();
	
}

function changeWord() {
	indexWord++;
	if(indexWord >= words.length){
		indexWord = 0;
	}
	setTimeout(changeWord, 1000)
}