/*
The Game Project
Week 3
Game interaction
*/
var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var collectable;
var canyon;
var trees_x;
var treePos_y;
var cameraPosX;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
 	cameraPosX = 0;
	collectable = {
		x_pos: 75, 
		y_pos: floorPos_y-12, 
		size: 25,
		isFound: false,
	};
	canyon = {
		x_pos: 150, 
		width: 100,
	};
	trees_x = [50, 300, 425, 575, 675, 850, 1100, 1225];
	treePos_y = floorPos_y/1.3;
	clouds = [
		{
			x_pos: 200, 
			y_pos: 160, 
			size: 70,
		},
		{
			x_pos: 400, 
			y_pos: 120, 
			size: 50,
		},
		{
			x_pos: 800, 
			y_pos: 190, 
			size: 40,
		},
		{
			x_pos: 700, 
			y_pos: 100, 
			size: 40,
		},
		{
			x_pos: 1100, 
			y_pos: 100, 
			size: 40,
		}
	];
	mountains = [
		{
			x_pos: 400,
			y_pos: floorPos_y - 432,
		},
		{
			x_pos: 0,
			y_pos: floorPos_y - 432,
		},
		{
			x_pos: 600,
			y_pos: floorPos_y - 432,
		},
		{
			x_pos: 1000,
			y_pos: floorPos_y - 432,
		},
		{
			x_pos: -300,
			y_pos: floorPos_y - 432,
		}
	];
}

