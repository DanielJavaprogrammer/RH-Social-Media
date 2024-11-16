// Script para abrir e fechar menu no modo mobile
document.querySelector("#icone-abrir").addEventListener("click", function () {
    const menu = document.querySelector("nav#mobile #mobile_menu");

    if (menu.style.opacity != "1") {
        menu.style.opacity = "1";
        menu.style.pointerEvents = "all";
    } else {
        menu.style.opacity = "0";
        menu.style.pointerEvents = "none";
    }
});

// Seleciona as imagens e o modal
const images = document.querySelectorAll("img");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const fecharModal = document.getElementById("fechar");

// Adiciona o evento de clique em cada imagem
images.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex"; // Mostra o modal
        modalImage.src = img.src; // Define a imagem no modal
    });
});

// Fecha o modal ao clicar no "x"
fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fecha o modal ao clicar fora da imagem
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Script para abrir a janela do Caju
document.querySelector(".caju").addEventListener("click", function () {
    location.href = "../code/beneficioCaju.html";
});

const conexa = document.querySelector(".conexa");
conexa.addEventListener("click", () => {
    location.href = "../code/beneficioConexa.html";
});

const convenio = document.querySelector('.convenio');
convenio.addEventListener("click", () => {
    location.href = "../code/beneficioConvenio.html";
});

const wellhub = document.querySelector(".gym-pass");
wellhub.addEventListener("click", () => {
    location.href = "../code/beneficioGymPass.html";
});


