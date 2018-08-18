// start interval imtermidately with true value
(function () {
	var originalSetInterval = window.setInterval;

	window.setInterval = function (fn, delay, runImmediately) {
		if (runImmediately) fn();
		return originalSetInterval(fn, delay);
	};
})();

var tempo = 428.5714285714286; // = (60*1000)/bpm

var firstInterval = null;
var secondInterval = null;
var thirdInterval = null;
var fourthInterval = null;
var backTrackLoop = null;
var test = null;
// false waiting - true - running
var toggles = {
	playBackTrack: false,
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

function clearAllInterval() {
	
}

$(document).ready(function () {
	var chooseTempo = document.getElementById('submit-tempo');
	chooseTempo.addEventListener('click', function(e){
		let bpm = document.getElementById('input-tempo').value;
		if (bpm > 10) {
			tempo = 60000/bpm;		
			window.alert(tempo);
			// set event listener
			window.addEventListener('keypress', function (e) {			
				if (e.key == 1) {
					runFirstBeat(); 			
				}		      
				else if (e.key == 2) {
					runSecondBeat();
				}
				else if (e.key == 3) {
					runThirdBeat();
				}
				else if (e.key == 4)  {
					runFourthBeat();
				}		
			});			
		}
		else {
			window.alert("Please add number greater than 10");
			window.removeEventListener('keypress');
		}				
	});

	// Add event keypress for Sounds
	var soundSet = sounds.map(item => item);        
})
