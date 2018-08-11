// First Beat
function firstBeat() {
	// Put Your Beat here	
	setTimeout(function () { clickBtn('snap') }, 0);
}

function runFirstBeat() {
	if (toggles.playBeat1 == false)
		firstInterval = setInterval(firstBeat, temp * 2, true);
	else clearInterval(firstInterval);
	toggles.playBeat1 = !toggles.playBeat1;
	// backSound();
}
// Second Beat
function secondBeat() {
	if (toggles.playBeat2 == false)
		secondInterval = setInterval(runSecondBeat, temp * 2, true);
	else clearInterval(secondInterval);
	toggles.playBeat2 = !toggles.playBeat2;
}

function runSecondBeat() {
	// Write your code here
}

// Third Beat 
function thirdBeat() {
	if (toggles.playBeat2 == false)
		thirdBeat = setInterval(runThirdBeat, temp * 2, true);
	else clearInterval(thirdInterval);
	toggles.playBeat3 = !toggles.playBeat3;
}

function runThirdBeat() {
	// Write your code here
}

// Fourth Beat 
function fourthBeat() {
	if (toggles.playBeat4 == false)
		fourthBeat = setInterval(runFourthBeat, temp * 2, true);
	else clearInterval(fourthInterval);
	toggles.playBeat4 = !toggles.playBeat4;
}
function runFourthBeat() {
	// Write your code here
}