const prompt = require("prompt-sync")();

let time = [];
let continuar = true;

while (continuar === true) {
    let opcao = prompt("Digite sua opção: 1 (cadastrar), 2 (deletar) ou 3 (sair): ");

    if (opcao === "1") {
        let nomeJogador = prompt("Digite o nome do jogador: ");

        time.push(nomeJogador);
        console.log("Jogador " + nomeJogador + " cadastrado com sucesso!");
        console.log("O seu time atual é: ", time);

    } else if (opcao === "2") {
        if (time.length === 0) {
            console.log("Nenhum jogador cadastrado.");
            console.log("-------------------------");
        }

        let nomeDeletado = prompt("Digite o nome do jogador que deseja deletar: ");
        let index = time.indexOf(nomeDeletado);

            if (index === -1) {
                console.log("Jogador não encontrado.");
            } else {
                time.splice(index, 1);
                console.log("Jogador " + nomeDeletado + " removido com sucesso!");
            }
            console.log("O seu time atual é: ", time);
            console.log("-------------------------");
        

    } else if (opcao === "3") {
        continuar = false;

    } else {
        console.log("Opção inválida! Tente novamente.");
        console.log("-------------------------");
    }
}