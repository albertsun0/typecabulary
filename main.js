
var words = ["sadge","first","time","slowly","believe","albert", "yeah", "carry", "excited", "chungus", "calm","think","problems","mwah","regina", "scary"];

console.log("I love selina");


var start = false;

var right = 0;
var wrong = 0;

var timeElapsed = 0;
var myTimer;

function tick(){
    timeElapsed++;
    document.getElementById("time").innerHTML = Math.floor(timeElapsed/60) +':' +timeElapsed%60;
}

function starttimer(){
    //call the first setInterval
    myTimer = setInterval(tick, 1000);
}

function stoptimer(){
    clearInterval(myTimer);
}

var currentword = "Selina"
function begin() {
	console.log("start");
	time = 0;
	start = true;
	document.getElementById('startb').style.display = "none";
	document.getElementById('inputbox').value = "";
	starttimer();
	document.getElementById("inputbox").focus();
}
/*window.onload=function(){
  const box = document.getElementById('inputbox');
	box.addEventListener('input', checktext);
}
*/

function checktext(){
	if(start == true){
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