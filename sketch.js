//Examples taken from:https://therewasaguy.github.io/p5-music-viz/ 
//Sound example taken from the following video: https://www.youtube.com/watch?v=2O3nm0Nvbi4

//Preparing variables for the sound analyzer.
let song;
let amperes;
let button;

let fft;

function preload(){
  audio = new loadSound("media/musicstest.mp3");
}


function setup() {
  createCanvas(400, 400);

  //Continously adjust website size to canvas.
  windowResized();
  fft = new p5.FFT(0.5, 256);

  //Play audio.
  audio.loop();
}

function draw() {
  background(0);

  var spectrum = fft.analyze();
  stroke(255);
  for (let i = 0; i<spectrum.length; i++){
    let amperes = spectrum[i];
    let y = map(amperes, 0,1, height, 0);
    line(i, height, i, y);
  }

  //Testing text.
  push();
  fill(255);
  text("This is a test", width*0.42, height*0.40);
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
