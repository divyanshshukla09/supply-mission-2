var helicopterIMG, helicopterSprite, packageSprite, package1Sprite, package2Sprite, packageIMG;
var packageBody, packageBody1, packageBody2, ground;
var rect1, rect2, rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	package1Sprite = createSprite(480, 80, 10, 10);
	package1Sprite.addImage(packageIMG)
	package1Sprite.scale = 0.2

	package2Sprite = createSprite(330, 80, 10, 10);
	package2Sprite.addImage(packageIMG)
	package2Sprite.scale = 0.2



	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255);

	rect1 = createSprite(500, 615, 30, 100);
	rect1.shapeColor = color("cyan");
	rect2 = createSprite(320, 615, 30, 100);
	rect2.shapeColor = color("cyan");
	rect3 = createSprite(410, 675, 210, 30);
	rect3.shapeColor = color("cyan");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width / 2, 200, 5, { restitution: 0, isStatic: true });
	World.add(world, packageBody);

	packageBody1 = Bodies.circle(width / 2, 200, 5, { restitution: 0, isStatic: true });
	World.add(world, packageBody1);

	packageBody2 = Bodies.circle(width / 2, 200, 5, { restitution: 0, isStatic: true });
	World.add(world, packageBody2);


	//Create a Ground
	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(world, ground);


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	
	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y

	package1Sprite.x = packageBody.position.x
	package1Sprite.y = packageBody.position.y

	package2Sprite.x = packageBody.position.x
	package2Sprite.y = packageBody.position.y


	
	
	drawSprites();

}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false)
	
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody1, false)
	
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody2, false)
	
	}
}



