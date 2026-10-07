const boton = document.getElementById("btn_color");
const contenedor = document.getElementById("contenedor");
boton.addEventListener("click", function () {
    contenedor.classList.toggle("colores-nuevos");
    if (contenedor.classList.contains("colores-nuevos")) {
        boton.textContent = "Regresar colores";
    } else {
        boton.textContent = "Cambiar colores";
    }
});