function draw()
{
	cameraPosX = gameChar_x-500;
	////////////////---------------BACKGROUND---------------/////////////////////////
	background(100,155,255); //fill the sky blue
	noStroke();
	fill(0,125,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	push();
	translate(-cameraPosX, 0);
	////////////////---------------CLOUDS---------------/////////////////////////
	for(var i = 0; i < clouds.length; i++) {
		fill(255, 255, 255);
		ellipse(clouds[i].x_pos, clouds[i].y_pos, clouds[i].size);
		ellipse(clouds[i].x_pos+25, clouds[i].y_pos-20, clouds[i].size+20, clouds[i].size);
		ellipse(clouds[i].x_pos+55, clouds[i].y_pos-25, clouds[i].size);
		ellipse(clouds[i].x_pos+80, clouds[i].y_pos-20, clouds[i].size);
		ellipse(clouds[i].x_pos+40, clouds[i].y_pos, clouds[i].size+15);
		ellipse(clouds[i].x_pos+70, clouds[i].y_pos, clouds[i].size);
		ellipse(clouds[i].x_pos+90, clouds[i].y_pos, clouds[i].size);
	};
	

	////////////////---------------MOUNTAINS---------------/////////////////////////
	for(var i = 0; i < mountains.length; i++) {
		fill(255,255,255);
		triangle(mountains[i].x_pos+360, mountains[i].y_pos+175, mountains[i].x_pos+320, mountains[i].y_pos+270, mountains[i].x_pos+390, mountains[i].y_pos+270);
		fill(74,60,10);
		triangle(mountains[i].x_pos+300, mountains[i].y_pos+200, mountains[i].x_pos+200, mountains[i].y_pos+432, mountains[i].x_pos+550, mountains[i].y_pos+432);
		fill(255,255,255);
		triangle(mountains[i].x_pos+300, mountains[i].y_pos+200, mountains[i].x_pos+270, mountains[i].y_pos+270, mountains[i].x_pos+375, mountains[i].y_pos+270);
		fill(48,35,18);
		triangle(mountains[i].x_pos+400, mountains[i].y_pos+200, mountains[i].x_pos+200, mountains[i].y_pos+432, mountains[i].x_pos+550, mountains[i].y_pos+432);
		fill(95,60,26);
		triangle(mountains[i].x_pos+325, mountains[i].y_pos+250, mountains[i].x_pos+200, mountains[i].y_pos+432, mountains[i].x_pos+450, mountains[i].y_pos+432);
	};

	////////////////---------------TREES---------------/////////////////////////
	for(var i = 0; i < trees_x.length; i++) {
		noStroke();
		fill(80, 49, 2);
		rect(trees_x[i], treePos_y, 30, 100);
		fill(17, 129, 5);
		triangle(
			trees_x[i]-50, treePos_y,
			trees_x[i]+15, treePos_y-50,
			trees_x[i]+80, treePos_y
		);
		triangle(trees_x[i]-40, treePos_y-20,
			trees_x[i]+15, treePos_y-70,
			trees_x[i]+70, treePos_y-20
		);
		triangle(trees_x[i]-30, treePos_y-40,
			trees_x[i]+15, treePos_y-100,
			trees_x[i]+60, treePos_y-40
		);
	};
	
	////////////////---------------CANYON---------------/////////////////////////
	noStroke();
	fill(104,64,25);
	rect(canyon.x_pos, floorPos_y, canyon.width, width - floorPos_y);
	fill(19,55,201);
	rect(canyon.x_pos + 20, floorPos_y, canyon.width - 40, width - floorPos_y);

	/////////---------------COLLECTIBLE ITEM---------------//////////////////////
	if(dist(gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos) < 20) {
		collectable.isFound = true;
	};
	if(collectable.isFound == false) {
		strokeWeight(2);
		stroke(139,0,0);
		fill(233, 227, 38);
		ellipse(collectable.x_pos, collectable.y_pos, collectable.size, collectable.size);
		stroke(75,0,130);
		point(collectable.x_pos, collectable.y_pos);
		point(collectable.x_pos-5, collectable.y_pos-5);
		point(collectable.x_pos-5, collectable.y_pos+5);
		point(collectable.x_pos+5, collectable.y_pos+5);
		point(collectable.x_pos+5, collectable.y_pos-5);
		noStroke();
	};

	/////---------------GAME CHARACTER---------------/////////////////////
	if(isLeft && isFalling) //jumping left
	{
		//head
		fill(200, 150, 150);
		ellipse(gameChar_x, gameChar_y - 55, 35);
		//body
		fill(200, 0, 0);
		rect(gameChar_x - 8, gameChar_y - 40, 13, 30);
		fill(0, 150, 0);
		rect(gameChar_x - 8, gameChar_y - 20, 13, 15);
		//legs
		stroke(0);
		strokeWeight(5);
		line(gameChar_x-5, gameChar_y - 10, gameChar_x, gameChar_y-2);
		line(gameChar_x+2, gameChar_y - 10, gameChar_x + 8, gameChar_y-2);
		//hands+eyes
		stroke(0);
		strokeWeight(5);
		line(gameChar_x - 2, gameChar_y - 35, gameChar_x - 15, gameChar_y - 40);
		line(gameChar_x + 4, gameChar_y - 35, gameChar_x + 10, gameChar_y - 20);
		point(gameChar_x - 10, gameChar_y - 60);

	}
	else if(isRight && isFalling) //jumping right
	{
		//head
		fill(200, 150, 150);
		ellipse(gameChar_x, gameChar_y - 55, 35);
		//body
		fill(200, 0, 0);
		rect(gameChar_x - 8, gameChar_y - 40, 13, 30);
		fill(0, 150, 0);
		rect(gameChar_x - 8, gameChar_y - 20, 13, 15);
		//legs
		stroke(0);
		strokeWeight(5);
		line(gameChar_x-5, gameChar_y - 10, gameChar_x - 10, gameChar_y-2);
		line(gameChar_x+2, gameChar_y - 10, gameChar_x-2, gameChar_y-2);
		//hands+eyes
		stroke(0);
		strokeWeight(5);
		line(gameChar_x - 2, gameChar_y - 35, gameChar_x - 10, gameChar_y - 20);
		line(gameChar_x+4, gameChar_y - 35, gameChar_x+15, gameChar_y - 40);
		point(gameChar_x + 10, gameChar_y - 60);

	}
	else if(isLeft) //walking left
	{
		//head
		fill(200, 150, 150);
		ellipse(gameChar_x, gameChar_y - 55, 35);
		//body
		fill(200, 0, 0);
		rect(gameChar_x - 8, gameChar_y - 40, 13, 30);
		fill(0, 150, 0);
		rect(gameChar_x - 8, gameChar_y - 20, 13, 15);
		//legs
		stroke(0);
		strokeWeight(5);
		line(gameChar_x-6, gameChar_y - 10, gameChar_x - 12, gameChar_y-2);
		line(gameChar_x+2, gameChar_y - 10, gameChar_x+2, gameChar_y-2);
		//hands+eyes
		stroke(0);
		strokeWeight(5);
		line(gameChar_x - 8, gameChar_y - 35, gameChar_x - 15, gameChar_y - 20);
		line(gameChar_x, gameChar_y - 35, gameChar_x, gameChar_y - 20);
		point(gameChar_x - 10, gameChar_y - 60);

	}
	else if(isRight) //walking right
	{
		//head
		fill(200, 150, 150);
		ellipse(gameChar_x, gameChar_y - 55, 35);
		//body
		fill(200, 0, 0);
		rect(gameChar_x - 8, gameChar_y - 40, 13, 30);
		fill(0, 150, 0);
		rect(gameChar_x - 8, gameChar_y - 20, 13, 15);
		//legs
		stroke(0);
		strokeWeight(5);
		line(gameChar_x-5, gameChar_y - 10, gameChar_x - 5, gameChar_y-2);
		line(gameChar_x+2, gameChar_y - 10, gameChar_x+7, gameChar_y-2);
		//hands+eyes
		stroke(0);
		strokeWeight(5);
		line(gameChar_x - 2, gameChar_y - 35, gameChar_x - 2, gameChar_y - 20);
		line(gameChar_x+4, gameChar_y - 35, gameChar_x+12, gameChar_y - 20);
		point(gameChar_x + 10, gameChar_y - 60);

	}
	else if(isFalling || isPlummeting) //jumping facing forwards code
	{
		//head
		fill(200, 150, 150);
		ellipse(gameChar_x, gameChar_y - 55, 35);
		//body
		fill(200, 0, 0);
		rect(gameChar_x - 13, gameChar_y - 40, 26, 30);
		fill(0, 150, 0);
		rect(gameChar_x - 13, gameChar_y - 20, 26, 15);
		//legs
		fill(0);
		rect(gameChar_x - 15, gameChar_y - 10, 5, 10);
		rect(gameChar_x + 10, gameChar_y - 10, 5, 10);
		//hands+eyes
		stroke(0);
		strokeWeight(5);
		line(gameChar_x - 13, gameChar_y - 35, gameChar_x - 21, gameChar_y - 50);
		line(gameChar_x + 13, gameChar_y - 35, gameChar_x + 21, gameChar_y - 50);
		point(gameChar_x - 5, gameChar_y - 60);
		point(gameChar_x + 5, gameChar_y - 60);

	}
	else //facing forward
	{
		//head
		fill(200, 150, 150);
		ellipse(gameChar_x, gameChar_y - 55, 35);
		//body
		fill(200, 0, 0);
		rect(gameChar_x - 13, gameChar_y - 40, 26, 30);
		fill(0, 150, 0);
		rect(gameChar_x - 13, gameChar_y - 20, 26, 15);
		//legs
		fill(0);
		rect(gameChar_x - 15, gameChar_y - 10, 10, 10);
		rect(gameChar_x + 5, gameChar_y - 10, 10, 10);
		//hands+eyes
		stroke(0);
		strokeWeight(5);
		line(gameChar_x - 13, gameChar_y - 35, gameChar_x - 18, gameChar_y - 25);
		line(gameChar_x + 13, gameChar_y - 35, gameChar_x + 18, gameChar_y - 25);
		point(gameChar_x - 5, gameChar_y - 60);
		point(gameChar_x + 5, gameChar_y - 60);
	};
	pop();

	/////////---------------CHARCTER FALLING INTO CANYON---------------
	if (gameChar_x > canyon.x_pos+5 && gameChar_x < canyon.x_pos + canyon.width-5  && gameChar_y >= floorPos_y) {
		isPlummeting = true;
		isLeft = false;
		isRight = false;
	};
	if (isPlummeting) {
		gameChar_y += 5;
	};

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
	if(isLeft == true) {
		gameChar_x -= 2;
	};
	if(isRight == true) {
		gameChar_x += 2;
	};
	//gravity
	if(gameChar_y < floorPos_y) {
		isFalling = true;
		gameChar_y +=1.5;
	}
	else {
		isFalling = false;
	};
}

function keyPressed()
{
	// if statements to control the animation of the character when keys are pressed.
	if (!isPlummeting && keyCode == 65) {
		console.log("going left")
		isLeft = true;
	};
	if (!isPlummeting && keyCode == 68) {
		isRight = true;
	};
	// jumping keyCode is 87 + jumping only once and cannot double jump or when falling down the canyon
	if (!isPlummeting && keyCode == 87 && isFalling == false) {
		gameChar_y -= 100;
	};
}

function keyReleased()
{
	// if statements to control the animation of the character when keys are released.
	if (keyCode == 65) {
		isLeft = false;
	};
	if (keyCode == 68) {
		isRight = false;
	};
}
