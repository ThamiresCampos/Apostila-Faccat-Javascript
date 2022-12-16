let nome = String(prompt("Digite o nome do produto: "));
let quantidade = parseInt(prompt("Insira a quantidade comprada: "));
let precoUnitario = parseInt(prompt("Insira o preço do produto: "));

let total = quantidade * precoUnitario

if (quantidade <= 5) {
    let desconto = total - 0.02
    document.write("O valor a pagar é: "+desconto)

} else if (quantidade > 5 && quantidade <= 10) {
    let desconto = total - 0.03
    document.write("O valor a pagar é: "+desconto)

} else if (quantidade > 10) {
    let desconto = total - 0.05
    alert("O valor a pagar é: "+desconto);

}
