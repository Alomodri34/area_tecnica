/*=========================================
    MODAL DEL VIDEO
=========================================*/

const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrar");
const video = document.getElementById("videoInicio");

if (cerrar) {
    cerrar.addEventListener("click", () => {

        if (video) {
            video.pause();
            video.currentTime = 0;
        }

        modal.style.display = "none";

    });
}

if (video) {

    video.addEventListener("ended", () => {

        modal.style.display = "none";

    });

}

/*=========================================
    ANIMACIÓN AL HACER SCROLL
=========================================*/

const elementos = document.querySelectorAll(".reveal");

function mostrarElementos() {

    const alturaPantalla = window.innerHeight;

    elementos.forEach((elemento) => {

        const posicion = elemento.getBoundingClientRect().top;

        if (posicion < alturaPantalla - 100) {

            elemento.classList.add("active");

        }

    });

}

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();

/*=========================================
    BOTÓN VOLVER ARRIBA
=========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================
    EFECTO NAVBAR AL HACER SCROLL
=========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(255,255,255,.95)";
        navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";

    } else {

        navbar.style.background = "rgba(255,255,255,.75)";
        navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,.08)";

    }

});

/*=========================================
    EFECTO HOVER EN TARJETAS
=========================================*/

const tarjetas = document.querySelectorAll(".card, .item");

tarjetas.forEach((tarjeta) => {

    tarjeta.addEventListener("mouseenter", () => {

        tarjeta.style.transform = "translateY(-10px) scale(1.02)";

    });

    tarjeta.addEventListener("mouseleave", () => {

        tarjeta.style.transform = "translateY(0) scale(1)";

    });

});

/*=========================================
    LIGHTBOX PARA GALERÍA
    (Funciona automáticamente si existe
    un contenedor con class="gallery")
=========================================*/

const imagenes = document.querySelectorAll(".gallery img");

imagenes.forEach((imagen) => {

    imagen.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,.9)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.cursor = "pointer";
        overlay.style.zIndex = "99999";

        const imgGrande = document.createElement("img");

        imgGrande.src = imagen.src;
        imgGrande.style.maxWidth = "90%";
        imgGrande.style.maxHeight = "90%";
        imgGrande.style.borderRadius = "15px";
        imgGrande.style.boxShadow = "0 0 30px rgba(255,255,255,.2)";

        overlay.appendChild(imgGrande);

        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {

            overlay.remove();

        });

    });

});

