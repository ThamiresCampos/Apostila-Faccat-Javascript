//A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de  40  horas  receberá  hora  extra,  cujo  cálculo  é  o  valor  da  hora  regular  com  um  acréscimo  de  50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas). //

function salariofinal(){
    var horatrabalhada = parseInt(prompt("Dígite a quantidade de horas trabalhadas :"));
    var salariohora = parseInt(prompt("Dígite o valor recebido por hora trabalhada :"));

    if (horatrabalhada<=160){
    var salariofinal = horatrabalhada * salariohora;
    alert("O salário final corresponde a : "+salariofinal);
}
    else {
        var horaextra = horatrabalhada - 160;
        var salariohoraextra = (horaextra * salarioextra * 50 / 100) + salariohora * horaextra;
        var salariofinal = salariohoraextra + (160 * salariohora);
        alert("O salário final corresponde a : "+salariofinal)
        }
    }