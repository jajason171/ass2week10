window.onresize = displayWindowSize;
window.onload = displayWindowSize;

function displayWindowSize(){
	myWidth = window.innerWidth;
	myHeight = window.innerHeight;
	document.getElementById("width").innerHTML = "Width: " + myWidth;
	document.getElementById("height").innerHTML = "Height: " + myHeight;
}

function changeColor(){
	document.getElementById("p1").style.backgroundColor = 'yellow';
	document.getElementById("p2").style.backgroundColor = 'yellow';
	document.getElementById("p3").style.backgroundColor = 'yellow';
}

function append(){
	let node = document.createElement("div");
	let str = document.createTextNode("Hello ITE120!");
	node.appendChild(str);
	document.getElementById("p3").appendChild(node);
}

function showHide(){
	let el1 = document.getElementById("p1");
	if (el1.style.display === null || el1.style.display === 'none'){
		el1.style.display = 'block';
	} else {
		el1.style.display = 'none';
	}
	
	let el2 = document.getElementById("p2");
	if (el2.style.display === null || el2.style.display === 'none'){
		el2.style.display = 'block';
	} else {
		el2.style.display = 'none';
	}
	
	let el3 = document.getElementById("p3");
	if (el3.style.display === null || el3.style.display === 'none'){
		el3.style.display = 'block';
	} else {
		el3.style.display = 'none';
	}
	

}

document.getElementById("location").innerHTML += window.location;

function mouseOver(){
	document.getElementById("over-out-event").innerHTML = "On Mouse Over";
}

function mouseOut(){
document.getElementById("over-out-event").innerHTML = "On Mouse Out";
}

function mouseDown(){
document.getElementById("up-down-event").innerHTML = "On Mouse Down";
}

function mouseUp(){
document.getElementById("up-down-event").innerHTML = "On Mouse Up";
}

function doubleClick(){
document.getElementById("double-click-event").innerHTML = "On Mouse Up";
}