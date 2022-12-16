//As  maçãs  custam  R$  1,30  cada  se  forem  compradas  menos  de  uma  dúzia, e  R$  1,00  se  forem compradas  pelo  menos  12.  Escreva  um  programa  que  leia  o  número  de  maçãs  compradas,  calcule  e escreva o custo total da compra.//

function maça(){
    var quantidade = parseFloat(prompt("Quantidade de maçãs compradas :"));
    
    if (maça>=12){
        var total = parseFloat(prompt("O total será de :"+maça*1.00));
    }
    else {
        var total = parseFloat(prompt("O total será de :" +maça*1.30));
        }
}