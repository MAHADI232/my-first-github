const progress = document.getElementById('progress');
const song     = document.getElementById('song');
const ctrIcon  = document.getElementById('ctrIcon');

song.onloadeddata = function (){
    progress.max = song.duration;
    progress.value = song.CurrentTime;
};

function music_play(){
    if(ctrIcon.classList.contains( '<|>' )){
    song.onpause();
    ctrIcon.classList.remove( "<|>" );
    ctrIcon.classList.add( '>|<' )
    }
    else{
        song.onplay();
        ctrIcon.classList.add( "<|>" );
        ctrIcon.classList.remove( '>|<' )
    }
}