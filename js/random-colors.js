// PROGRAMA RANDOM COLOR

// AUTHOR: MARELY

/**
 * The JavaScript code generates 150 random colored squares when a button is clicked.
 * @param inferior - The `inferior` parameter in the `random_color` function represents the lower limit
 * of the range from which a random color component (red, green, or blue) is generated. In this case,
 * it is used to specify the minimum value for the RGB color components (0 for minimum intensity).
 * @param superior - The `superior` parameter in the `random_color` function represents the upper limit
 * for generating a random color value. In this case, it is used to specify the maximum value for the
 * RGB color components (red, green, blue) which range from 0 to 255.
 * @returns The code provided is a JavaScript code snippet that generates 150 square div elements with
 * random background colors when a button with the id "btn-color" is clicked. The colors are generated
 * using the `random_color` function which generates random RGB values within the specified range. The
 * `create_square` function is responsible for creating the square div elements with random colors and
 * appending them to an element with the id "
 */



function random_color(inferior, superior) {
	let numPosibilidades = superior - inferior;
	let aleatorio = Math.random() * numPosibilidades;
	aleatorio = Math.floor(aleatorio);
	return parseInt(inferior) + aleatorio;
}

function create_square() {
	let i = 0;
	while (i < 150) {
		const r = random_color(0, 255);
		const g = random_color(0, 255);
		const b = random_color(0, 255);
		const colorRGB = `rgb(${r}, ${g}, ${b})`;
		let square = `<div id="id-square" class="m-1" style="height: 100px; width: 100px; background-color:${colorRGB};"></div>`;
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

