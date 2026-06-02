// Função para mostrar informação extra
const botaoMensagem = document.getElementById("mostrarMensagem");

botaoMensagem.addEventListener("click", () => {
    document.getElementById("mensagem").style.display = "block";
});

// Função do modo escuro
const modoEscuro = document.getElementById("modoEscuro");

modoEscuro.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Função para exibir comentário
const enviar = document.getElementById("enviar");

enviar.addEventListener("click", () => {

    let nome = document.getElementById("nome").value;
    let comentario = document.getElementById("comentario").value;

    document.getElementById("resultado").innerText =
        nome + " comentou: " + comentario;
});