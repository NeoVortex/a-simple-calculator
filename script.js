let oper = document.getElementsByClassName('operator');
let numb = document.getElementsByClassName('number');
let output= document.getElementById('output-value').innerText;
let history = document.getElementById('history-value').innerText;

function printHistory(num) {
	return document.getElementById('history-value').innerText = num;
}

function printOutput(num) {
	document.getElementById('output-value').innerText = (+num).toLocaleString('jp');
}

for (let i = 0; i < oper.length; i++) {
	oper[i].addEventListener('click', function () {
		switch(this.id) {
			case 'clear':	
			// history = '';
			// printHistory('');
			// output = '';
			// printOutput('');
			location.reload();
			break;
			case 'backspace':
			output == '' ? history = history.substr(0, history.length-1):
			output = output.toString();
			output = output.substr(0, output.length-1);
			printOutput(output);
			break;
			case '=':
			cutSign();
			history+= output;
			result();
			break;
			case '%':
			cutSign();
			history += output/100;
			result();
			break;
			default:
			cutSign();
			history+= (output ? output : '') + this.id;
			printHistory(history);
			printOutput('');
			output='';
		}
	});
}	

function cutSign() {
	if(output == 0 && isNaN(history[history.length-1])) {
		history = history.substr(0, history.length-1);
	}
}

function result() {
	output = eval(history);
	printOutput(output);
	history = '';
	printHistory('');
}

for (let i = 0; i < numb.length; i++) {
	numb[i].addEventListener('click', function () {
		if (output == 0) output = '';
		output+= this.id;
		printOutput(output);
	})
}
