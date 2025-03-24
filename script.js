document.getElementById("cambiarForma").addEventListener("click", () => {
    let cuerpo = document.querySelector(".cuerpo");
    let cabeza = document.querySelector(".cabeza");
    let brazos = document.querySelectorAll(".brazo");
    let piernas = document.querySelectorAll(".pierna");

    // Tamaños aleatorios para el cuerpo (formas trapezoides normales o invertidas)
    let nuevoAncho = Math.floor(Math.random() * 100) + 80; 
    let nuevoAlto = Math.floor(Math.random() * 120) + 80; 

    let trapezoide1 = Math.floor(Math.random() * 20);
    let trapezoide2 = Math.floor(Math.random() * 20);
    let invertido = Math.random() > 0.5;

    if (invertido) {
        cuerpo.style.clipPath = `polygon(0% 0%, 100% 0%, ${100 - trapezoide1}% 100%, ${trapezoide2}% 100%)`;
    } else {
        cuerpo.style.clipPath = `polygon(${trapezoide1}% 0%, ${100 - trapezoide2}% 0%, 100% 100%, 0% 100%)`;
    }

    cuerpo.style.width = `${nuevoAncho}px`;
    cuerpo.style.height = `${nuevoAlto}px`;

    // Tamaño aleatorio para la cabeza
    let nuevoTamCabeza = Math.floor(Math.random() * 40) + 40; 
    cabeza.style.width = `${nuevoTamCabeza}px`;
    cabeza.style.height = `${nuevoTamCabeza}px`;
    cabeza.style.top = `-${nuevoTamCabeza}px`;

    // Cambio de forma de la cabeza (cuadrado, círculo o triángulo)
    let formas = ["cuadrado", "circulo", "triangulo"];
    let nuevaForma = formas[Math.floor(Math.random() * formas.length)];

    if (nuevaForma === "cuadrado") {
        cabeza.style.borderRadius = "0";
        cabeza.classList.remove("triangulo");
        cabeza.style.backgroundColor = "#ffcc00";
    } else if (nuevaForma === "circulo") {
        cabeza.style.borderRadius = "50%";
        cabeza.classList.remove("triangulo");
        cabeza.style.backgroundColor = "#ffcc00";
    } else {
        cabeza.classList.add("triangulo");
    }

    // Tamaño aleatorio para los brazos (iguales en ambos lados)
    let nuevoLargoBrazos = Math.floor(Math.random() * 30) + 40; // Entre 40px y 70px
    brazos.forEach(brazo => {
        brazo.style.height = `${nuevoLargoBrazos}px`;
    });

    // Cambio de tamaño y grosor de las piernas (iguales en ambas)
    let nuevoGrosorPiernas = Math.floor(Math.random() * 15) + 10; // Entre 10px y 25px de grosor
    let nuevoLargoPiernas = Math.floor(Math.random() * 30) + 50; // Entre 50px y 80px de altura

    piernas.forEach(pierna => {
        pierna.style.width = `${nuevoGrosorPiernas}px`;
        pierna.style.height = `${nuevoLargoPiernas}px`;
    });
});