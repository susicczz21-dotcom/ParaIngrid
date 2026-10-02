function mostrarAmor() {

    let nombre = document.getElementById("nombre").value;

    if (nombre.trim() === "") {
        alert("Primero escribe tu nombre ❤️");
        return;
    }

    let corazon = document.getElementById("corazon");
    let mensaje = document.getElementById("mensaje");

    // Ocultamos la entrada después de continuar
    document.getElementById("nombre").style.display = "none";
    document.querySelector("button").style.display = "none";

    // Forma del corazón
    let lineas = [
    "   ♥♥♥     ♥♥♥   ",
    " ♥♥♥♥♥♥♥ ♥♥♥♥♥♥♥ ",
    "♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥",
    " ♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥ ",
    "  ♥♥♥♥♥♥♥♥♥♥♥♥♥  ",
    "   ♥♥♥♥♥♥♥♥♥♥♥   ",
    "    ♥♥♥♥♥♥♥♥♥    ",
    "     ♥♥♥♥♥♥♥     ",
    "      ♥♥♥♥♥      ",
    "       ♥♥♥       ",
    "        ♥        ",
];

    let i = 0;

    let animacion = setInterval(function() {

        corazon.textContent += lineas[i] + "\n";

        i++;

        if (i === lineas.length) {
            clearInterval(animacion);

            mensaje.textContent =
                "Mi amor por ti es infinito e inefable ❤️";
        }

    }, 180);
}