//Faça um  algoritmo para ler: número da  conta do cliente, saldo, débito e  crédito. Após,  calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. //

function saldo() {
    var conta = parseInt(prompt("Digite o numero da sua conta: "));
    var saldo = parseFloat(prompt("Digte o valor do saldo: "));
    var debito = parseFloat(prompt("Digite o valor do debito: "));
    var credito = parseFloat(prompt("Digite o valor do credito: "));

    var atual = saldo - debito + credito;

    if (atual > 0) {
        document.write("Saldo Positivo!");
    }
    else {
        document.write("Saldo Invalido!");
    }

}
