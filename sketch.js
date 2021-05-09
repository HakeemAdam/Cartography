var angle = 0;
var ft;
var im;
var castle;
var knife;
var lion;
var boat;

function preload(){
  ft = loadFont('OldEnglishFive.ttf');
  im = loadImage('001.jpg');
  castle = loadImage('003.svg');
  knife = loadImage('004.svg');
  lion=loadImage('005.svg');
  boat = loadImage('006.svg');

}


function setup(){
	createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textFont(ft, 18);
  frameRate(18);
  noCursor();
  smooth();

}
function draw(){
	background(0);


  image(castle,100, 100, 100, 100);
  image(knife, 200, 100, 100, 100);
  image(lion, 200, 200, 100, 100);
  image(boat, 100, 200, 100, 100);



	angle+=0.01

  push();
  text("FIVE", height/2-100, width/2-100);
  text("ONE",width/2,200);
	translate(width/2, height/2);
	rotate(radians(frameCount %360));
  strokeWeight(3);
  stroke(255);
	line(0, 0, 200, 200);
  rotate(-angle * noise(10, 100));
  line(0,0, 250, 250);
  rotate(angle * noise(sin(30)));
  line(30, 300, 0, 0);
  pop();


  image(im, mouseX, mouseY, 40, 32);
}