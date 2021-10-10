
var bacImg;
var snowImg;





function preload() {

  bacImg=loadImage("snow3.jpg");
  
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

}

function draw() {
  background(bacImg);  
  drawSprites();
}