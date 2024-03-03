function aleatorio(inferior, superior) {
    let numPosibilidades = superior - inferior;
    let aleatorio = Math.random() * numPosibilidades;
    aleatorio = Math.floor(aleatorio);
    return parseInt(inferior) + aleatorio;
}

function crea_colores() {
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
    $("#bt-color").on("click", function () {
        // Lógica para cada clic en el botón
        $("#box-square").empty();
        console.log("Botón presionado");
        crea_colores();
    });
});
