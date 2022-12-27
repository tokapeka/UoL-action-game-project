/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.

WARNING: Do not get too carried away. If you're shape takes more than 15 lines of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here
	fill(255, 255, 255);
	ellipse(200, 160, 50, 50);
	ellipse(225, 140, 70, 50);
	ellipse(255, 135, 50, 50);
	ellipse(280, 140, 50, 50);
	ellipse(240, 160, 50, 50);
	ellipse(270, 160, 50, 50);
	ellipse(290, 160, 50, 50);
	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	//... add your code here
	
	fill(255,255,255);
	triangle(660, 175, 620, 270, 690, 270);
	fill(74,60,10);
	triangle(600, 200, 500, 432, 750, 432);
	fill(255,255,255);
	triangle(600, 200, 570, 270, 645, 270);
	fill(48,35,18);
	triangle(700, 200, 500, 432, 850, 432);
	fill(95,60,26);
	triangle(625, 250, 500, 432, 750, 432);
	

	noStroke();
	fill(255);
	text("mountain", 500, 256);


	//3. a tree
	//... add your code here
	
	fill(80, 49, 9);
	rect(880, 380, 30, 100);

	fill(17, 129, 5);
	triangle(830, 380, 895, 330, 960, 380);
	fill(17, 129, 5);
	triangle(840, 360, 895, 310, 950, 360);
	fill(17, 129, 5);
	triangle(850, 340, 895, 280, 940, 340);

	noStroke();
	fill(255);
	text("tree", 840, 400);
	

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here
	
	strokeWeight(6);
	fill(38, 116, 233);
	beginShape();
	vertex(175, 432);
	vertex(200, 432);
	vertex(195, 480);
	vertex(225, 500);
	vertex(220, 550);
	vertex(275, 500);
	vertex(200, 600);
	endShape();
	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here
	fill(233, 227, 38);
	ellipse(450, 420, 20, 20);
	noStroke();
	fill(255);
	text("collectable item", 400, 400);
}
