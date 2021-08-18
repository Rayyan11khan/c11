var path,boy,lb,rb,pi,bi,i;
function preload(){
  //pre-load images
  pi=loadImage("path.png");
  bi=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pi);
path.velocityY=4;
path.scale=1.2;
boy=createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("jakeRunning",bi);
lb=createSprite(0,0,100,800);
lb.visible=false;
rb=createSprite(410,0,100,800);
rb.visible=false;
}

function draw() {
  background(0);
path.velocityY=4;
boy.x=World.mouseX;
edges=createEdgeSprites();
boy.collide(edges[3]);
boy.collide(lb);
boy.collide(rb);
if(path.y>400)
path.y=height/2;
drawSprites()
}
