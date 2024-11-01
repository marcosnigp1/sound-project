class Visualizer{
    constructor(){
        this.position = createVector();
        this.play = 0;
    }

    display(spectrum){
        if (this.mode == 0){

            //First circle
            push();
            noFill();

            //Only play in these specific time stamps (in seconds).
            if (ui.song_time_left > 0 && ui.song_time_left < 10){

                //Greyed out if the sound is not playing.
                if (ui.play == 0){
                    stroke(10);
                } else {
                    stroke(255);
                }
                
                beginShape();
                translate(width*0.30, height/2);
                for (let i = 0; i<spectrum.length-150; i++){
                    let angle = map(i, 0, spectrum.length-200,0,PI/3);
                    let amplitude = spectrum[i];
                    let r = map(amplitude, 0, 100, 50, 120);
                    let x = r * cos(angle);
                    let y = r * sin(angle);
                    vertex(x,y);
                }
                endShape();
            } else {
                stroke(10);
                beginShape();
                translate(width*0.30, height/2);
                for (let i = 0; i<spectrum.length-150; i++){
                    let angle = map(i, 0, spectrum.length-200,0,PI/3);
                    let amplitude = 0; // Do not increase it according to sound..
                    let r = map(amplitude, 0, 100, 50, 120);
                    let x = r * cos(angle);
                    let y = r * sin(angle);
                    vertex(x,y);
                }
                endShape();
            }
            pop()



            //Second circle
            push();
            noFill();

            //Only play in these specific time stamps (in seconds).
            if (ui.song_time_left > 9 && ui.song_time_left < 20){

                //Greyed out if the sound is not playing.
                if (ui.play == 0){
                    stroke(10);
                } else {
                    stroke(255);
                }
                
                beginShape();
                translate(width*0.70, height*0.60);
                for (let i = 0; i<spectrum.length-300; i++){
                    let angle = map(i, 0, spectrum.length-199,0,PI);
                    let amplitude = spectrum[i];
                    let r = map(amplitude, 0, 100, 50, 200);
                    let x = r * cos(angle)*-1;
                    let y = r * sin(angle)*-1;
                    vertex(x,y);
                }
                endShape();

            } else {
                stroke(10);
                beginShape();
                translate(width*0.70, height*0.60);
                for (let i = 0; i<spectrum.length-300; i++){
                    let angle = map(i, 0, spectrum.length-199,0,PI);
                    let amplitude = 0;
                    let r = map(amplitude, 0, 100, 50, 200);
                    let x = r * cos(angle)*-1;
                    let y = r * sin(angle)*-1;
                    vertex(x,y);
                }
                endShape();
            }
            pop()


            //Third circle
            push();
            noFill();

            //Only play in these specific time stamps (in seconds).
            if (ui.song_time_left > 14 && ui.song_time_left < 30){

                //Greyed out if the sound is not playing.
                if (ui.play == 0){
                    stroke(10);
                } else {
                    stroke(255);
                }
                
                beginShape();
                translate(width*0.50, height*0.35);
                for (let i = 0; i<spectrum.length-200; i++){
                    let angle = map(i, 0, spectrum.length-199,0,PI);
                    let amplitude = spectrum[i];
                    let r = map(amplitude, 0, 100, 50, 100);
                    let x = r * cos(angle);
                    let y = r * sin(angle);
                    vertex(x,y);
                }
                endShape();
            } else {
                stroke(10);
                beginShape();
                translate(width*0.50, height*0.35);
                for (let i = 0; i<spectrum.length-200; i++){
                    let angle = map(i, 0, spectrum.length-199,0,PI);
                    let amplitude = 0;
                    let r = map(amplitude, 0, 100, 50, 100);
                    let x = r * cos(angle);
                    let y = r * sin(angle);
                    vertex(x,y);
                }
                endShape();
            }
            pop()
            

        } else if (this.mode == 1){
            //First half circle
            push();
            noFill();

            //Only play in these specific time stamps (in seconds).
            if (ui.song_time_left > 50 && ui.song_time_left < 150){

                //Greyed out if the sound is not playing.
                if (ui.play == 0){
                    stroke(10);
                } else {
                    stroke(255);
                }
                
                //First half
                beginShape();
                translate(width/2, height/2);
                for (let i = 0; i<spectrum.length; i++){
                    let angle = map(i, 0, spectrum.length,0,PI);
                    let amplitude = spectrum[i];
                    let r = map(amplitude, 0, 100, 50, 100);
                    let x = r * cos(angle);
                    let y = r * sin(angle);
                    vertex(x,y);
                }
                endShape(CLOSE);
            
                //Second half
                beginShape();
                for (let i = 0; i<spectrum.length; i++){
                    let angle = map(i, 0, spectrum.length,0,PI);
                    let amplitude = spectrum[i];
                    let r = map(amplitude, 0, 100, 50, 100);
                    let x = r * cos(angle)*-1;
                    let y = r * sin(angle)*-1;
                    vertex(x,y);
                }
                endShape(CLOSE);

            } else {
                //First half

                stroke(10);
                beginShape();
                translate(width/2, height/2);
                for (let i = 0; i<spectrum.length; i++){
                    let angle = map(i, 0, spectrum.length,0,PI);
                    let amplitude = 0;
                    let r = map(amplitude, 0, 100, 50, 100);
                    let x = r * cos(angle);
                    let y = r * sin(angle);
                    vertex(x,y);
                }
                endShape();

                //Second half
                beginShape();
                for (let i = 0; i<spectrum.length; i++){
                    let angle = map(i, 0, spectrum.length,0,PI);
                    let amplitude = 0;
                    let r = map(amplitude, 0, 100, 50, 100);
                    let x = r * cos(angle)*-1;
                    let y = r * sin(angle)*-1;
                    vertex(x,y);
                }
                endShape(CLOSE);
           
            }
            pop();
            
    
        } else if (this.mode == 2){

            //Half circle
            push();
            noFill();

            //Only play in these specific time stamps (in seconds).
            if (ui.song_time_left > 180 && ui.song_time_left < 234){

                //Greyed out if the sound is not playing.
                if (ui.play == 0){
                    stroke(10);
                } else {
                    stroke(255);
                }
                beginShape();
                translate(width/2, height/2);
                for (let i = 0; i<spectrum.length-220; i++){
                    let angle = map(i, 0, spectrum.length-220,0,PI);
                    let amplitude = spectrum[i];
                    let r = map(amplitude, 0, 100, 50, 80);
                    let x = r * cos(angle);
                    let y = r * sin(angle);
                    vertex(x,y);
                }
                endShape();


            } else {
                stroke(10);
                beginShape();
                translate(width/2, height/2);
                for (let i = 0; i<spectrum.length-220; i++){
                    let angle = map(i, 0, spectrum.length-220,0,PI);
                    let amplitude = 0; // Do not increase it according to sound..
                    let r = map(amplitude, 0, 100, 50, 80);
                    let x = r * cos(angle);
                    let y = r * sin(angle);
                    vertex(x,y);
                }
                endShape();
            }
            pop()

        }
    }

    check_chapter(){
        if (ui.song_time_left < (ui.song_time_total / 5)*1){
            this.mode = 0;
        } else if (ui.song_time_left < (ui.song_time_total / 5)*3){
            this.mode = 1;
        } else if (ui.song_time_left > (ui.song_time_total / 5)*4){
            this.mode = 2;
        }
    }
}