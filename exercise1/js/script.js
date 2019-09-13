// Exercise 1 - Movement
// Pippin Barr
//
// Starter code for exercise 1.
// Draws a moving square and circle that intersect
// in the middle of the canvas.

// The current position and size of the circle
let circleX;
let circleY;
let circleSize = 100;

// The current position and size of the square
let squareX;
let squareY;
let squareSize = 100;

// The current position and size of the BALL image
let img;
let imageX;
let imageY;
let imageSize = 100;

// The current position and size of the flower image
let img1;
let imageX1;
let imageY1;
let imageSize1 = 50;

//The current position and size of the donut imageX
let img2;
let imageX2;
let imageY2;
let imageSize2 = 75;

let angle = 0

// preload()
//
// Nothing here

function preload() {

}

// setup()
//img = loadImage('assets/laDefense.jpg');
// Set up the canvas, position the images, set the image mode.

function setup() {
  // Create our canvas
  createCanvas(640,640);
  //Loading images (BALL, flower, donut )
  img = loadImage('exercise1/assets/images/BALL.png');
  img1 = loadImage('exercise1/assets/images/flower.png');
  img2 = loadImage('exercise/assets/images/donut.png');
  imageMode(CENTER);


  // Start the circle off screen to the bottom left
  // We divide the size by two because we're drawing from the center
  circleX = -circleSize/2;
  circleY = height + circleSize/2;

  // Start the square off screen to the bottom right
  // We divide the size by two because we're drawing from the center
  squareX = width + squareSize/2;
  squareY = height + squareSize/2;

  // We'll draw rectangles from the center
  rectMode(CENTER);
  // We won't have a stroke in this
  noStroke();

  //Adding BALL image
  imageX = -imageSize/2;
  imageY = height/2;

//Adding flower image to stay on mouse
  imageX1 = mouseX;
  imageY1 = mouseY;

//Adding donut image

  imageX2 = 500;
  imageY2 = height/2;

}


// draw()
//
// Change the circle and square's positions so they move
// Draw the circle and square on screen

function draw() {
  // We don't fill the background so we get a drawing effect

  // Move circle up and to the right
  circleX += 1;
  circleY -= 1;
  // Make the circle transparent red
  fill(100,255,30,10);
  // Display the circle
  ellipse(circleX,circleY,circleSize,circleSize);

  // Move square up and to the left
  squareX -= 1;
  squareY -= 1;
  // Make the square transparent blue
  fill(150,50,210,10);
  // Display the square
  rect(squareX,squareY,squareSize,squareSize);



  //Display the BAlL image
  image(img, imageX, imageY, imageSize);

  //Move BALL image from left to right of screen
  imageX += 2;

  //Display flower image
  image(img1, imageX1, imageY1, imageSize1);

  //Display donut imageX
  image(img2, imageX2, imageY2, imageSize2);

  //Move donut image from top to bottom;
//  imageY2 += 3;

// have donut get bigger and smaller according to sin angle
imageSize2 (sin(angle)*imageSize);
angle =+ 0.01;

}
