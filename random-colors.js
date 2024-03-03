/**
 * The JavaScript code generates 150 colored squares with random RGB values when a button is clicked.
 * @param inferior - The `inferior` parameter in the `aleatorio` function represents the lower bound of
 * the range from which a random number will be generated. In this case, it is used to specify the
 * lower limit for generating random RGB values for the color of the squares in the `create_square`
 * function.
 * @param superior - The `superior` parameter in the `aleatorio` function represents the upper limit of
 * the range from which a random number will be generated. In the context of the provided code, it is
 * used to specify the maximum value for the RGB color components (red, green, blue) when creating
 * random
 * @returns The code provided is a JavaScript function that generates a random number within a
 * specified range and creates 150 colored squares with random RGB colors. When the button with the id
 * "bt-color" is clicked, it empties the container with the id "box-square" and calls the
 * `create_square()` function to generate new colored squares.
 */
function aleatorio(inferior, superior) {
	let numPosibilidades = superior - inferior;
	let aleatorio = Math.random() * numPosibilidades;
	aleatorio = Math.floor(aleatorio);
	return parseInt(inferior) + aleatorio;
}

function create_square() {
	let i = 0;
	while (i < 150) {
		const r = aleatorio(0, 255);
		const g = aleatorio(0, 255);
		const b = aleatorio(0, 255);
		const colorRGB = `rgb(${r}, ${g}, ${b})`;
		let square = `<div style="height: 100px; width: 100px; background-color:${colorRGB};"></div>`;
		$("#box-square").append(square);
		i++;
	}
}

$(document).ready(function () {
	$("#btn-color").on("click", function () {
		$("#box-square").empty();
		create_square();
	});
});
