var sun;
var earth;
var sunImage;
var eImage;
var angle = 2;

function preload(){
sunImage = loadImage("sun.png");
eImage = loadImage("e.png");


}

function setup() {
  createCanvas(1200,1200);

sun = createSprite(0,0);
sun.addImage("sun",sunImage);
sun.scale = 0.5;
sun.debug = true;

earth = createSprite(500,50);
earth.addImage("earth",eImage);
earth.scale = 0.2;
earth.debug = true;
}

function draw() {
  background(0);  
angleMode(DEGREES);
translate(600,600);
rotate(angle);
angle = angle+0.2;

if(sun.isTouching(earth)){
  earth.destroy();
}
if(frameCount % 1 === 0){
  sun.scale = sun.scale+0.001;
}

  drawSprites();
}