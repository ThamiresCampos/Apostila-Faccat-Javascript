function valor() {
    let A=parseInt(prompt("Insira o primeiro valor :"));
    let B=parseInt(prompt("Insira o segundo valor :"));
    let C=parseInt(prompt("Insira o terceiro valor :"));

    if (A > B && A > C)   {
        alert("O maior valor : "+A);
    }
    else if (B > C && B > A) {
        alert("O maior valor : "+B);
    }
    else{
        alert("O maior valor : "+C);
    }
}