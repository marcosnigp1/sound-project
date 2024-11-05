class UI {
  constructor() {
    this.position = createVector();
    this.w = 0;
    this.h = 0;

    this.color = 0;
    this.time_progressed = 0;
    this.progress_end_point = 0;
    this.song_time_left = 0;
    this.song_time_total = 0;

    this.time_seconds = 0;
    this.time_minutes = 0;
    this.time_compare = 0;

    this.play = 0;
    this.chapter = 0;
    this.chapter_text = " ";
  }

  display() {
    push();
    fill(0);
    stroke(0);

    //Override font
    textFont(font);

    //Main Title
    textSize(40);
    checkCurrentWindowSize(1);
    text(
      "Class Harmony",
      width * (0.43 - checkCurrentWindowSize(1)),
      height * 0.15
    );

    //Sub Title
    textSize(30);
    noFill();
    checkCurrentWindowSize(2);
    text(
      "   A Project by Marcos, \nHaroon, Violetta and Ghadir",
      width * (0.43 - checkCurrentWindowSize(2)),
      height * 0.19
    );

    noFill();
    // ------- UI Elements --------

    //Play and stop button

    if (this.play == 0) {
      beginShape();
      vertex(this.position.x * 1.65, this.position.y * 0.87);
      vertex(this.position.x * 1.65, this.position.y * 0.94);
      vertex(this.position.x * 1.71, this.position.y * 0.903);
      endShape(CLOSE);
    } else {
      beginShape();
      vertex(this.position.x * 1.64, this.position.y * 0.88);
      vertex(this.position.x * 1.66, this.position.y * 0.88);
      vertex(this.position.x * 1.66, this.position.y * 0.93);
      vertex(this.position.x * 1.64, this.position.y * 0.93);
      endShape(CLOSE);

      beginShape();
      vertex(this.position.x * 1.68, this.position.y * 0.88);
      vertex(this.position.x * 1.7, this.position.y * 0.88);
      vertex(this.position.x * 1.7, this.position.y * 0.93);
      vertex(this.position.x * 1.68, this.position.y * 0.93);
      endShape(CLOSE);
    }

    //Draw circle around the play/stop button;
    circle(this.position.x * 1.67, this.position.y * 0.904, 62);

    //According if the song is playing or not, colors will be shown different. This is to avoid user confusion.

    if (this.play == 0) {
      stroke(200);
      noFill();
    }

    //Bar
    rect(this.position.x, this.position.y, this.w, this.h);

    //Circle for progress.

    fill(30);
    circle(
      this.position.x + this.progress_end_point * this.song_time_left,
      this.position.y * 1.005,
      this.w * 0.05
    );

    noFill();

    //Time Remaining.
    textSize(18);
    text(
      this.song_time_left + " s",
      this.position.x * 0.723,
      this.position.y * 1.013
    );

    text(
      this.song_time_total + " s",
      this.position.x * 2.37,
      this.position.y * 1.013
    );

    //Current chapter.
    checkCurrentWindowSize(3);
    text(
      this.chapter_text,
      width * (0.44 - checkCurrentWindowSize(3)),
      this.position.y * 1.05
    );

    //Last chapter button
    beginShape();
    vertex(this.position.x * 1.35, this.position.y * 0.87);
    vertex(this.position.x * 1.35, this.position.y * 0.94);
    vertex(this.position.x * 1.28, this.position.y * 0.905);
    endShape(CLOSE);

    beginShape();
    vertex(this.position.x * 1.26, this.position.y * 0.88);
    vertex(this.position.x * 1.29, this.position.y * 0.88);
    vertex(this.position.x * 1.29, this.position.y * 0.93);
    vertex(this.position.x * 1.26, this.position.y * 0.93);
    endShape(CLOSE);

    //Next chapter button
    beginShape();
    vertex(this.position.x * 1.98, this.position.y * 0.87);
    vertex(this.position.x * 1.98, this.position.y * 0.94);
    vertex(this.position.x * 2.05, this.position.y * 0.905);
    endShape(CLOSE);

    beginShape();
    vertex(this.position.x * 2.04, this.position.y * 0.88);
    vertex(this.position.x * 2.07, this.position.y * 0.88);
    vertex(this.position.x * 2.07, this.position.y * 0.93);
    vertex(this.position.x * 2.04, this.position.y * 0.93);
    endShape(CLOSE);

    push();
  }

  //This needs to be called once the audio class is called and created.
  update_values(x, y, w, h) {
    //Update values, such as position and audio time
    this.position = createVector(x, y);
    this.w = w;
    this.h = h;

    this.song_time_total = round(audio.duration(), 0);
    this.song_time_left = round(audio.currentTime(), 0);
    this.progress_end_point = this.w / this.song_time_total;

    if (audio.isPlaying()) {
      this.play = 1;
    } else {
      this.play = 0;
    }
  }

  //It is called only once.
  jump_to_chapter(value) {
    if (value == -1) {
      if (this.chapter == 0) {
        //Do nothing.
      } else {
        this.chapter -= 1;
      }
    } else if (value == 1) {
      if (this.chapter == 3) {
        //Do nothing.
      } else {
        this.chapter += 1;
      }
    }

    //Jump to the specified chapter with the help of a switch statement.
    switch (this.chapter) {
      case 0:
        audio.jump(0);
        break;

      case 1:
        audio.jump(61);
        break;

      case 2:
        audio.jump(129);
        break;

      case 3:
        audio.jump((this.song_time_total / 5) * 4.9); //It is multiplied by 4.90 since it can go out of range.
        break;

      default:
        break;
    }
  }
}
