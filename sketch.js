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

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
	var isLeft = false;
	var isRight = false;
	var isFalling = false;
	var isPlummeting = false;
	collectable = {
		x_pos: 75, 
		y_pos: 430, 
		size: 25,
		isFound: false,
	};
	canyon = {
		x_pos: 150, 
		width: 100,
	};
}

function draw()
{
	/////////////////////////////////////BACGROUND/////////////////////////////////////
	background(100,155,255); //fill the sky blue
	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	/////////////////////////////////////CANYON/////////////////////////////////////
	noStroke();
	fill(0,0,139);
	rect(canyon.x_pos, floorPos_y, canyon.width, width - floorPos_y);
	
	//CHARCTER FALLING INTO CANYON
	if (gameChar_x > canyon.x_pos && gameChar_x < canyon.x_pos + canyon.width  && gameChar_y >= floorPos_y) {
		isPlummeting = true;
	};
	if (isPlummeting) {
		gameChar_y += 5;
	};

	/////////////////////////////////////COLLECTIBLE ITEM/////////////////////////////////////
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

	/////////////////////////////////////GAME CHARACTER/////////////////////////////////////
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
		line(gameChar_x+4, gameChar_y - 35, gameChar_x + 10, gameChar_y - 20);
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
	}

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
