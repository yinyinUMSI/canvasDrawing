document.addEventListener("DOMContentLoaded",function(){

	var currHeight = document.documentElement.clientHeight;
	var currWidth = document.documentElement.clientWidth;
	var canvasHeight = 0.8*currHeight;
	var canvasWidth = 0.8*currWidth;
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
	var canvasContent = canvas.getContext('2d');
	var penColor = "#ff0000"
	var penPicked = false;
	var colorPicker = document.getElementById("colorpicker");
	var canvasOne = document.getElementById("canvas");
	canvas.onmousemove = (e) => {
		console.log("move");
		var x = e.clientX;
		var y = e.clientY;
		if(penPicked === true) {
			drawRect(x-15, y-15, penColor);
		}
	}
	canvas.ontouchmove = (e) => {
		console.log("move");
		var x = e.touches[0].clientX;
		var y = e.touches[0].clientY;
		if(penPicked === true) {
			drawRect(x-15, y-15, penColor);
		}
	}


	document.onkeydown = (e) => {
		console.log("pressed");
		if(e.keyCode === 32) {
			console.log("space pressed");
			canvasContent.clearRect(0, 0, canvas.width, canvas.height);
		}
		else if(e.keyCode === 66) {
			console.log("b pressed");
			penColor = "#0000ff";
		}
		else if(e.keyCode === 71) {
			console.log("g pressed");
			penColor = "#00ff00";
		}
		else if(e.keyCode === 89) {
			console.log("y pressed");
			penColor = "#ffff00";
		}
		else if(e.keyCode === 82) {
			console.log("r pressed");
			penColor = "#ff0000";
		}
		else if(e.keyCode === 38) {
			console.log("arrowUp pressed");
			penPicked = true;
			document.getElementById('explan').innerHTML = "pen picked";
		}
		else if(e.keyCode === 40) {
			console.log("arrowDown pressed");
			penPicked = false;
			document.getElementById('explan').innerHTML = "Please pick a pen with up arrow First";
		}
	}
	colorPicker.addEventListener("input", e => penColor = colorPicker.value);
	window.onresize = resizeCanvas;
});

function resizeCanvas() {
	var currHeight = document.documentElement.clientHeight;
	var currWidth = document.documentElement.clientWidth;
	var canvasHeight = 0.8*currHeight;
	var canvasWidth = 0.8*currWidth;
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
}

function drawRect(x1, y1, color) {
	var canvasContent = canvas.getContext('2d');
	canvasContent.fillStyle = color;
	canvasContent.fillRect(x1, y1, 30, 30);
}
