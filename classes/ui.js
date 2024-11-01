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

        this.time_seconds = 0;
        this.time_minutes = 0;
        this.time_compare = 0;

        this.play = 0;
        this.chapter = 0;


    }

    display(){
        pop();
        fill(255);

        // ------- UI Elements --------
        
        //Play and stop button
        stroke(255);
        if (this.play == 0){

            beginShape();
            vertex(this.position.x*1.65, this.position.y*1.07);
            vertex(this.position.x*1.65, this.position.y*1.17);
            vertex(this.position.x*1.80, this.position.y*1.12);
            endShape();

        } else {

            beginShape();
            vertex(this.position.x*1.59, this.position.y*1.07);
            vertex(this.position.x*1.64, this.position.y*1.07);
            vertex(this.position.x*1.64, this.position.y*1.17);
            vertex(this.position.x*1.59, this.position.y*1.17);
            endShape();

            beginShape();
            vertex(this.position.x*1.73, this.position.y*1.07);
            vertex(this.position.x*1.78, this.position.y*1.07);
            vertex(this.position.x*1.78, this.position.y*1.17);
            vertex(this.position.x*1.73, this.position.y*1.17);
            endShape(); 
        }

        //According if the song is playing or not, colors will be shown different. This is to avoid user confusion.

        if (this.play == 0){
            noStroke();
            fill(10);
        }

        //Bar
        rect(this.position.x,this.position.y,this.w,this.h);

        //Circle for progress.
        noStroke();
        circle(this.position.x+(this.progress_end_point*this.song_time_left),this.position.y*1.005,this.w*0.07);

        //Time Remaining.
        textSize(15);
        text(this.song_time_left, this.position.x*2.40,this.position.y*1.013);
        text("/", this.position.x*2.55,this.position.y*1.013);
        text(this.song_time_total, this.position.x*2.65,this.position.y*1.013);


        //Last chapter button
        beginShape();
        vertex(this.position.x*1.05, this.position.y*1.07);
        vertex(this.position.x*1.05, this.position.y*1.17);
        vertex(this.position.x*0.95, this.position.y*1.12);
        endShape();

        beginShape();
        vertex(this.position.x*1.15, this.position.y*1.07);
        vertex(this.position.x*1.15, this.position.y*1.17);
        vertex(this.position.x*1.05, this.position.y*1.12);
        endShape();


        //Next chapter button
        beginShape();
        vertex(this.position.x*2.15, this.position.y*1.07);
        vertex(this.position.x*2.15, this.position.y*1.17);
        vertex(this.position.x*2.25, this.position.y*1.12);
        endShape();

        beginShape();
        vertex(this.position.x*2.25, this.position.y*1.07);
        vertex(this.position.x*2.25, this.position.y*1.17);
        vertex(this.position.x*2.35, this.position.y*1.12);
        endShape();

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

    //It is called only once.
    jump_to_chapter(value){
        if (value == -1){
            if (this.chapter == 0){
                //Do nothing.
            } else {
                this.chapter -= 1;
            }
        } else if (value == 1){
            if (this.chapter == 5){
                //Do nothing.
            } else {
                this.chapter += 1
            }
        }

        //Jump to the specified chapter with the help of a switch statement.
        //Note: The total amount of the song needs to be divided by five.

        switch (this.chapter) {
            case 0:
                audio.jump(0);
                break;
    
            case 1:
                audio.jump((this.song_time_total / 5)*1);
                break;

            case 2:
                audio.jump((this.song_time_total / 5)*2);
                break;

            case 3:
                audio.jump((this.song_time_total / 5)*3);
                break;
            
            case 4:
                audio.jump((this.song_time_total / 5)*4);
                break;

            case 5:
                audio.jump((this.song_time_total / 5)*4.90); //It is multiplied by 4.90 since it can go out of range.
                break;

            default:
                break;
        }
    }
}