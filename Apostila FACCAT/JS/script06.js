//Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. //

function valor(){
    var numero1 = parseInt(prompt("Dígite um valor :"));
    var numero2 = parseInt(prompt("Dígite outro valor :"));

    if (numero1>numero2){
     alert("O maior número é : "+numero1)
    }
    else if (numero2>numero1){
     alert("O maior número é : "+numero2)
    }
    else if(numero1 = numero2){
     alert("Valores iguais não são permitidos :");
    }
}