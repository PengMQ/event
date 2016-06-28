
function test(){
	var father = document.getElementById('father');
	var child = document.getElementById('child');
	bindEvent(father, 'click', printOne, false);
	bindEvent(child, 'click', printTwo, false);

	// Event delegation
	var table = document.getElementById('table');
	console.log('table');
	bindEvent(table, 'click', changeTdColor, false); //delegate changing td's color to its ancestor table
}
//bind event for all browsers
function bindEvent(element, type, handler, useCapture) {
	if(element.addEventListener){
		element.addEventListener(type, handler, useCapture);
	}else{
		element.attachEvent('on' + type, handler); //How IE bind event.
	}
}

//remove event for all browsers
function removeEvent(element, type, handler, useCapture) {
	if(element.removeEventListener) {
		element.removeEventListener(type, handler, useCapture);
	}else{
		element.detachEvent('on' + type, handler); //IE remove event binding
	}
}


function StopBubble(e){
	if(!e){
		var e = window.event; //In Dom model, the event is passed ad the first argument manually, but in IE, it is gotten from window.event
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
	var eventTarget = getEventTarget(e);
	if(eventTarget.tagName.toLowerCase() == 'td'){
		eventTarget.style.backgroundColor = 'yellow';
	}

}

function getEventTarget(event){
	if(event.target){
		return event.target;
	}
	return event.srcElement; //In IE, the target is called srcElement.
}

window.onload = test;
