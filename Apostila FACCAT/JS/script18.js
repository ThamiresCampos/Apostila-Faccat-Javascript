let lado1 = parseInt(prompt("Dígite o valor do primeiro lado: "))
let lado2 = parseInt(prompt("Dígite o valor do segundo lado: "))
let lado3 = parseInt(prompt("Dígite o valor do terceiro lado: "))

if ( lado1 + lado2 > lado3 & lado2 + lado3 > lado1 & lado1 + lado3 > lado2){ 
document.write("É possível formar um triâgulo!")

} else {
document.write("Não é possível formar um triâgulo")
} 