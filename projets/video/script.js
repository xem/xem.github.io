/* Useful shortcuts */
var $ = {

  // $.on (event listener)
  on: function(element, event, func){
    if(element.addEventListener){
      element.addEventListener(event, func, false);
    }
    else{
      element.attachEvent("on" + event, func);
    }
  },

  // $.hide (hide an element)
  hide: function(element){
    element.style.display = "none";
  },
  
  // $.show (show an element)
  show: function(element){
    element.style.display = "block";
  },

  // $.id (element selector)
  id: function(id){
    return document.getElementById(id);
  },
  
  // $.mouseInElementXY (get mouse coordinates inside an element)
  mouseInElementXY: function(element, event){
    var 
    x,
    y,
    elm_x = element.offsetLeft,
    elm_y = element.offsetTop,
    element = element.offsetParent;
    while(element != null){
      elm_x = parseInt(elm_x) + parseInt(element.offsetLeft);
      elm_y = parseInt(elm_y) + parseInt(element.offsetTop);
      element = element.offsetParent;
    }
    if(navigator.appVersion.indexOf("MSIE") != -1){
      var standardBody = (document.compatMode == 'CSS1Compat') ? document.documentElement : document.body;
      x = event.clientX + standardBody.scrollLeft;
      y = event.clientY + standardBody.scrollTop;
    }
    else{
      x = event.pageX;
      y = event.pageY;
    }
    x -= elm_x;
    y -= elm_y;
    return [x, y];
  }
}

/* Video player */
var player = {
  video: $.id("video"),
  controls: $.id("controls"),
  play: $.id("play"),
  mute: $.id("mute"),
  volume: $.id("volume"),
  volumelevel: $.id("volumelevel"),
  time: $.id("time"),
  position: $.id("position"),
  preload: $.id("preload"),
  currentposition: $.id("currentposition"),
  fullscreen: $.id("fullscreen"),
  state: "play",
  muted: false,
  vol: 1,
  clickingonvolume: false,
  clickingonposition: false,
  full: false,
  duration: "00"
}

/* Autoplay video (for Android 2.2 support) */
player.video.play();
player.video.volume = player.vol;
player.volumelevel.style.width = player.vol * 100 + "px";

/* Custom controls */

// play/pause/replay
$.on(player.play, "click", function(){
  if(player.state === "play"){
    player.state = "pause";
    player.video.pause();
    player.play.className = "button play";
  }
  else{
    player.state = "play";
    player.video.play();
    player.play.className = "button pause";
  }
});

// replay
$.on(player.video, "ended", function(e){
  player.state = "replay";
  player.play.className = "button replay";
});

// false fullscreen
$.on(player.fullscreen, "click", function(){
  player.full = !player.full;
  player.video.className = player.full ? "fullscreen" : "";
  player.controls.className = player.full ? "fullscreen" : "";
});

// mute/unmute
$.on(player.mute, "click", function(){
  if(video.muted){
    player.video.volume = player.vol;
    player.mute.className = "button unmute";
  }
  else{
    player.video.volume = 0;
    player.mute.className = "button mute";
  }
  video.muted = !video.muted;
});

// change volume
$.on(player.volume, "mousedown", function(e){
  player.clickingonvolume = true;
  var xy = $.mouseInElementXY(this, e);
  player.volumelevel.style.width = Math.min(100, xy[0]) + "px";
  player.video.volume = player.vol = Math.min(100, xy[0]) / 100;
});

$.on(player.volume, "mouseup", function(e){
  player.clickingonvolume = false;
});

$.on(player.volume, "mousemove", function(e){
  if(player.clickingonvolume){
    var xy = $.mouseInElementXY(this, e);
    player.volumelevel.style.width = Math.min(100, xy[0]) + "px";
    player.video.volume = Math.min(100, xy[0]) / 100;
    player.volume = Math.min(100, xy[0]) / 100;
  }
});

// change position
$.on(player.position, "mousedown", function(e){
  player.clickingonvolume = true;
});

$.on(player.position, "mouseup", function(e){
  player.clickingonvolume = false;
  var xy = $.mouseInElementXY(this, e);
  video.currentTime = xy[0] * player.video.duration / 300;
});

$.on(player.position, "mousemove", function(e){
  if(player.clickingonvolume){
    var xy = $.mouseInElementXY(this, e);
    player.currentposition.style.width = xy[0] + "px";
  }
});

// display time and position
setInterval(function(){
  if(player.duration === "00"){
    player.duration = ("0" + (Math.floor(player.video.duration) || 0)).slice(-2);
  }
  if(!player.clickingonvolume){
    player.currentposition.style.width = ((player.video.currentTime / player.video.duration) * 300) + "px";
  }
  player.time.innerHTML = "0:" + ("0" + Math.floor(player.video.currentTime)).slice(-2) + " / " + "0:" + player.duration;
}, 100);

// display preload
setInterval(function(){
  try{
    player.preload.style.width = ((player.video.buffered.end(0) / player.video.duration) * 300) + "px";
  }
  catch(e){};
}, 100);