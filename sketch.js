//Examples taken from:https://therewasaguy.github.io/p5-music-viz/
//Sound example taken from the following video: https://www.youtube.com/watch?v=2O3nm0Nvbi4

//Preparing variables for the sound analyzer.
let audio;
let fft;

//Interactable UI
let ui;
let visualizer;

//Background image;
let bg;

//Font;
let font;

function preload() {
  audio = new loadSound("media/audio.wav");
  bg = new loadImage("media/whiteboard.jpg"); //Image obtained from: https://www.regionsneuro.com/?r=44724315
  font = new loadFont("media/PermanentMarker-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //Preparing variables for audio analyzer.
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
  background(bg, 50);

  //Get spectrum and visualize it. Also, check current song chapter.
  let spectrum = fft.analyze();
  visualizer.display(spectrum);
  visualizer.check_chapter();

  //Update UI values and display them. This is a procedure which needs to be done constantly since it is a fixed position.
  ui.update_values(width * 0.3, height * 0.86, width * 0.4, height * 0.01);
  ui.display();
}

function mousePressed() {
  if (
    mouseX > ui.position.x * 1.55 &&
    mouseX < ui.position.x * 1.79 &&
    mouseY > ui.position.y * 0.87 &&
    mouseY < ui.position.y * 0.94
  ) {
    if (audio.isPlaying()) {
      audio.pause();
    } else {
      audio.play();
    }
  }

  ///If mouse is clicked inside the bar, check current position and then move the song to it.
  if (
    mouseX > ui.position.x &&
    mouseX < ui.position.x + ui.w &&
    mouseY > ui.position.y &&
    mouseY < ui.position.y + ui.h
  ) {
    let jump_to_time = map(
      mouseX,
      ui.position.x,
      ui.position.x + ui.w,
      0,
      ui.song_time_total
    );
    audio.jump(jump_to_time);
  }

  //If mouse clicked previous chapter button.
  if (
    mouseX > ui.position.x * 1.26 &&
    mouseX < ui.position.x * 1.35 &&
    mouseY > ui.position.y * 0.87 &&
    mouseY < ui.position.y * 0.93
  ) {
    ui.jump_to_chapter(-1);
  }

  //If mouse clicked next chapter button
  if (
    mouseX > ui.position.x * 1.98 &&
    mouseX < ui.position.x * 2.07 &&
    mouseY > ui.position.y * 0.87 &&
    mouseY < ui.position.y * 0.93
  ) {
    ui.jump_to_chapter(1);
  }
}

//Code for phone, since touchscreens are registered differently.
function touchStarted() {
  if (
    mouseX > ui.position.x * 1.55 &&
    mouseX < ui.position.x * 1.79 &&
    mouseY > ui.position.y * 0.87 &&
    mouseY < ui.position.y * 0.94
  ) {
    if (audio.isPlaying()) {
      audio.pause();
    } else {
      audio.play();
    }
  }

  ///If mouse is clicked inside the bar, check current position and then move the song to it.
  if (
    mouseX > ui.position.x &&
    mouseX < ui.position.x + ui.w &&
    mouseY > ui.position.y &&
    mouseY < ui.position.y + ui.h
  ) {
    let jump_to_time = map(
      mouseX,
      ui.position.x,
      ui.position.x + ui.w,
      0,
      ui.song_time_total
    );
    audio.jump(jump_to_time);
  }

  //If mouse clicked previous chapter button.
  if (
    mouseX > ui.position.x * 1.26 &&
    mouseX < ui.position.x * 1.35 &&
    mouseY > ui.position.y * 0.87 &&
    mouseY < ui.position.y * 0.93
  ) {
    ui.jump_to_chapter(-1);
  }

  //If mouse clicked next chapter button
  if (
    mouseX > ui.position.x * 1.98 &&
    mouseX < ui.position.x * 2.07 &&
    mouseY > ui.position.y * 0.87 &&
    mouseY < ui.position.y * 0.93
  ) {
    ui.jump_to_chapter(1);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function checkCurrentWindowSize(value) {
  if (windowWidth < 718) {
    if (value == 1) {
      textSize(30);
      reduce = 0.17;
      return reduce;
    }

    if (value == 2) {
      textSize(18);
      reduce = 0.2;
      return reduce;
    }

    if (value == 3) {
      textSize(17);
      reduce = 0.15;
      return reduce;
    }
  } else if (windowWidth < 1200) {
    if (value == 1) {
      textSize(40);
      reduce = 0.1;
      return reduce;
    }

    if (value == 2) {
      textSize(20);
      reduce = 0.1;
      return reduce;
    }

    if (value == 3) {
      textSize(20);
      reduce = 0.1;
      return reduce;
    }
  } else {
    if (value == 1) {
      textSize(40);
      reduce = 0;
      return reduce;
    }

    if (value == 2) {
      textSize(20);
      reduce = 0;
      return reduce;
    }

    if (value == 3) {
      textSize(20);
      reduce = 0;
      return reduce;
    }
  }
}
