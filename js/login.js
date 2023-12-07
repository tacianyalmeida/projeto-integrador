function validaCadastro(){
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha01 = document.getElementById('senha01').value;

    //Validação dos campos vazios
    if(nome === "" || email === "" || senha01 === "" || senha02 === ""){
        alert("ERRO..:\nDigite o que é solicitado.")
        return
    }
    //Validação da extesão da senha
    if(senha01.lenght > 8){
        alert("ERRO..:\nA senha deve conter 8 ou mais caracteres.")
        return
    }

    //Validação do campo de email
    const nomeRegex = /[0-9]/
    if (!nomeRegex.test(nome)){
        alert("ERRO...:\na barra 'nome' deve conter somente letras.")
        return
    }

    //Validação do campo de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]=$/
    if (!emailRegex.test(email)) {
        alert("ERRO...:\nE-mail digitado não é válido")
        return
    }
    alert("Cadastro realizado com sucesso.")
}