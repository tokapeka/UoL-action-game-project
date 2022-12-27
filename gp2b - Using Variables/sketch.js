/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/1.9;
	treePos_y = floorPos_y/1.3;

	canyon = {
		x_pos: 75, 
		width: 100,
	}

	collectable = {
		x_pos: 75, 
		y_pos: 430, 
		size: 25,
	}

	cloud = {
		x_pos: 200, 
		y_pos: 160, 
		size: 50,
	}

	mountain = {
		x_pos: 1,
		y_pos: floorPos_y - 432,
	}
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground

	//------MOUNTAIN
	fill(255,255,255);
	triangle(mountain.x_pos+360, mountain.y_pos+175, mountain.x_pos+320, mountain.y_pos+270, mountain.x_pos+390, mountain.y_pos+270);
	fill(74,60,10);
	triangle(mountain.x_pos+300, mountain.y_pos+200, mountain.x_pos+200, mountain.y_pos+432, mountain.x_pos+550, mountain.y_pos+432);
	fill(255,255,255);
	triangle(mountain.x_pos+300, mountain.y_pos+200, mountain.x_pos+270, mountain.y_pos+270, mountain.x_pos+375, mountain.y_pos+270);
	fill(48,35,18);
	triangle(mountain.x_pos+400, mountain.y_pos+200, mountain.x_pos+200, mountain.y_pos+432, mountain.x_pos+550, mountain.y_pos+432);
	fill(95,60,26);
	triangle(mountain.x_pos+325, mountain.y_pos+250, mountain.x_pos+200, mountain.y_pos+432, mountain.x_pos+450, mountain.y_pos+432);


	//---TREE
	noStroke();
	fill(80, 49, 9);
	rect(treePos_x, treePos_y, 30, 100);

	fill(17, 129, 5);
	triangle(treePos_x-50, treePos_y, treePos_x+15, treePos_y-50, treePos_x+80, treePos_y);
	triangle(treePos_x-40, treePos_y-20, treePos_x+15, treePos_y-70, treePos_x+70, treePos_y-20);
	triangle(treePos_x-30, treePos_y-40, treePos_x+15, treePos_y-100, treePos_x+60, treePos_y-40);

	//---CANYON
	noStroke();
	fill(0,0,139);
	rect(canyon.x_pos, floorPos_y, canyon.width, width - floorPos_y);

	///---CLOUD
	fill(255, 255, 255);
	ellipse(cloud.x_pos, cloud.y_pos, cloud.size);
	ellipse(cloud.x_pos+25, cloud.y_pos-20, cloud.size+20, cloud.size);
	ellipse(cloud.x_pos+55, cloud.y_pos-25, cloud.size);
	ellipse(cloud.x_pos+80, cloud.y_pos-20, cloud.size);
	ellipse(cloud.x_pos+40, cloud.y_pos, cloud.size);
	ellipse(cloud.x_pos+70, cloud.y_pos, cloud.size);
	ellipse(cloud.x_pos+90, cloud.y_pos, cloud.size);

	//-----COLLECTIBLE ITEM
	strokeWeight(2);
	stroke(139,0,0);
	fill(233, 227, 38);
	ellipse(collectable.x_pos, collectable.y_pos, collectable.size, collectable.size);
	stroke(75,0,130);
	point(collectable.x_pos, collectable.y_pos);
	noStroke();

	//---CHARACTER
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

function mousePressed()
{
	gameChar_x = mouseX;
	gameChar_y = mouseY;


}
