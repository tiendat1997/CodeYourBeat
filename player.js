// start interval imtermidately with true value
(function () {
	var originalSetInterval = window.setInterval;

	window.setInterval = function (fn, delay, runImmediately) {
		if (runImmediately) fn();
		return originalSetInterval(fn, delay);
	};
})();

var temp = 428.5714285714286; // = (60*1000)/bpm

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

// BackTrack Sound countroller 
var audio = new Audio('Loop/piano-loop-C.wav');
var audio2 = new Audio('Loop/piano-loop-G.wav');
var time2 = audio2.duration;
var audio3 = new Audio('Loop/guitar-acoustic-loop-unknow.wav');

//var audio = new Audio('Loop/looperman-l-2097762-0134258-ugly-love.wav');
function run(count, time, duration){
	if (count < 5) {		
		console.log("INDEX: "  + count);
		setTimeout(function(){
			let temp = new Audio('Loop/piano-loop-C.wav');
			temp.play();			
		}, time);					
	}	
}

// Custom Your BackTrack Music 
// You can also add as many loops as possible
function loopChain(count, currTime, times) {		
	console.log("INDEX: " + count);		
	console.log("TIME: " + times);		
	
	let temp = null;
	if (count < 2) {	
		temp = new Audio('Loop/piano-loop-C.wav');						
		temp.play();			
		currTime = times[0];
	}
	else if (count < 4){
		temp = new Audio('Loop/piano-loop-G.wav');						
		temp.play();			
		currTime = times[1]
	}
	else if (count < 6) {
		temp = new Audio('Loop/guitar-acoustic-loop-unknow.wav');						
		temp.play();			
		currTime = times[2]
	}		
	if (count < 9) {
		count++;
		setTimeout(function(){loopChain(count, currTime, times)}, currTime);
	}	    
	else {
		toggles.playBackTrack = false;
	}
}

// Start Your Music
function playMusic(){	
	if (toggles.playBackTrack == false)	 {
		toggles.playBackTrack = true;
		times = [
			audio.duration*1000,
			audio2.duration*1000,
			audio3.duration*1000
		]
		setTimeout(function(){clickBtn('clap-1')}, 0);
		setTimeout(function(){clickBtn('clap-1')}, temp*2);
		setTimeout(function(){clickBtn('clap-1')}, temp*4);
		setTimeout(function(){			
			loopChain(0, times[0], times);
		},temp*6);	
	}	
	else {
		// alert("Running");
	}
}

$(document).ready(function () {
	
	// Add event keypress for Sounds
	var soundSet = sounds.map(item => item);    
    window.addEventListener('keypress', function (e) {	

		if (e.key == "Enter") {
			playMusic();
		}		
		else if (e.key == 1) {
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

})
