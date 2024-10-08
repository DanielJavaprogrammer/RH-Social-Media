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

document.querySelector(".caju").addEventListener("click", function () {
    location.href = "../code/beneficioCaju.html";
})