let nota1 = parseInt(prompt("Insira a primeira nota: "));
let nota2 = parseInt(prompt("Insira a segunda nota: "));
let nota3 = parseInt(prompt("Insira a terceira nota: "));

let media = (nota1 + (nota2 * 2) + (nota3 * 3) + 5 ) / 7;

if ( media >= 9) {
    document.write("Tirou A");

} else if (media >= 7.5 ) {
    document.write("Tirou B");

} else if (media >= 6) {
    document.write("Tirou C");

} else {
    document.write("Tirou C");
}