var starImg,bgImg;
var star, starBody;
var fairy,fairyImg;
var bgmusic;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
}

function setup() {
	createCanvas(800, 750);

	fairy = createSprite(130,560,40,40);
    fairy.addAnimation("flying",fairyImg);
	fairy.scale = 0.3;



	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
  
  if(star.y > 518 && starBody.position.y > 518){

    Matter.Body.setStatic(starBody,true);

  }


  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if (keyCode === LEFT_ARROW) {
		fairy.x=fairy.x-22; 
	}
	if (keyCode === RIGHT_ARROW) {
		fairy.x=fairy.x+22; 
	}
}
