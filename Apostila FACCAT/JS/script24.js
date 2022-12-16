let kgmaca = parseInt(prompt("Digite o Kg de maçãs comprados: "));
let kgmora = parseInt(prompt("Digite  o Kg de morangos comprados: "));

let preco1ma = kgmora * 2.50;
let preco1mo = kgmaca * 1.80;
let preco2ma = kgmora * 2.20;
let preco2mo = kgmaca * 1.50;
let total2 = preco2ma + preco2mo;
let total1 = preco1ma + preco1mo;

if (kgmora <= 5 & kgmaca <= 5) {
    document.write("o preço total é R$ " + total1)
} else if (total2 >= 25) {
    let desconto = total2 * 0.1;
    let vfinal = total2 - desconto;
    document.write("o preço total é R$ " + vfinal)
} else if (kgmora > 5 & kgmaca > 5 & kgmaca < 8 & kgmora < 8) {
    document.write("o preço total é R$ " + total2)
} else if (kgmaca > 8 & kgmora > 8) {
    let desconto = total2 * 0.1;
    let vfinal = total2 - desconto;
    document.write("o preço total é R$ " + vfinal)
}