// First Beat
function firstBeat() {
	// Put Your Beat here	
	setTimeout(function () { clickBtn('kick-long') }, 0);
}

function runFirstBeat() {
	if (toggles.playBeat1 == false)
		firstInterval = setInterval(firstBeat, temp * 4, true);
	else clearInterval(firstInterval);
	toggles.playBeat1 = !toggles.playBeat1;
	// backSound();
}
// Second Beat
function secondBeat() {
	// Write your code here
	setTimeout(function () { clickBtn('snap') }, temp);
}

function runSecondBeat() {
	if (toggles.playBeat2 == false)
		secondInterval = setInterval(secondBeat, temp * 2, true);
	else clearInterval(secondInterval);
	toggles.playBeat2 = !toggles.playBeat2;
}

// Third Beat 
function thirdBeat() {	
	// Write your code here
	setTimeout(function () { clickBtn('snare') }, 0);
	setTimeout(function () { clickBtn('snare') }, temp*1/2);
}

function runThirdBeat() {
	// Write your code here	
	if (toggles.playBeat3 == false)
		thirdInterval = setInterval(thirdBeat, temp * 4, true);
	else clearInterval(thirdInterval);
	toggles.playBeat3 = !toggles.playBeat3;
}

// Fourth Beat 
function fourthBeat() {	
	setTimeout(function() { clickBtn('hey') }, temp);
	setTimeout(function() { clickBtn('hihat')}, temp + temp*1/2)
	setTimeout(function() { clickBtn('hihat')}, temp + temp*1/2 + temp*1/2) 
}

function runFourthBeat() {
	// Write your code here
	if (toggles.playBeat4 == false)
		fourthInterval = setInterval(fourthBeat, temp * 4, true);
	else clearInterval(fourthInterval);
	toggles.playBeat4 = !toggles.playBeat4;

}


