let numero1 = parseInt(prompt("Insira um valor: "));
let numero2 = parseInt(prompt("Insira outro valor: "));
let numero3 = parseInt(prompt("Insira mais um valor: "));

if (numero1 < numero2 & numero1 < numero3) {
    var menor = numero1
    if (numero2 < numero3) {
        var meio = numero2;
        var maior = numero3;
    } else {
        var meio = numero3;
        var maior = numero2;
    }
}
if (numero2 < numero1 & numero2 < numero3) {
    var menor = numero2
    if (numero1 < numero3) {
        var meio = numero1;
        var maior = numero3;
    } else {
        var meio = numero3;
        var maior = numero1;
    }
}
if (numero3 < numero1 & numero3 < numero2) {
    var menor = numero3
    if (numero1 < numero2) {
        var meio = numero1;
        var maior = numero2;
    } else {
        var meio = numero2;
        var maior = numero1;
    }
}
if (numero1 == numero2 & numero1 == numero3) {
    var menor = numero1;
    if (numero2 > numero3) {
        var meio = numero2;
        var maior = numero3;
    } else {
        var meio = numero3;
        var maior = numero2;
    }
}
document.write(menor + "-" + meio + "-" + maior)