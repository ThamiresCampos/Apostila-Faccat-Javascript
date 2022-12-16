let A = parseFloat(prompt("Digite o valor do primeiro lado: "));
let B = parseFloat(prompt("Digite o valor do segundo lado: "));
let C = parseFloat(prompt("Digite o valor do terceiro lado: "));

if (A < B + C & B < A + C & C < A + B) {
    if (A == B & B == C) {
        let mens = "Triângulo Equilátero";
    } else if (A == B & B == C & A == C) {
        let mens = "Triângulo Isósceles";
    } else {
        let mens = "Triângulo Escaleno";
    }
} else {
    let mens = "Triângulo Escaleno";
}

document.write(mens);