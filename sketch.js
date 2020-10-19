var car,wall;
var speed,weight;
function setup(){
  createCanvas(1600,400);
 car= createSprite(50, 200, 50, 50);
 wall=createSprite(1500,200,60,height/2);
 speed=Random(55,90);
 weight=Random(400,1500);
}

function draw() {
  background(255,255,255); 
   car.velocityX=speed;
   if(wall.x-car.x<(car.width=wall.width/2)){
     car.velocityX=0;
     var deformation=0.5*weight*speed*speed/22500;
     if(deformation >180){
       car.shapeColor=red(255,0,0);
     }
     if(deformation<180 && deformation>100){
       car.shapeColor=yellow(230,230,0);
     }
     if(deformation<100){
       car.shapeColor=green(0,255,0);
     }
   }
  drawSprites();
}