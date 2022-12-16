let combustivel = String(prompt("Qual combustivel deseja abastecer? [a/g]; "));
let litros = parseFloat(prompt("Quantos litros deseja abastecer? "));


if (combustivel == "a" && litros <= 20) {
    var desconto = 3.30 - 0.03;
    var preco = litros - desconto;
   

} else if (combustivel == "a" && litros > 20) {
    var desconto = 3.30 - 0.05;
    var preco = litros - desconto;

} else if (combustivel == "g" && litros <= 20) {
    var desconto = 2.90 - 0.04;
    var preco = litros - desconto;
 

} else if (combustivel == "g" && litros > 20) {
    var desconto = 2.90 - 0.06;
    var preco = litros - desconto;
   

}
document.write("O valor a ser pago é de: "+preco);
