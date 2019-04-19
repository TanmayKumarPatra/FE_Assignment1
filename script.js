
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
var video = document.getElementById("video");
var playButton = document.getElementById("play");  
var pauseButton = document.getElementById("pause");
var muteButton = document.getElementById("muteVideo")
    video.load();
    video.play();
    pauseButton.disabled = false;
    playButton.disabled = true;
}
function mutedVideo(){

   if(video.muted == false){
        video.muted = true;
 	
      } else{
          video.muted = false;

      } 
}
function likeVideo(){

 if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("likebutton").innerHTML = localStorage.clickcount;
  }


}
function unlikeVideo(){

 if (typeof(Storage) !== "undefined") {
    if (localStorage.reducecount) {
      localStorage.reducecount = Number(localStorage.reducecount)+1;
    } else {
      localStorage.reducecount = 1;
    }
    document.getElementById("unlikebutton").innerHTML = localStorage.reducecount;
  }


}

 function myFunction(e) {
  document.getElementById('source_video').src = 'e';
  document.getElementById('video').style.width = '100%';   
} 
