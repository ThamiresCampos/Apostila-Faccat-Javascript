// Ler  as  notas  da  1a.  e  2a.  avaliações  de  um  aluno.  Calcular  a  média aritmética  simples  e  escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada.  //

function media(){
    var numero1 = parseFloat(prompt("Coloque a primeira nota :"));
    var numero2 = parseFloat(prompt("Coloque a segunda nota :"));
    var media = (numero1 + numero2) / 2

    if (media>=6){
        alert("Você foi aprovado : "+media);
    }
    else {
        alert("Você foi reprovado : "+media);
    }
}