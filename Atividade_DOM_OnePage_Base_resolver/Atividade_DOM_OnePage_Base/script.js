function trocarCor(cor) {
  document.body.style.backgroundColor = cor;
}

function corOriginal() {
  document.body.style.backgroundColor = '#f4f6f8';
  document.body.style.color = '#1f2937';
}

function modoCE() {
document.body.style.backgroundColor = "";

  document.body.classList.toggle("escuro");

  const botao = document.querySelector("#btnTema");

  if (document.body.classList.contains("escuro")) {
    botao.innerText = "☀️ Modo Claro";
  } else {
    botao.innerText = "🌙 Modo Escuro";
  }
}

function validar() {
    let nome = document.getElementById("nomePerfil").value.trim();
    let email = document.getElementById("emailPerfil").value.trim();
    let senha = document.getElementById("senha").value;
    let confirma = document.getElementById("confimarSenha").value;
    let mensagem = document.getElementById("validacao");

    if (nome === "") {
        mensagem.innerText = "Insira um nome.";
        mensagem.style.color = "#ff0000";
    } else if (email === "") {
        mensagem.innerText = "Insira um email.";
        mensagem.style.color = "#ff0000";
    } else if (senha.length < 6) {
        mensagem.innerText = "Sua senha tem menos de 6 dígitos.";
        mensagem.style.color = "#ff0000";
    } else if (senha !== confirma) {
        mensagem.innerText = "Sua senha em confimar senha, não é igual a senha digitada.";
        mensagem.style.color = "#ff0000";
    } else {
        mensagem.innerText = "Seu cadastro foi finalizado!.";
        mensagem.style.color = "#00ff00";

        document.getElementById("formPerfil").reset();
    }
}