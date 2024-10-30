//Examples taken from:https://therewasaguy.github.io/p5-music-viz/ 

function setup() {
  createCanvas(400, 400);

  //Continously adjust website size to canvas.
  windowResized();
}

function draw() {
  background(0);

  //Continously adjust canvas to screen size.
  push();
  fill(255);
  text("This is a test", width*0.46, height*0.40);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  if(windowHeight > windowWidth){
    factor = windowHeight;
    factdiv = 1080;
  }else{
    factor = windowWidth;
    factdiv = 1920;
  }
}