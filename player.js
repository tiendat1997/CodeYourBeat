// start interval imtermidately with true value
(function () {
	var originalSetInterval = window.setInterval;

	window.setInterval = function (fn, delay, runImmediately) {
		if (runImmediately) fn();
		return originalSetInterval(fn, delay);
	};
})();

var tempo = 0; // = (60*1000)/bpm

var baseInterval = null; 
var firstInterval = null;
var secondInterval = null;
var thirdInterval = null;
var fourthInterval = null;
var backTrackLoop = null;
var test = null;
var isFocusTemp = false;
// false waiting - true - running
var toggles = {	
	playBackTrack: false,
	playBaseBeat: false,
	playBeat1: false,
	playBeat2: false,
	playBeat3: false,
	playBeat4: false
}

function clickBtn(id) {
	document.getElementById(id).click();
}

function backSound() {
	setTimeout(function () { clickBtn('background') }, 0);
}

function updateBeatStatus(index, playing){
	let beatStatus = $('#beat-status').find(`[data-index=${index}]`);
	let color = playing ? '#dc3545' : '#6c757d';
	beatStatus.css('background-color', color);
		
}
$(document).ready(function () {			
	$('#input-tempo').focusin(function(){		
		isFocusTemp = true;
	});
	$('#input-tempo').focusout(function(){		
		isFocusTemp = false;
	});
	
	var chooseTempo = document.getElementById('submit-tempo');	
	chooseTempo.addEventListener('click', function(e){
		let bpm = document.getElementById('input-tempo').value;			
		isFocusTemp = false; 
		if (bpm > 10) {
			tempo = 60000/bpm;		
			window.alert(tempo);
			$('#label-tempo').text(`${bpm} bpm`);
			// set event listener
			window.addEventListener('keypress', function (e) {				
				if (isFocusTemp == true){					
					return;
				}				
				if (e.key == 0) {					
					runBaseBeat();	
					updateBeatStatus(0, toggles.playBaseBeat);					
				}		     
				else if (e.key == 1){
					runFirstBeat();			
					updateBeatStatus(1, toggles.playBeat1);		
				} 
				else if (e.key == 2) {
					runSecondBeat();				
					updateBeatStatus(2, toggles.playBeat2);
				}
				else if (e.key == 3) {
					runThirdBeat();
					updateBeatStatus(3, toggles.playBeat3);					
				}
				else if (e.key == 4)  {
					runFourthBeat();
					updateBeatStatus(4, toggles.playBeat4);					
				}		
			});			
		}
		else {
			window.alert("Please add number greater than 10");
			window.removeEventListener('keypress');
		}				
	});		
})
