//Ler  o  ano  atual  e  o  ano  de  nascimento  de  uma  pessoa.  Escrever  uma mensagem  que  diga  se  ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu). //

function nascimento(){
    var numero = parseInt(prompt("Dígite o ano que vc nasceu :"));
    var nascimento = 2022 - numero

    if (nascimento>=18){
    alert("Você poderá votar : "+nascimento);
    }
    else {
        alert("Você não poderá votar : "+nascimento);
    }
}