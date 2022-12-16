let time1 = prompt("Insira o nome do primeiro time: ");
let Goltime1 = parseInt(prompt("Dígite o números de gols do primero time: "));
let time2 = prompt("Insira o nome do segundo time: ");
let Goltime2 = parseInt(prompt("Insira o número de gols do segundo time"));

if (Goltime1 > Goltime2) {
    document.write("O time vencedor é: " + time1 + "<br>");

} else if (Goltime2 > Goltime1) {
    document.write("O time vencedor é: " + time2 + "<br>");

} else { 
    document.write("Houve empate: " + Goltime1 + " a " + Goltime2);
}