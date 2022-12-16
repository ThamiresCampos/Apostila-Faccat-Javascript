let senhaCerta = 9999;
let codigoCerto = 1234;

let codigo = parseInt(prompt("Insira o código"));

if (codigo == codigoCerto) {
    document.write("Usuário inválido")
} else { 
    let senha = parseInt(prompt("Insira sua senha: "));
    if (senha != senhaCerta) {
        document.write("Senha inválida");
    
    } else {
        document.write("Acesso permitido");
    }
}