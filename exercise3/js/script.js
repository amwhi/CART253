"use strict";

/******************************************************************************
Where's Sausage Dog?
by Pippin Barr

An algorithmic version of a Where's Wally/Waldo searching game where you
need to click on the sausage dog you're searching for in amongst all
the visual noise of other animals.

Animal images from:
https://creativenerds.co.uk/freebies/80-free-wildlife-icons-the-best-ever-animal-icon-set/
******************************************************************************/

// Position and image of the sausage dog we're searching for
let targetX;
let targetY;
let targetImage;

// The ten decoy images
let decoyImage1;
let decoyImage2;
let decoyImage3;
let decoyImage4;
let decoyImage5;
let decoyImage6;
let decoyImage7;
let decoyImage8;
let decoyImage9;
let decoyImage10;

// The number of decoys to show on the screen, randomly
// chosen from the decoy images
let numDecoys = 400;

// Keep track of whether they've won
let gameOver = false;

//Define imageX + imageY
let imageX = 0.0
let imageY = 0.1

    //Define positions & speed for moving doggo
    let positionX;
    let xSpeed;
    let positionY;
    let ySpeed;

// preload()
//
// Loads the target and decoy images before the program starts
function preload() {
  targetImage = loadImage("assets/images/animals-target.png");

  decoyImage1 = loadImage("assets/images/animals-01.png");
  decoyImage2 = loadImage("assets/images/animals-02.png");
  decoyImage3 = loadImage("assets/images/animals-03.png");
  decoyImage4 = loadImage("assets/images/animals-04.png");
  decoyImage5 = loadImage("assets/images/animals-05.png");
  decoyImage6 = loadImage("assets/images/animals-06.png");
  decoyImage7 = loadImage("assets/images/animals-07.png");
  decoyImage8 = loadImage("assets/images/animals-08.png");
  decoyImage9 = loadImage("assets/images/animals-09.png");
  decoyImage10 = loadImage("assets/images/animals-10.png");
}

// setup()
//
// Creates the canvas, sets basic modes, draws correct number
// of decoys in random positions, then the target
function setup() {
  createCanvas(windowWidth,windowHeight);
  background("#ffff00");
  imageMode(CENTER);

  // Use a for loop to draw as many decoys as we need
  for (let i = 0; i < numDecoys; i++) {
    // Choose a random location on the canvas for this decoy
    let x = random(0,width);
    let y = random(0,height);

      //Creates random sizes for decoys
      let sizeX = random (2,150);

    // Generate a random number we can use for probability
    let r = random();
    // Use the random number to display one of the ten decoy
    // images, each with a 10% chance of being shown
    // We'll talk more about this nice quality of random soon enough.
    // But basically each "if" and "else if" has a 10% chance of being true
    if (r < 0.1) {
      image(decoyImage1,x,y, sizeX, sizeX);
    }
    else if (r < 0.2) {
      image(decoyImage2,x,y, sizeX, sizeX);
    }
    else if (r < 0.3) {
      image(decoyImage3,x,y, sizeX, sizeX);
    }
    else if (r < 0.4) {
      image(decoyImage4,x,y, sizeX, sizeX);
    }
    else if (r < 0.5) {
      image(decoyImage5,x,y, sizeX, sizeX);
    }
    else if (r < 0.6) {
      image(decoyImage6,x,y, sizeX, sizeX);
    }
    else if (r < 0.7) {
      image(decoyImage7,x,y, sizeX, sizeX);
    }
    else if (r < 0.8) {
      image(decoyImage8,x,y, sizeX, sizeX);
    }
    else if (r < 0.9) {
      image(decoyImage9,x,y, sizeX, sizeX);
    }
    else if (r < 1.0) {
      image(decoyImage10,x,y, sizeX, sizeX);
    }
  }

  // Once we've displayed all decoys, we choose a random location for the target
  targetX = random(0,width);
  targetY = random(0,height);

  // And draw it (because it's the last thing drawn, it will always be on top
  //Create random size for target image
  let sizeX = random(20,100);
  image(targetImage,targetX,targetY, sizeX,sizeX);


    //Displaying a yellow box with curved corners, outlined in black - top right corner
    fill("#ffff00");
    stroke(0);
    strokeWeight(5);
    rect(windowWidth-200,10,170,130,20);
    //adding a line to split bottom of box for text
    stroke(0);
    strokeWeight(5);
    line((windowWidth-200),100,(windowWidth-30) ,100);
    //Displaying text to find Dog
    textSize (20);
    strokeWeight(3);
    text('CHIEN PERDU', windowWidth-185, 125);
    //Displaying target image in top right corner, inside box
    image(targetImage,windowWidth-110,55);

    //position bouncing dog where the found dog would be
    positionX = targetX;
    positionY = targetY;
    //set bounding dog's Speed
    xSpeed = 5;
    ySpeed = 7;

}


// draw()
//
// Displays the game over screen if the player has won,
// otherwise nothing (all the gameplay stuff is in mousePressed())
function draw() {
  if (gameOver) {
    // Prepare our typography
    textFont("Helvetica");
      //changed the text to be 10th the size of the window
      textSize(windowWidth/10);
    textAlign(CENTER,CENTER);
    noStroke();
    fill(random(255));

    // Tell them they won!
    text("YOU WINNED!",width/2,height/2);


    // Draw a circle around the sausage dog to show where it is (even though
    // they already know because they found it!)
    noFill();
    stroke(random(255));
    strokeWeight(10);
    ellipse(targetX,targetY,targetImage.width,targetImage.height);


      //have dog bounce off sides of window

      //scale dog based on mouse X position
      //scale(mouseX / 900);

      image(targetImage,positionX,positionY);
      // When the doggo passes either side of the canvas , it turns around
      // add padding so it hits the edge of doggo
      if(positionX + 70 > width || positionX - 50 < 0) {
      xSpeed = xSpeed * -1;
      //positionX = positionX - xSpeed;
      }

      if(positionY + 30 > height || positionY - 30 < 0) {
      ySpeed = ySpeed * -1;
      // positionY = positionY - ySpeed;
      // positionX = positionX + xSpeed;
      }
      // We always need to be moving
      positionX = positionX + xSpeed;
      positionY = positionY - ySpeed;

      //Increase the amount of decoys with each win
      numDecoys = numDecoys + 50;

  }
}

// mousePressed()
//
// Checks if the player clicked on the target and if so tells them they won
function mousePressed() {
  // The mouse was clicked!
  // Check if the cursor is in the x range of the target
  // (We're subtracting the image's width/2 because we're using imageMode(CENTER) -
  // the key is we want to determine the left and right edges of the image.)
  if (mouseX > targetX - targetImage.width/2 && mouseX < targetX + targetImage.width/2) {
    // Check if the cursor is also in the y range of the target
    // i.e. check if it's within the top and bottom of the image
    if (mouseY > targetY - targetImage.height/2 && mouseY < targetY + targetImage.height/2) {
      gameOver = true;
    }
  }
}
