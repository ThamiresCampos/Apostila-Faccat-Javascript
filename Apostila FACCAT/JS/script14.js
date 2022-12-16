//Ler um valor e escrever se é positivo, negativo ou zero.//
function valor() {
let valor=prompt("Dígite um valor");

if (valor < 0){
    alert("O valor é negativo");
}
else if( valor == 0){
    alert("O valor é igual a zero");
}
else{
    alert("O valor é positivo");
}
}
