class Visualizer {
  constructor() {
    this.position = createVector();
    this.play = 0;
  }

  display(spectrum) {
    if (this.mode == 0) {
      //First circle
      push();
      strokeWeight(3);
      noFill();

      //Only play in these specific time stamps (in seconds).
      if (
        (ui.song_time_left > 0 && ui.song_time_left < 6) ||
        (ui.song_time_left > 9 && ui.song_time_left < 11) ||
        (ui.song_time_left >= 20 && ui.song_time_left < 26) ||
        (ui.song_time_left >= 31 && ui.song_time_left < 49) ||
        (ui.song_time_left >= 53 && ui.song_time_left < 56)
      ) {
        //Greyed out if the sound is not playing.
        if (ui.play == 0) {
          stroke(200);
        } else {
          stroke(96, 139, 193);
        }

        beginShape();
        translate(width * 0.3, height / 2);
        for (let i = 0; i < spectrum.length - 150; i++) {
          let angle = map(i, 0, spectrum.length - 200, 0, PI / 3);
          let amplitude = spectrum[i];
          let r = map(amplitude, 0, 100, 50, 120);
          let x = r * cos(angle);
          let y = r * sin(angle);
          vertex(x, y);
        }
        endShape();
      } else {
        stroke(200);
        beginShape();
        translate(width * 0.3, height / 2);
        for (let i = 0; i < spectrum.length - 150; i++) {
          let angle = map(i, 0, spectrum.length - 200, 0, PI / 3);
          let amplitude = 0; // Do not increase it according to sound..
          let r = map(amplitude, 0, 100, 50, 120);
          let x = r * cos(angle);
          let y = r * sin(angle);
          vertex(x, y);
        }
        endShape();
      }
      pop();

      //Second circle
      push();
      strokeWeight(3);
      noFill();

      //Only play in these specific time stamps (in seconds).
      if (
        (ui.song_time_left > 5 && ui.song_time_left < 14) ||
        (ui.song_time_left >= 26 && ui.song_time_left < 30) ||
        (ui.song_time_left >= 35 && ui.song_time_left < 49) ||
        (ui.song_time_left >= 56 && ui.song_time_left < 61)
      ) {
        //Greyed out if the sound is not playing.
        if (ui.play == 0) {
          stroke(200);
        } else {
          stroke(82, 177, 83);
        }

        beginShape();
        translate(width * 0.7, height * 0.6);
        for (let i = 0; i < spectrum.length - 300; i++) {
          let angle = map(i, 0, spectrum.length - 199, 0, PI);
          let amplitude = spectrum[i];
          let r = map(amplitude, 0, 100, 50, 200);
          let x = r * cos(angle) * -1;
          let y = r * sin(angle) * -1;
          vertex(x, y);
        }
        endShape();
      } else {
        stroke(200);
        beginShape();
        translate(width * 0.7, height * 0.6);
        for (let i = 0; i < spectrum.length - 300; i++) {
          let angle = map(i, 0, spectrum.length - 199, 0, PI);
          let amplitude = 0;
          let r = map(amplitude, 0, 100, 50, 200);
          let x = r * cos(angle) * -1;
          let y = r * sin(angle) * -1;
          vertex(x, y);
        }
        endShape();
      }
      pop();

      //Third circle
      push();
      strokeWeight(3);
      noFill();

      //Only play in these specific time stamps (in seconds).
      if (
        (ui.song_time_left > 14 && ui.song_time_left < 20) ||
        (ui.song_time_left >= 48 && ui.song_time_left < 53)
      ) {
        //Greyed out if the sound is not playing.
        if (ui.play == 0) {
          stroke(200);
        } else {
          stroke(30);
        }

        beginShape();
        translate(width * 0.5, height * 0.35);
        for (let i = 0; i < spectrum.length - 200; i++) {
          let angle = map(i, 0, spectrum.length - 199, 0, PI);
          let amplitude = spectrum[i];
          let r = map(amplitude, 0, 100, 50, 100);
          let x = r * cos(angle);
          let y = r * sin(angle);
          vertex(x, y);
        }
        endShape();
      } else {
        stroke(200);
        beginShape();
        translate(width * 0.5, height * 0.35);
        for (let i = 0; i < spectrum.length - 200; i++) {
          let angle = map(i, 0, spectrum.length - 199, 0, PI);
          let amplitude = 0;
          let r = map(amplitude, 0, 100, 50, 100);
          let x = r * cos(angle);
          let y = r * sin(angle);
          vertex(x, y);
        }
        endShape();
      }
      pop();
    } else if (this.mode == 1) {
      //First half circle
      push();
      strokeWeight(3);
      noFill();

      //Only play in these specific time stamps (in seconds).
      if (ui.song_time_left > 61 && ui.song_time_left < 138) {
        //Greyed out if the sound is not playing.
        if (ui.play == 0) {
          stroke(200);
        } else {
          if (ui.song_time_left < 78) {
            stroke(30);
          } else if (ui.song_time_left < 78) {
            stroke(226, 65, 65);
          } else if (ui.song_time_left < 90) {
            stroke(82, 177, 83);
          }
        }

        ////////////////////////////////////   Main Circle   ///////////////////////////////////////////////
        //First half
        beginShape();
        translate(width / 2, height / 2);
        for (let i = 0; i < spectrum.length; i++) {
          let angle = map(i, 0, spectrum.length, 0, PI);
          let amplitude = spectrum[i];
          let r = map(amplitude, 0, 100, 50, 100);
          let x = r * cos(angle);
          let y = r * sin(angle);
          vertex(x, y);
        }
        endShape(CLOSE);

        //Second half
        beginShape();
        for (let i = 0; i < spectrum.length; i++) {
          let angle = map(i, 0, spectrum.length, 0, PI);
          let amplitude = spectrum[i];
          let r = map(amplitude, 0, 100, 50, 100);
          let x = r * cos(angle) * -1;
          let y = r * sin(angle) * -1;
          vertex(x, y);
        }
        endShape(CLOSE);

        //////////////////////////////////////////////////////////////////////////////////////
      } else {
        //First half

        stroke(200);
        beginShape();
        translate(width / 2, height / 2);
        for (let i = 0; i < spectrum.length; i++) {
          let angle = map(i, 0, spectrum.length, 0, PI);
          let amplitude = 0;
          let r = map(amplitude, 0, 100, 50, 100);
          let x = r * cos(angle);
          let y = r * sin(angle);
          vertex(x, y);
        }
        endShape();

        //Second half
        beginShape();
        for (let i = 0; i < spectrum.length; i++) {
          let angle = map(i, 0, spectrum.length, 0, PI);
          let amplitude = 0;
          let r = map(amplitude, 0, 100, 50, 100);
          let x = r * cos(angle) * -1;
          let y = r * sin(angle) * -1;
          vertex(x, y);
        }
        endShape(CLOSE);
      }
      pop();
    } else if (this.mode == 2) {
      //Half circle
      push();
      noFill();

      //Only play in these specific time stamps (in seconds).
      if (ui.song_time_left > 128 && ui.song_time_left < 140) {
        //Greyed out if the sound is not playing.
        if (ui.play == 0) {
          stroke(200);
        } else {
          stroke(30);
        }
        beginShape();
        translate(width / 2, height / 2);
        for (let i = 0; i < spectrum.length - 220; i++) {
          let angle = map(i, 0, spectrum.length - 220, 0, PI);
          let amplitude = spectrum[i];
          let r = map(amplitude, 0, 100, 50, 80);
          let x = r * cos(angle);
          let y = r * sin(angle);
          vertex(x, y);
        }
        endShape();
      } else {
        stroke(200);
        beginShape();
        translate(width / 2, height / 2);
        for (let i = 0; i < spectrum.length - 220; i++) {
          let angle = map(i, 0, spectrum.length - 220, 0, PI);
          let amplitude = 0; // Do not increase it according to sound..
          let r = map(amplitude, 0, 100, 50, 80);
          let x = r * cos(angle);
          let y = r * sin(angle);
          vertex(x, y);
        }
        endShape();
      }
      pop();
    }
  }

  check_chapter() {
    //I added specific values to avoid further issues.
    if (ui.song_time_left < 61) {
      this.mode = 0;
    } else if (ui.song_time_left < 134) {
      this.mode = 1;
    } else if (ui.song_time_left < 140) {
      this.mode = 0;
    }
  }
}
