/* ELEMENTOS*/

const botonSorpresa =
document.getElementById("botonSorpresa");

const inicio =
document.getElementById("inicio");

const sorpresa =
document.getElementById("sorpresa");

const botonCarta =
document.getElementById("botonCarta");

const dedicatoria =
document.getElementById("dedicatoria");

const botonPastel =
document.getElementById("botonPastel");

const pastel =
document.getElementById("pastel");

const botonVelas =
document.getElementById("botonVelas");

const velas =
document.querySelector(".velas");

const mensajeVelas =
document.getElementById("mensajeVelas");


const agradecimiento =
document.getElementById("agradecimiento");

/* BOTON  DE SORPRESA*/

botonSorpresa.addEventListener("click", function() {

    inicio.style.display =
    "none";

    sorpresa.classList.add("mostrar");

    crearConfeti();

});

/* BOTON DE LA CARTA*/

botonCarta.addEventListener("click", function() {

    sorpresa.style.display =
    "none";

    dedicatoria.classList.add("mostrar");
});

/* BOTON DE PASTEL*/

botonPastel.addEventListener("click", function() {

    dedicatoria.style.display =
    "none";

    pastel.classList.add("mostrar");
})


/* BOTON  VELAS*/

botonVelas.addEventListener("click", function() {

    const llamas =
    document.querySelectorAll(".llama");

    llamas.forEach(function(llama) {

        llama.style.display =
        "none";
    });

    mensajeVelas.style.display =
    "block";

    crearConfeti();

    setTimeout(function() {

        pastel.style.display =
        "none";

        agradecimiento.classList.add("mostrar");

    }, 3000);
});



/* FUNCION DEL CONFETI*/

function crearConfeti() {
    const simbolos = ["🎉", "🎊", "✨", "💖"];

    for (let i = 0; i < 40; i++)
    {

        const confeti =
        document.createElement("div");

        confeti.classList.add("confeti");

            confeti.textContent =

            simbolos[Math.floor(Math.random() * simbolos.length)];

            confeti.style.left =
            Math.random() * 100
            + "vw";

            confeti.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

            document.body.appendChild(confeti);
    }
}










