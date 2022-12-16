//Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.//

function valor(){
    var numero1 = parseInt(prompt("Dígite um número :"));
    var numero2 = parseInt(prompt("Dígite mais um número :"));

    if (numero1>numero2){
        alert("O maior número é : "+numero1 + ", e o menor número é : "+numero2);
    } else if (numero2>numero1);{
        alert("o maior número é : "+numero2 + ", e o menor número é : "+numero1);
  
    }
}
