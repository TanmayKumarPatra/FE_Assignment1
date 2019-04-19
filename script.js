
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

 
/*   var videoplayer = document.getElementById("video_player");
links = videoplayer.getElementsByTagName('a');
for(var i=0; i<links.length;i++){
  links[i].onclick = handler;
} */
/* function handler(e){
  e.preventDefault();
  videotarget = this.getAttribute("href");
  filename= videotarget.substr(0, videotarget.lastIndexOf('.'))||videotarget;
  video = document.querySelector("#video_player video ");
  video.removeAttribute('poster');
  source= document.querySelectorAll("video_player video source");
  source[0].src= filename + ".mp4";
  source[1].src=filename + ".webm";
  video.load();
  video.playPause();
  video.pauseVideo(); 
 }  */
 function myFunction() {
   console.log('hii')
  document.getElementById('source_video').src = 'movie.mp4';
  document.getElementById('video').style.width = '100%';   
} 
/* document.getElementById('figcaptionplaylist').addEventListener('click', function() {
  document.getElementById('source_video').src = 'movie.mp4';
  document.getElementById('video').style.width = '400px'; 
}); */