function baseBeat(){
	setTimeout(function(){
		clickBtn('hat-4');
	}, 0);
}
function runBaseBeat(){
	if (toggles.playBaseBeat == false)
		baseInterval = setInterval(baseBeat, tempo, true);
	else clearInterval(baseInterval);
	toggles.playBaseBeat = !toggles.playBaseBeat;
}

// First Beat
function firstBeat() {
	// Put Your Beat here	
	setTimeout(function () { clickBtn('hat-4') }, 0);
}

function runFirstBeat() {
	if (toggles.playBeat1 == false)
		firstInterval = setInterval(firstBeat, tempo, true);
	else clearInterval(firstInterval);
	toggles.playBeat1 = !toggles.playBeat1;
	// backSound();
}
// Second Beat
function secondBeat() {
	// Write your code here
	setTimeout(function () { clickBtn('clap-2') }, tempo);
}

function runSecondBeat() {
	if (toggles.playBeat2 == false)
		secondInterval = setInterval(secondBeat, tempo * 2, true);
	else clearInterval(secondInterval);
	toggles.playBeat2 = !toggles.playBeat2;
}

// Third Beat 
function thirdBeat() {	
	// Write your code here
	setTimeout(function () { clickBtn('hat-3') }, 0);
	setTimeout(function () { clickBtn('hat-4') }, tempo*1/2);
}

function runThirdBeat() {
	// Write your code here	
	if (toggles.playBeat3 == false)
		thirdInterval = setInterval(thirdBeat, tempo * 2, true);
	else clearInterval(thirdInterval);
	toggles.playBeat3 = !toggles.playBeat3;
}

// Fourth Beat 
function fourthBeat() {	
	setTimeout(function() { clickBtn('kick-4') }, 0);
	setTimeout(function() { clickBtn('kick-1')}, tempo + tempo*1/2)
	setTimeout(function() { clickBtn('kick-2')}, tempo + tempo*1/2 + tempo*1/2) 
}

function runFourthBeat() {
	// Write your code here
	if (toggles.playBeat4 == false)
		fourthInterval = setInterval(fourthBeat, tempo * 2, true);
	else clearInterval(fourthInterval);
	toggles.playBeat4 = !toggles.playBeat4;

}


