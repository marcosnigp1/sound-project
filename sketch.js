//Examples taken from:https://therewasaguy.github.io/p5-music-viz/ 
//Sound example taken from the following video: https://www.youtube.com/watch?v=2O3nm0Nvbi4

//Preparing variables for the sound analyzer.
let song;
let amplitude;
let button;

let w;

let fft;


function preload(){
  audio = new loadSound("media/musictest.m4a");
}


function setup() {
  createCanvas(400, 400);

  //Preparing variables for audio analyzer.
  colorMode(HSB);
  angleMode(RADIANS);
  fft = new p5.FFT(0.9, 512);

  w = width / 20; //Not necessary anymore?

  //Play audio.
  audio.loop();

  windowResized(); //Resizes window to fit into different media.
}



function draw() {
  background(0,100);
  var spectrum = fft.analyze();
  /* stroke(255); */


  //First half circle

  push();
  noFill();
  stroke(255);
  beginShape();
  translate(width/2, height/2);
  for (let i = 0; i<spectrum.length; i++){
    let angle = map(i, 0, spectrum.length,0,PI);
    let amplitude = spectrum[i];
    let r = map(amplitude, 0, 100, 100, 200);
    let x = r * cos(angle);
    let y = r * sin(angle);
    vertex(x,y);
/*  let y = map(amperes, 0, 256, height, 0);
    fill(i, 255, 255);
    rect(i*w, y, w, height-y); */
  }
  endShape(CLOSE);
  pop()


  //Second half circle

  push();
  noFill();
  stroke(255);
  beginShape();
  translate(width/2, height/2);
  for (let i = 0; i<spectrum.length; i++){
    let angle = map(i, 0, spectrum.length,0,PI);
    let amplitude = spectrum[i];
    let r = map(amplitude, 0, 100, 100, 200);
    let x = r * cos(angle)*-1;
    let y = r * sin(angle)*-1;
    vertex(x,y);
/*  let y = map(amperes, 0, 256, height, 0);
    fill(i, 255, 255);
    rect(i*w, y, w, height-y); */
  }
  endShape(CLOSE);
  pop()


  //Testing text.
  push();
  fill(255);
  text("This is a test", width*0.82, height*0.40);
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


function mousePressed(){
  if (audio.isPlaying()) {
    // .isPlaying() returns a boolean
    audio.stop();
    background(255, 0, 0);
  } else {
    audio.play();
    background(0, 255, 0);
  }
}

//Code for phone, since touchpad is registered differently.
function touchStarted(){
  if (audio.isPlaying()) {
    // .isPlaying() returns a boolean
    audio.stop();
    background(255, 0, 0);
  } else {
    audio.play();
    background(0, 255, 0);
  }
}

