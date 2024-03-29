/******************************************************

Game - The Artful Dodger
Pippin Barr

A simple dodging game with keyboard controls

******************************************************/

// The position and size of our avatar circle
let avatarX;
let avatarY;
let avatarSize = 50;

// The speed and velocity of our avatar circle
let avatarSpeed = 10;
let avatarVX = 0;
let avatarVY = 0;

// The position and size of the enemy circle
let enemyX;
let enemyY;
let enemySize = 50;

// The speed and velocity of our enemy circle
let enemySpeed = 5;
let enemyVX = 5;

      //Define images for player and enemy
      let avatarImage;
      let enemyImage;

      //Defined variables for when the enemy starts at the left or right side of screen
      let left = 0;
      let right = 500 + avatarSize;
      let sides = [left, right];

// How many dodges the player has made
let dodges = 0;

function preload() {

      //Loading enemy and avatar images
      enemyImage = loadImage('../exercise2/assets/images/PACMAN.png');
      avatarImage = loadImage('../exercise2/assets/images/MOUSE.png');
}

// setup()
//
// Make the canvas, position the avatar and anemy
function setup() {
  // Create our playing area
  createCanvas(500,500);

  // Put the avatar in the centre
  avatarX = width/2;
  avatarY = height/2;

  // Put the enemy to the left at a random y coordinate within the canvas
  enemyX = 0;
  enemyY = random(0,height);

  // No stroke so it looks cleaner
  noStroke();
}

// draw()
//
// Handle moving the avatar and enemy and checking for dodges and
// game over situations.
function draw() {

  // Default the avatar's velocity to 0 in case no key is pressed this frame
  avatarVX = 0;
  avatarVY = 0;

  // Check which keys are down and set the avatar's velocity based on its
  // speed appropriately



  // Left and right
  if (keyIsDown(LEFT_ARROW)) {
    avatarVX = -avatarSpeed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    avatarVX = avatarSpeed;
  }

  // Up and down (separate if-statements so you can move vertically and
  // horizontally at the same time)
  if (keyIsDown(UP_ARROW)) {
    avatarVY = -avatarSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    avatarVY = avatarSpeed;
  }

  // Move the avatar according to its calculated velocity
  avatarX = avatarX + avatarVX;
  avatarY = avatarY + avatarVY;

  // The enemy always moves at enemySpeed

  // Update the enemy's position based on its velocity
  enemyX = enemyX + enemyVX;

  // Check if the enemy and avatar overlap - if they do the player loses
  // We do this by checking if the distance between the centre of the enemy
  // and the centre of the avatar is less that their combined radii
  if (dist(enemyX,enemyY,avatarX,avatarY) < enemySize/2 + avatarSize/2) {
    // Tell the player they lost
    console.log("YOU LOSE!");
    // Reset the enemy's position
    enemyX = random(-enemySize || 500 + enemySize);
    enemyY = random(0,height);

        //Reset enemy's speed + size
        enemyVX = 5;
        enemySpeed = 5;
        enemySize = 50;
        //Reset avatar's size
        avatarSize = 50;
    // Reset the avatar's position
    avatarX = width/2;
    avatarY = height/2;
    // Reset the dodge counter
    dodges = 0;
    //Reset Background
    background (255);

  }

  // Check if the avatar has gone off the screen (cheating!)
  if (avatarX < 0 || avatarX > width || avatarY < 0 || avatarY > height) {
    // If they went off the screen they lose in the same way as above.
    console.log("YOU LOSE!");
    enemyX = 0;
    enemyY = random(0,height);
        //Reset enemy's speed + size
        enemyVX = 5;
        enemySize = 50;
        enemySpeed = 5;
    avatarX = width/2;
    avatarY = height/2;
    dodges = 0;

        //Reset avatar's size
        avatarSize = 50;
        //Reset Background
        background(255);
  }

  // Check if the enemy has moved all the way across the screen
  if (enemyX > width) {
    // This means the player dodged so update its dodge statistic
    dodges = dodges + 1;
    // Tell them how many dodges they have made
    console.log(dodges + " DODGES!");
    // Reset the enemy's position to the left at a random height
    enemyX = 0;
    enemyY = random(0,height);

        // The enemy increases speed and size after each dodge
        enemyVX = enemySpeed;
        enemySpeed = enemySpeed + 2;
        enemySize = enemySize + 5;

        //Changing avatar's size
        avatarSize = avatarSize - 2;

  }

        //Display the number of successful dodges in the top right hand corner
        fill(0);
        textSize(30);
        textAlign(450,450);
        textFont('Georgia');
        text(dodges,450,25,30,30);


        // Draw the player as a mouse
        image(avatarImage,avatarX,avatarY,avatarSize,avatarSize);

        // Draw the enemy as a pacman
        image(enemyImage,enemyX,enemyY,enemySize,enemySize);

}
