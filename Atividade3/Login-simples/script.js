let botao = document.querySelector(".btn");
let TruePassword = 1234;

botao.addEventListener("click", function(){
    let senha = document.querySelector("#senha").value;

    if(senha == TruePassword){
        alert("Bem vindo!!");
        console.log("Acesso permitido!");
    }else{
        alert("Senha incorreta!!");
        console.log("Acesso negado!");
    }
});