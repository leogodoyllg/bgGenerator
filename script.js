const h3 = document.querySelector("h3");
const [color1, color2] = document.querySelectorAll(".color");
const body = document.querySelector("body");
const btn = document.querySelector("button");
const charHEX = "0123456789ABCDEF";


const changeColorValues = () => {
	color1.value = genRandomHEXColor();
	color2.value = genRandomHEXColor();
	changeBGcolor();
}

const genRandomHEXColor = () => {
	let hex = "#";
	for (var i = 0; i < 6; i++) {
		hex += charHEX[Math.floor(Math.random()*16)];
	}
	return hex;
}

const changeBGcolor = () => {
	body.style.background = ` linear-gradient(to right, ${color1.value}, ${color2.value})`;  
	h3.textContent =`background: ${body.style.background}`;
}

changeBGcolor();

btn.addEventListener("click", changeColorValues);
color1.addEventListener("input", changeBGcolor);
color2.addEventListener("input", changeBGcolor);