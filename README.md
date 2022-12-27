

<!-- 1. Inspect the code [0 marks]

2. Create variables for interaction [1 marks]
	- Declare four variables: `isLeft`, `isRight`, `isFalling` and `isPlummeting`
	- Initialise each of them to `false`. These variables will be used to animate your game
	 character. -->

<!-- 3. Implement left and right for keyPressed [1 marks]
	- Inside the function keyPressed write two if statements to make isLeft = true when the 'a' key is pressed and isRight = true when the 'd' key is pressed.
	- Test your conditional statements  using `console.log()` to see the values of isLeft and isRight
		- HINT: look up the difference between keyCode and key to help you decide which variable you need to use. -->

<!-- 4. Implement left and right for keyReleased [1 marks]
	- Inside the function keyReleased write two if statements to make isLeft = false when the 'a' key is released and isRight = false when the 'd' key is released, 
	- Test your conditional statements using console.log() to see the values of isLeft and isRight -->

<!-- 5. Add game character [1 marks]
	- Add your game character code from part 2 to this sketch.
	- You need to place each block of character code within the appropriate `if` statement so that when the character is animated the correct image will be drawn. -->

<!-- 6. Make the game character move left and right [2 marks]
	- In the draw function add two if statements to make the character move left when isLeft is true and move right when isRight is true
	- Test that your character moves left, right, and stops correctly when the a and s keys are pressed and released.
        - HINT: you need to use the isLeft, isRight, and gameChar_x variables. -->

<!-- 7. Make the game character jump [2 marks]
	- Add another if statement within keyPressed that checks when the 'w' key is pressed.
	- When 'w' is pressed subtract 100 from gameChar_y . This will make the character jump up in the air (don't worry about it falling just yet) -->

<!-- 8. Add gravity [2 marks]
    - Now it's time to make our game character fall down to the ground again
    - Add an if statement within the draw function to detect when the character is  jumping above the ground. 
        - HINT: gameChar_y is less than floorPos_y when this is happening.
    - As the action of the if statement you should make the character fall towards the ground. 
    - Do this by incrementing gameChar_y
    - At the same time set isFalling to true so that the falling image of the character appears
    - Finally add an else action to your conditional statement which sets isFalling to false. This will stop the falling image from appearing when your character is touching the ground again -->
<!-- 
9. Prevent double jumps [1 marks]
    - Now adjust the code inside keyPressed tp prevent the character from jumping when it already in the air.
        - HINT: isFalling is useful here  -->

Now we'll add some interactive elements to your game to give it some challenge.

<!-- 1. Make a copy of your code from part 3a [0 marks]

2. Collectable item object [1 marks]
	- Copy and paste the collectable item code from part 2b.
	- Add a property `isFound` to the object and initialise it to `false` -->

<!-- 3. Draw the collectable item [1 marks]
	- Add your collectable item code from part 2b to the `draw` function.
	- Adjust the properties of `collectable` to make the collectable item appear in a sensible place
	- Make sure the collectable is anchored correctly about its center
	- Write a conditional statement so that the collectable item is only drawn when `isFound` is `false`. -->

<!-- 4. Collectable item interaction [2 marks]
	- Write an if statement in draw with a condition that is true when the character is in range of the item. 
		- HINT: the dist function is useful here.
	- When the condition is true, set the value of `isFound` in the collectable to true.
	- The result should be that when your character comes into contact with the collectable item it disappears. -->

<!-- 5. Draw the canyon [1 marks]
	- Add your canyon code from part 2b to the `draw` function.
	- Adjust the properties of `canyon` to make the collectable item appear in a sensible place
	- Make sure the canyon is anchored correctly about its top left hand corner -->

<!-- 6. Falling down the canyon [2 marks]
	- Write a conditional statement within `draw` to detect when the character is over the canyon. 
		- HINT: use gameChar_x and the > and < operators
	- When the condition is met, set `isPlummeting` to `true`.
	- Write another conditional statement within `draw` which detects when `isPlummeting` is `true`
	- When this condition is met, increment `gameChar_y` so that the game character falls more quickly
	- Test that your character falls down the canyon when they pass over it -->

<!-- 7. Jumping over the canyon [1 marks]
	- We also want our game character to be able to jump over the canyon
	- Adjust the conditional statement which detects whether the game character is over the canyon so that it also requires the game character to be on the ground.
		HINT: use `gameChar_y` and the `>=` operator
	- Test that your character is able to jump over the canyon as well as fall down it -->

<!-- 8. Freezing controls [2 marks]
	- Once our game charcater falls down a canyon there should be no escape for them
	- In keyPressed modify your conditional statements so that the character can no longer be moved once `isPlummeting` is true.
	- Test that your character can jump over the canyon and fall down it, but can't jump out of it. --># UoL-action-game-project
