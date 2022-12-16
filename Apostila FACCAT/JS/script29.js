let codigo = parseInt(prompt("Dígite seu número: "));
let nascimento = parseInt(prompt("Insira o ano que nasceu: "));
let empresa = parseInt(prompt("Insira o ano que entrou na empresa: "));
let anoEstamos = parseInt(prompt("Dígite o ano em que estamos: "));

let idade = anoEstamos - nascimento;
let ano = anoEstamos - empresa


if (idade >= 65) {
    document.write("A sua idade é: "+idade + "<br>");
    document.write("Requerer Aposentadoria por idade");

} else if (ano >= 30) {
    document.write("Tempo trabalhado na empresa: "+ano + "<br>");
    document.write("Requerer Aposentadoria por tempo de trabalho");

} else {
    document.write("Não requerer aposentadoria");
}