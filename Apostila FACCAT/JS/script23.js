let mulher1 = parseInt(prompt("Insira a idade da primeira mulher: "));
let homem1 = parseInt(prompt("Insira a idade da segunda mulher: "));
let mulher2 = parseInt(prompt("Insira a idade do primeiro homem: "));
let homem2 = parseInt(prompt("Insira a idade do segundo homem: "));

if (mulher1 > mulher2) {
    var mulherMVelha = mulher1
    var mulherMNova = mulher2

} else if (mulher2 > mulher1) {
    var mulherMVelha = mulher2
    var mulherMNova = mulher1

} if (homem1 > homem2) {
    var homemMVelho = homem1
    var homemMNovo = homem2

} else {
    var homemMVelho = homem2
    var homemMNovo = homem1
}

let soma = mulherMVelha + homemMNovo
let produto = homemMVelho * mulherMNova

document.write("A soma das idades da mulher mais velha com o homem mais novo: "+ soma + "<br>");
document.write("O produto da idade da mulher mais nova com o homem mais velho: "+ produto + "<br>");
document.write("Idade da primeira mulher: " + mulher1 + "<br>");
document.write("Idade da segunda mulher: " + mulher2 + "<br>");
document.write("Idade do primeiro homem: " + homem1 + "<br>");
document.write("Idade do segundo homem: " + homem2 + "<br>");