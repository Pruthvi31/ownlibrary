var fixedRect, movingRect;
var g1, g2, g3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "red";
  movingRect.debug = true;

 

  g1 = createSprite(100, 100, 50, 80);
  g1.shapeColor = "green";

  g2 = createSprite(400, 200, 50, 80);
  g2.shapeColor = "blue";

  g3 = createSprite(300, 100, 50, 80);
  g3.shapeColor = "green";

  movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
  //g1.velocityY = +5;
  g2.velocityY = +5;
  //g3.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,g2)
  
  drawSprites();
}


