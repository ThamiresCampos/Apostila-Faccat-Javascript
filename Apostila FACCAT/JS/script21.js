let x = parseInt(prompt("Dígite um número: "))
let y = parseInt(prompt("Dígite mais um número: "))
let z = (x * y) + 5

if (z <= 0 ) {
document.write("Resposta A");
} 
else if (z <= 100) {
    document.write("Resposta B")
} else {
document.write("Resposta C");
}
