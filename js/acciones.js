// JavaScript Document
var audio;
$(document).ready(function(e) {
    
document.addEventListener("deviceready",function(){
	audio= window.plugins.LowLatencyAudio;
	
	audio.preloadFX('do', 'audio/C.mp3', function(msg){}, function(msg){ alert( 'Error: ' + msg); });
	audio.preloadFX('re', 'audio/D.mp3', function(msg){}, function(msg){ alert( 'Error: ' + msg); });
	audio.preloadFX('mi', 'audio/E.mp3', function(msg){}, function(msg){ alert( 'Error: ' + msg); });
	audio.preloadFX('fa', 'audio/F.mp3', function(msg){}, function(msg){ alert( 'Error: ' + msg); });
	audio.preloadFX('sol', 'audio/G.mp3', function(msg){}, function(msg){ alert( 'Error: ' + msg); });
	audio.preloadFX('la', 'audio/A.mp3', function(msg){}, function(msg){ alert( 'Error: ' + msg); });
    audio.preloadFX('si', 'audio/B.mp3', function(msg){}, function(msg){ alert( 'Error: ' + msg); });
	
	$('.nota').bind('touchstart', function() {
		$(this).addClass('tocada');
		audio.play($(this).attr('id'));
	}).bind('touchend', function(){
		 $(this).removeClass('tocada');
            
      });
		
  });
});// ready