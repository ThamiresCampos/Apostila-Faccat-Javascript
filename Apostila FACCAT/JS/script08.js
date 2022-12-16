//Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. //

function duração(){
    var inicio = parseInt(prompt("Dígite o horário do inicio da partida :"));
    var fim = parseInt(prompt("Dígite o horário final da partida :"));
    var duração = fim - inicio;

    if (duração<0){
        var duração = duração + 24
        alert("A duração do jogo foi de : "+duração);
    } 
    else {
        alert("A duração do jogo foi de ; "+duração);
        
    }
}