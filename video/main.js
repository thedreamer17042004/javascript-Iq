var play = document.getElementById('play');
var pause = document.getElementById('pause');
var myVideo = document.querySelector('.video-container');


function videoPlay( ) { 
    myVideo.play();
 }
function videoPause( ) { 
    myVideo.pause();
 }


play.addEventListener('click', (e) => {
    videoPlay();
});
pause.addEventListener('click', (e) => {
    videoPause();
});
