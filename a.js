
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

function test(){
	var father = document.getElementById("father");
	var child = document.getElementById("child");
	father.addEventListener('click', printOne, false);
	child.addEventListener('click', printTwo, false);
}
window.onload = test;
