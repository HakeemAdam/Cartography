var angle = 0;
var ft;
var im;
var castle;
var knife;
var lion;
var boat;
var prince;

var map1;
var map2;
var map3;
var map4;

var pointer;

function preload(){
  ft = loadFont('OldEnglishFive.ttf');
  im = loadImage('001.jpg');
  castle = loadImage('003.svg');
  knife = loadImage('004.svg');
  lion=loadImage('005.svg');
  boat = loadImage('006.svg');
  prince = loadImage('007.png');

  map1 = loadImage('004.jpg');
  map2 = loadImage('005.jpg');
  map3 = loadImage('006.jpg');
  map4 = loadImage('0001.jpg');
  pointer = loadImage('group.svg');

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


  //image(prince,100, 100, 100, 100);
  //image(knife, 200, 100, 100, 100);
  //image(lion, 200, 200, 100, 100);
  //image(boat, 100, 200, 100, 100);
  //image(prince,100, 300, 100, 100);

  image(map1, 50, 100, windowWidth * 0.2, windowHeight * 0.2);
  image(map2, 50, 300, windowWidth * 0.2, windowHeight * 0.2 );
  image(map3, 50, 500, windowWidth * 0.2, windowHeight * 0.2 );
  image(map4, 50, 700, windowWidth * 0.2, windowHeight * 0.2 );
  fill(255);
  text("FIVE", height/2+400, width/2-100);
  text("ONE",width/2,200);


	angle+=0.01

  push();
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


  image(pointer, mouseX, mouseY, 40, 32);
}
