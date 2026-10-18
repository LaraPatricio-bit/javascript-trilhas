const prompt = require("prompt-sync")();

let time = [];
let continuar = true;

function mostrarMenu() {
    console.log("Escolha uma opção:");
    console.log("1 - Cadastrar jogador");
    console.log("2 - Deletar jogador");
    console.log("3 - Mostrar equipe");
    console.log("4 - Sair");
    console.log("\n");
}

function mostraEquipe () {
    console.log("-------------------------");
    console.log("Minha equipe atual é:", time);
    console.log("-------------------------");
}

function cadastrarJogador () {
    let nomeJogador = prompt("Digite o nome do jogador: ");

    time.push(nomeJogador);
    console.log("Jogador " + nomeJogador + " cadastrado com sucesso!");
}

function deletarJogador () {
    if (time.length === 0) {
            console.log("Nenhum jogador cadastrado");
            return;
        }

        let nomeDeletado = prompt("Digite o nome do jogador que deseja deletar: ");
        let index = time.indexOf(nomeDeletado);

        if (index === -1) {
            console.log("Jogador não encontrado");
            return;
        }

        time.splice(index, 1);
        console.log("O seu time atual é: ", time);
    }

while (continuar === true) {
    mostrarMenu();
    let opcao = prompt ("Digite sua opção: ");

    if (opcao === "1") {
        cadastrarJogador();
    } 
    else if (opcao === "2") {
        deletarJogador();
    }
    else if (opcao === "3") {
        mostraEquipe();
    }
    else if (opcao === "4") {
        continuar = false;
    }
    else {
        console.log("Opção inválida! Tente novamente.");
    }
}