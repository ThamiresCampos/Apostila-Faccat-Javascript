//Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele  recebe  uma  comissão  de  3%  sobre  o  total  das  vendas  até  R$  1.500,00  mais  5%  sobre  o  que ultrapassar este valor, calcular e escrever o seu salário total. //

function salarioTotal() {
    var salario = parseFloat(prompt("Digite o seu salario fixo: R$ "));
    var vendas = parseFloat(prompt("Dige o valor das vendas efetuada: R$ "));
 
    if (vendas >= 1.500,00) {
         var comissao = vendas + (salario + vendas * 5 / 100);
         document.write("O seu salario como o acressimo da comissão das vendas é: R$ " + comissao);
    }
    else{
     var comissao = vendas + ( salario + vendas * 3 / 100);
     document.write("O seu salario mais o acressimo da comissão das vendas é: R$ " + comissao );
    };
 };