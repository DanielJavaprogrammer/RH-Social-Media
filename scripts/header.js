// Script para abrir e fechar menu no modo mobile
document.querySelector("#icone-abrir").addEventListener("click", function () {
    const menu = document.querySelector("nav#mobile #mobile_menu")

    if (menu.style.opacity != "1") {
        menu.style.opacity = "1";
        menu.style.pointerEvents = "all";
    } else {
        menu.style.opacity = "0";
        menu.style.pointerEvents = "none";
    }
})

// Script para abrir a janela do Caju
document.querySelector(".caju").addEventListener("click", function () {
    location.href = "../code/beneficioCaju.html";
})

const conexa = document.querySelector(".conexa");

conexa.addEventListener("click",() =>{
    location.href = "../code/beneficioConexa.html";
})

