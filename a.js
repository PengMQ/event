
function test(){
	var father = document.getElementById('father');
	var child = document.getElementById('child');
	father.addEventListener('click', printOne, false);
	child.addEventListener('click', printTwo, false);

	// Event delegation
	var table = document.getElementById('table');
	console.log('table');
	table.addEventListener('click', changeTdColor, false); //delegate changing td's color to its ancestor table
}

function StopBubble(e){
	if(!e){
		var e = window.event;
	}
	e.cancelBubble = true; // The way how IE stop bubble
	if (e.stopPropagation) {
		e.stopPropagation(); // The way how other browsers stop bubble
	}
}

function printOne(){
	console.log('oneF');
}

function printTwo(e){
	console.log('twoC');
	StopBubble(e);
}

function changeTdColor(e){
	if(e.target.tagName.toLowerCase() == 'td'){
		e.target.style.backgroundColor = 'yellow';
	}

}

window.onload = test;
