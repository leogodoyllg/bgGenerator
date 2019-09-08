var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var btn = document.querySelector("button");
var charHEX = "0123456789ABCDEF";
var hex = "#";

function changeColorValues(){
	color1.value = genRandomHEXColor();
	color2.value = genRandomHEXColor();
	console.log("Color 1 HEX: " + color1.value);
	console.log("Color 2 HEX: " + color2.value);
	changeBGcolor();
}

function genRandomHEXColor(){
	hex = "#";
	for (var i = 0; i < 6; i++) {
		hex += charHEX[Math.floor(Math.random()*16)];
	}
	return hex;
}


function changeBGcolor(){
	body.style.background = "linear-gradient(to right, " 
	+ color1.value +", " + color2.value + ")";

	css.textContent ="background: " + body.style.background + ";";
}

changeBGcolor();

btn.addEventListener("click",changeColorValues);

color1.addEventListener("input", changeBGcolor);

color2.addEventListener("input", changeBGcolor);