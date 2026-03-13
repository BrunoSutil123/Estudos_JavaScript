let botao = document.querySelector(".btn");
let titulo = document.querySelector(".titulo");

botao.addEventListener("click", function(){
    titulo.textContent = "Mudando o título!!"
    titulo.style.color = "red";
});