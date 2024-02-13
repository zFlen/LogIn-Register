document.getElementById("btn_registro").addEventListener("click", register);
document.getElementById("btn_inicio").addEventListener("click", iniciaSesion);

// Variables
var container2 = document.querySelector(".container-2")
var iniciaSesion = document.querySelector(".iniciaSesion")
var register = document.querySelector(".registro")
var fondo_inicio = document.querySelector(".fondo-iniciar")
var fondo_registro = document.querySelector(".fondo-registro")


function register() {
    register.style.display = "block";
    container2.style.left = "557px";
    iniciaSesion.style.display = "none";
    fondo_registro.style.opacity = "0";
    fondo_inicio.style.opacity = "1";
}

function iniciaSesion() {
    iniciaSesion.style.display = "block";
    container2.style.left = "0";
    register.style.display = "none";
    fondo_registro.style.opacity = "1";
    fondo_inicio.style.opacity = "0";
}