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


// Simulação de dados de nova postagem
const novaPostagem = {
    usuario: "João Silva",
    descricao: "Novo Evento de Inovação",
    texto: "Nos dias 20 e 21 de outubro, teremos o evento de inovação com várias palestras e oficinas.",
    imagem: "../assets/fotos/evento-inovacao.jpeg",
    tempo: "Há 1h"
};

// Função para criar a estrutura de uma nova postagem
function criarPostagem(dados) {
    // Cria o container da postagem
    const postDiv = document.createElement('div');
    postDiv.classList.add('div1');

    // Adiciona a estrutura HTML da postagem
    postDiv.innerHTML = `
        <div class="post">
            <div class="usuario">
                <div class="usuario_dados">
                    <div class="usuario-foto">
                        <img src="../assets/fotos/avatar.png" alt="avatar">
                    </div>
                    <div class="avatar-texto">
                        <p>${dados.usuario}</p>
                        <span>People Design</span>
                    </div>
                </div>
                <div class="usuario-data-postagem">
                    <span>${dados.tempo}</span>
                </div>
            </div>
            <div class="div1-postagem">
                <div class="postagem-text">
                    <p>${dados.descricao}</p>
                    <p>${dados.texto}</p>
                </div>
                <div class="postagem-imagem">
                    <div class="post-imagem">
                        <img src="${dados.imagem}" alt="imagem-promoção">
                    </div>
                </div>
            </div>
            <div class="post-curtidas">
                <input type="checkbox" id="check-like">
                <label for="check-like">
                    <img src="../assets/icons/coracao.png" alt="icone coração" id="img1">
                    <img src="../assets/icons/coracao (1).png" alt="icone coração likado" id="img2">
                </label>
                <span>Curtir</span>
            </div>
        </div>
    `;

    // Insere a nova postagem dentro do container de publicações
    document.getElementById('publicacoes').appendChild(postDiv);
}

// Chama a função para criar e adicionar a nova postagem
criarPostagem(novaPostagem);
