const prompt = require("prompt-sync")();

let continuar = true;

while (continuar === true) {
    let novoUsuario = prompt ("Digite o nome do usuário (ou 'sair'): ");

    if (novoUsuario === "sair") {
        continuar = false;
    }
    else {
        console.log("Usuário " + novoUsuario + " cadastrado com sucesso!");
    }
}
