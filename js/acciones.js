// JavaScript Document
var audio;
$(document).ready(function(e) {
    
document.addEventListener("deviceready",function(){
	audio= window.plugins.LowLatencyAudio;
	
	audio.preloadSound('do', 'audio/C.mp3', function(msg){}, function(msg){ alert( 'Error: ' + msg); });
	audio.preloadSound('re', 'audio/D.mp3', function(msg){}, function(msg){ alert( 'Error: ' + msg); });
	audio.preloadSound('mi', 'audio/E.mp3', function(msg){}, function(msg){ alert( 'Error: ' + msg); });
	audio.preloadSound('fa', 'audio/F.mp3', function(msg){}, function(msg){ alert( 'Error: ' + msg); });
	audio.preloadSound('sol', 'audio/G.mp3', function(msg){}, function(msg){ alert( 'Error: ' + msg); });
	audio.preloadSound('la', 'audio/A.mp3', function(msg){}, function(msg){ alert( 'Error: ' + msg); });
    audio.preloadSound('si', 'audio/B.mp3', function(msg){}, function(msg){ alert( 'Error: ' + msg); });
	
	$('.nota').on('tap', function() {
		$(this).addClass('tocada');
		audio.play($(this).attr('id'));
	}).bind('touchend', function(){
		 $(this).removeClass('tocada');
            
      });
		
  });
});// ready
