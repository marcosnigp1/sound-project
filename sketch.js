//Examples taken from:https://therewasaguy.github.io/p5-music-viz/ 
//Sound example taken from the following video: https://www.youtube.com/watch?v=2O3nm0Nvbi4

//Preparing variables for the sound analyzer.
let audio;
let fft;

//Interactable UI
let ui;
let visualizer;

function preload(){
  audio = new loadSound("media/musictest.m4a");
}

function setup() {
  createCanvas(400, 400);

  //Preparing variables for audio analyzer.
  colorMode(HSB);
  angleMode(RADIANS);
  fft = new p5.FFT(0.9, 512);
  visualizer = new Visualizer();

  //Play audio.
  //audio.loop();

  windowResized(); //Resizes window to fit into different media.

  //Preparing UI
  ui = new UI();
}

function draw() {
  background(0,200);

  //Get spectrum and visualize it. Also, check current song chapter.
  let spectrum = fft.analyze();
  visualizer.display(spectrum);
  visualizer.check_chapter();

  //Update UI values and display them. This is a procedure which needs to be done constantly since it is a fixed position.
  ui.update_values(width*0.30, height*0.80, width*0.40, height*0.01)
  ui.display();

}


function mousePressed(){
  if (mouseX > ui.position.x*1.52 && mouseX < ui.position.x*1.82 && mouseY > ui.position.y*1.05 && mouseY < ui.position.y*1.15){
    if (audio.isPlaying()){
      audio.pause();
    } else {
      audio.play();
    }
  }

  ///If mouse is clicked inside the bar, check current position and then move the song to it.
  if (mouseX > ui.position.x && mouseX < ui.position.x+ui.w && mouseY > ui.position.y && mouseY < ui.position.y + ui.h){
    let jump_to_time = map(mouseX, ui.position.x, ui.position.x + ui.w, 0,ui.song_time_total);
    audio.jump(jump_to_time);
  }

  //If mouse clicked previous chapter button.
  if (mouseX > ui.position.x*0.95 && mouseX < ui.position.x*1.15 && mouseY > ui.position.y*1.05 && mouseY < ui.position.y*1.15){
    ui.jump_to_chapter(-1); 
  }

  //If mouse clicked next chapter button
  if (mouseX > ui.position.x*2.15 && mouseX < ui.position.x*2.35 && mouseY > ui.position.y*1.05 && mouseY < ui.position.y*1.15){
    ui.jump_to_chapter(1); 
  }
}


//Code for phone, since touchscreens are registered differently.
function touchStarted(){
  if (mouseX > ui.position.x*1.52 && mouseX < ui.position.x*1.82 && mouseY > ui.position.y*1.05 && mouseY < ui.position.y*1.15){
    if (audio.isPlaying()){
      audio.pause();
    } else {
      audio.play();
    }
  }

  ///If mouse is clicked inside the bar, check current position and then move the song to it.
  //Note: Y values are increased due to the nature of touch screens. It can not be that precise. 
  if (mouseX > ui.position.x && mouseX < ui.position.x+ui.w && mouseY > ui.position.y-12 && mouseY < ui.position.y+12 + ui.h){
    let jump_to_time = map(mouseX, ui.position.x, ui.position.x + ui.w, 0,ui.song_time_total);
    audio.jump(jump_to_time);
  }

  //If mouse clicked previous chapter button.
  if (mouseX > ui.position.x*0.95 && mouseX < ui.position.x*1.15 && mouseY > ui.position.y*1.05 && mouseY < ui.position.y*1.15){
    ui.jump_to_chapter(-1); 
  }

  //If mouse clicked next chapter button
  if (mouseX > ui.position.x*2.15 && mouseX < ui.position.x*2.35 && mouseY > ui.position.y*1.05 && mouseY < ui.position.y*1.15){
    ui.jump_to_chapter(1); 
  }
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
