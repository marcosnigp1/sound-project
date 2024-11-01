class UI{
    constructor(){

        this.position = createVector();
        this.w = 0;
        this.h = 0;

        this.color = 0;
        this.time_progressed = 0;
        this.progress_end_point = 0;
        this.song_time_left = 0;
        this.song_time_total = 0;

        this.play = 0;
    }

    display(){
        pop();
        fill(255);

        // ------- UI Elements --------
        
        //Bar
        rect(this.position.x,this.position.y,this.w,this.h);

        //Circle for progress.
        noStroke();
        circle(this.position.x+(this.progress_end_point*this.song_time_left),this.position.y*1.005,this.w*0.05);

        //Time Remaining.
        textSize(20);
        text(this.song_time_left, this.position.x*2.45,this.position.y*1.013);
        text("/", this.position.x*2.55,this.position.y*1.013);
        text(this.song_time_total, this.position.x*2.59,this.position.y*1.013);

        //Play and stop button

        stroke(255);
        if (this.play == 0){

            beginShape();
            vertex(this.position.x*1.65, this.position.y*1.05);
            vertex(this.position.x*1.65, this.position.y*1.15);
            vertex(this.position.x*1.80, this.position.y*1.1);
            endShape();

        } else {

            beginShape();
            vertex(this.position.x*1.57, this.position.y*1.05);
            vertex(this.position.x*1.62, this.position.y*1.05);
            vertex(this.position.x*1.62, this.position.y*1.15);
            vertex(this.position.x*1.57, this.position.y*1.15);
            endShape();

            beginShape();
            vertex(this.position.x*1.77, this.position.y*1.05);
            vertex(this.position.x*1.82, this.position.y*1.05);
            vertex(this.position.x*1.82, this.position.y*1.15);
            vertex(this.position.x*1.77, this.position.y*1.15);
            endShape(); 
        }

        push();
    }

    //This needs to be called once the audio class is called and created.
    update_values(x,y,w,h){
        //Update values, such as position and audio time
        this.position = createVector(x,y);
        this.w = w;
        this.h = h;
        
        this.song_time_total = round(audio.duration(),0);
        this.song_time_left = round(audio.currentTime(),0);
        this.progress_end_point = this.w / this.song_time_total;

        if (audio.isPlaying()){
            this.play = 1;
        } else {
            this.play = 0;
        }
    }

}