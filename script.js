
function playPause() {
//$scope.playButtonDisable = false;
var video = document.getElementById("video");
var playButton = document.getElementById("play");  
var pauseButton = document.getElementById("pause");

 if (video.pause) {
    video.play();
    playButton.disabled = true;
    pauseButton.disabled = false;
   
    //button.innerHTML = "<span class=\"glyphicon glyphicon-pause\"></span>";
} else {
    video.pause();
    playButton.disabled = false;
    pauseButton.disabled = true

   // button.innerHTML = "<span class=\"glyphicon glyphicon-play\"></span>";
    }
} 

function pauseVideo(){
var video = document.getElementById("video");
var playButton = document.getElementById("play");  
var pauseButton = document.getElementById("pause");
    video.pause();
    pauseButton.disabled = true;
    playButton.disabled = false;
}
function volumeIncrease(){
    video.volume =1;
}
function volumeDecrease(){
    video.volume =0;
}
function reloadVideo(){
    video.load();
    video.play();
}
function mutedVideo(){
   if(video.muted == false){
        video.muted = true;
      } else{
          video.muted = false;
      } 
}