const cssHueVariableName = "--page-hue"

const root = document.documentElement;
root.style.setProperty(cssHueVariableName, generateHueStr());

function generateHueStr() {
	let value = Math.random()*360;
	value = Math.floor(value);
	return value.toString();
}
