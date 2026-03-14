/*
    Exercício 2

Crie variável:
 - nota


Se:
 -nota ≥ 7 → Aprovado
 -nota ≥ 5 → Recuperação
 - senão → Reprovado
*/

let nota = 5;

if(nota >= 0){
    if(nota >= 7){
        console.log("Aprovado!!");
    }else if(nota >= 5){
        console.log("Recuperação!!");
    }else{
        console.log("Reprovado!!");
    }
}else{
    console.log("Valor inválido!!");
}