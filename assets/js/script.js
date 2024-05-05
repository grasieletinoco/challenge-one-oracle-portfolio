function validarForm() {
    var nome = document.getElementById("nome").value.trim();
    var email = document.getElementById("email").value.trim();
    var mensagem = document.getElementById("mensagem").value.trim();
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nome === "" && email === "" && mensagem === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
    }

    if (nome === "") {
        document.getElementById("errorNome").innerText = "Por favor, insira seu nome.";
        document.getElementById("errorNome").style.display = "block";
    } else {
        document.getElementById("errorNome").innerText = "";
        document.getElementById("errorNome").style.display = "none";
    }

    if (email === "") {
        document.getElementById("errorEmail").innerText = "Por favor, insira seu email.";
        document.getElementById("errorEmail").style.display = "block";
    } else if (!emailRegex.test(email)) {
        document.getElementById("errorEmail").innerText = "Por favor, insira um email válido.";
        document.getElementById("errorEmail").style.display = "block";
    } else {
        document.getElementById("errorEmail").innerText = "";
        document.getElementById("errorEmail").style.display = "none";
    }

    if (mensagem === "") {
        document.getElementById("errorMensagem").innerText = "Por favor, insira sua mensagem.";
        document.getElementById("errorMensagem").style.display = "block";
    } else {
        document.getElementById("errorMensagem").innerText = "";
        document.getElementById("errorMensagem").style.display = "none";
    }

    if (nome === "" || email === "" || mensagem === "" || !emailRegex.test(email)) {
        return;
    }

    alert("Formulário Enviado com Sucesso!");
    document.getElementById("myForm").reset();
    
}


function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show-menu");
}