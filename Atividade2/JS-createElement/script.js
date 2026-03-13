let titulo = document.querySelector(".titulo");
let botao = document.createElement("button");

botao.textContent = "Clique";

document.body.appendChild(botao);

botao.addEventListener("click", function(){

    if(titulo.style.display === "none"){
        titulo.style.display = "block";
    }
    else{
        titulo.style.display = "none";
    }

});