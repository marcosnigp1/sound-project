class Visualizer{
    constructor(){
        this.position = createVector();
        this.amplitude = 0;
        this.mode = 0
    }

    display(spectrum){
        if (this.mode == 0){
            //First half circle
            push();
            noFill();
            stroke(255);
            beginShape();
            translate(width/2, height/2);
            for (let i = 0; i<spectrum.length; i++){
                let angle = map(i, 0, spectrum.length,0,PI);
                let amplitude = spectrum[i];
                let r = map(amplitude, 0, 100, 50, 100);
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
                let r = map(amplitude, 0, 100, 50, 100);
                let x = r * cos(angle)*-1;
                let y = r * sin(angle)*-1;
                vertex(x,y);
            /*  let y = map(amperes, 0, 256, height, 0);
                fill(i, 255, 255);
                rect(i*w, y, w, height-y); */
            }
            endShape(CLOSE);
            pop()
        }
    }
}