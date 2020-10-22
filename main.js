
var words = ["sadge","first","time","slowly","believe","albert", "yeah", "carry", "excited", "chungus", "calm","think","problems","mwah","regina", "scary"];

console.log("I love selina");


var start = false;
var startSpeedrun = false;

var right = 0;
var wrong = 0;

var timeElapsed = 0;
var myTimer;

function tick(){
    if(start)
    	timeElapsed++;

    else if(startSpeedrun){
    	timeElapsed--;
    	if(timeElapsed==0){
    		stoptimer();
    		alert("Time's up!\nScore:\nCorrect: "+right+"\nIncorrect: "+wrong+"\nAccuracy: "+ (right+wrong==0?"0.00":(right/(right+wrong)).toFixed(2))+"%");
    	}
    }

    var formattedSeconds = ("0" + (timeElapsed%60)).slice(-2);
    document.getElementById("time").innerHTML = Math.floor(timeElapsed/60) +':' +formattedSeconds;
}

function starttimer(){
    //call the first setInterval
    myTimer = setInterval(tick, 1000);
}

function stoptimer(){
    clearInterval(myTimer);
    start = false;
    startSpeedrun = false;
    timeElapsed = 0;
}

var currentword = "Selina"
function beginPractice() {
	console.log("start");
	start = true;
	document.getElementById('backButton').style.visibility = "visible";
	document.getElementById('startPracticeButton').style.display = "none";
	document.getElementById('startSpeedrunButton').style.display = "none";
	document.getElementById('inputbox').value = "";
	starttimer();
	document.getElementById("inputbox").focus();
}
/*window.onload=function(){
  const box = document.getElementById('inputbox');
	box.addEventListener('input', checktext);
}
*/

function beginSpeedrun(){
	console.log("Start speedrun");
	timeElapsed =60;
	startSpeedrun = true;
	document.getElementById('backButton').style.visibility = "visible";
	document.getElementById('startPracticeButton').style.display = "none";
	document.getElementById('startSpeedrunButton').style.display = "none";
	document.getElementById('inputbox').value = "";
	starttimer();
	document.getElementById("inputbox").focus();
	document.getElementById("time").innerHTML = '1:00';
}

function checktext(){
	if(start || startSpeedrun){
		console.log("update");
		const textbox = document.getElementById('inputbox');

		console.log(textbox.value);
		if (textbox.value == currentword) {
			console.log("correct");
			right++;
			correctadd();
			newword();
			textbox.style.color = "black";
			textbox.value = "";
			
		}
		else{
			wrong++;
			incorrectadd();
			textbox.style.color = "red";
			
		}
	}
	else{
		alert("please click start");
	}
	
}

function newword(){
	currentword = words[Math.floor(Math.random() * words.length)];
	console.log(currentword);
	document.getElementById("word").innerHTML = currentword;
}

function correctadd(){
	document.getElementById("correct").innerHTML = right + ' correct';

	add = document.createElement('div');
	add.innerHTML = currentword;
	add.classList.add("loggedwordcorrect"); 
	document.getElementById("wordlog").appendChild(add);
}

function incorrectadd(){
	document.getElementById("incorrect").innerHTML = wrong + ' incorrect';

	add = document.createElement('div');
	add.innerHTML = currentword;
	add.classList.add("loggedwordincorrect"); 
	document.getElementById("wordlog").appendChild(add);
}

function backButton(){
	stoptimer();
	var length = document.getElementById("wordlog").children.length;
	for(var i=0; i<length-2; i++){
		document.getElementById("wordlog").removeChild(document.getElementById("wordlog").lastChild);
	}
	
	document.getElementById('startPracticeButton').style.display = "inline";
	document.getElementById('startSpeedrunButton').style.display = "inline";
	document.getElementById('backButton').style.visibility = "hidden";
	document.getElementById('inputbox').value = "";
	document.getElementById("time").innerHTML = '0:00';
	document.getElementById("word").innerHTML = "Selina";
	currentword = "Selina";
	document.getElementById("incorrect").innerHTML = '0 incorrect';
	document.getElementById("correct").innerHTML = '0 correct';
	right = 0;
	wrong =0;
}