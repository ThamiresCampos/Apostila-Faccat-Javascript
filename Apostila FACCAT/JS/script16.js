function valor() {
    let A=parseInt(prompt("Dígite um valor : "));
    let B=parseInt(prompt("Dígite outro valor : "));
    let C=parseInt(prompt("Dígite mais um valor : "));

    if(A > C && A > B){
        var maior1 = A;
        if (B > C){
            var maior2 = B;
        }else
        var maior2 = C;
    }
    if(B > A && B > C){
        var maior1 = B;
        if (A > C){
            var maior2 = A;
        }else
        var maior2 = C;
    }
    if(C > B && C > A){
        var maior1 = C;
        if (B > A){
            var maior2 = B;
        }else
        var maior2 = A;
    }

        var soma= maior1 + maior2
    alert("A soma dos dois maiores valores é de : "+soma)
}
;