//Faça  um  algoritmo  para  ler:  quantidade  atual  em  estoque,  quantidade  máxima  em  estoque  e quantidade  mínima  em  estoque  de  um  produto.  Calcular  e  escrever  a  quantidade  média  ((quantidade média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual a  quantidade  média  escrever  a  mensagem  'Não  efetuar  compra',  senão  escrever  a  mensagem  'Efetuar compra'. //

var quantidadeAtual =parseInt (prompt("Quantidade do estoque atualmente : "));
var quantidadeMaxima=parseInt(prompt("Capacidade máxima do estoque : "));
var quantidadeMinima=parseInt(prompt("Capacidade mínima do estoque : "));

var quantidadeMedia= (quantidadeMaxima + quantidadeMinima) / 2;
document.write("A capacidade média do estoque é de : "+quantidadeMedia);


if (quantidadeMedia >= 0) {
    document.write("Não efetuar compra");

}
else {
    document.write("Efetuar compra");
}