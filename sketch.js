var bullet, wall

var speed, weight, thickness

var m1, m2

function setup() {
  createCanvas(1600,400);

  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)

  bullet = createSprite(50, 200, 50, 50);
  bullet.shapeColor="white"
  bullet.velocityX = speed

  wall = createSprite(1250,200,thickness,height/2)
  wall.shapeColor = "gray"

}

function draw() {
  background("black");  
  
  if(collided(bullet, wall)){

   bullet.velocityX = 0
   var damage = 0.5 * speed * weight * speed/(thickness * thickness * thickness)
   if(damage>10){
     wall.shapeColor = "red"
   }
   if(damage<10){
     wall.shapeColor = "green"
   }
  }


  drawSprites();
}