
function playPause() {
//$scope.playButtonDisable = false;
var video = document.getElementById("video");
//var playButton = document.getElementById("play");      

 if (video.pause) {
    video.play();
   
    //button.innerHTML = "<span class=\"glyphicon glyphicon-pause\"></span>";
} else {
    video.pause();
    // $scope.playButtonDisable = false;

   // button.innerHTML = "<span class=\"glyphicon glyphicon-play\"></span>";
    }
} 

function pauseVideo(){
    video.pause();
//    $scope.playButtonDisable = false;
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