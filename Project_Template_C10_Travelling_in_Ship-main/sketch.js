var ship,ship_moving
var sea,seaImg 




function preload(){
ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

seaImg = loadImage("sea.png")

}

function setup(){
  createCanvas(400,400);
  


  sea = createSprite(200,200)
  sea.addImage("sea",seaImg)
  sea.x = sea.width/2
  sea.velocityX = -2



  ship = createSprite(50,325)
  ship.addAnimation("moving",ship_moving)
ship.scale = 0.1  
}

function draw() {
  background("blue");
 
  
  if(sea.x < 0)
 {
   sea.x = sea.width/2
 }
 drawSprites()
}