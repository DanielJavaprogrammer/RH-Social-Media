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
const images = document.querySelectorAll("main img");
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

//Botao de like
const button = document.querySelector('#like');
const number = document.querySelector('#number');

button.addEventListener('click', () => {
  let likeValue = document.querySelector('#number').textContent;
  let newValue = Number(likeValue) + 1;
  button.classList.add('like');
  number.innerHTML = newValue;
});