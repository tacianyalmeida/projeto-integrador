function validaFormulario(){
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const endereco = document.getElementById("endereco").value;
  const telefone = document.getElementById("telefone").value;

 // Validação de campos vazios
 if(nome == '' || email == '' || endereco == '' || telefone == ''){
  alert("Por favor, preencha todos os campos vazios")
  return
} 

// Validação do campo de email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(!emailRegex.test(email)){
  alert("Digite um e-mail válido!")
  return
}

// Validação tamanho da senha
if(telefone < 10 || telefone > 10){
  alert("O telefone não pode ter mais nem menos que 10 caracteres!")
  return
}

alert("O cadastro foi realizado com sucesso")
}


