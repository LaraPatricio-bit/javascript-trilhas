const prompt = require("prompt-sync")();

let time = [];
let continuar = true;

function mostrarMenu() {
    console.log("\n====================");
    console.log("Escolha uma opção:");
    console.log("1 - Cadastrar jogador");
    console.log("2 - Deletar jogador");
    console.log("3 - Mostrar equipe");
    console.log("4 - Calcúlo de média da equipe");
    console.log("5 - Atualizar pontos");
    console.log("6 - Sair");
    console.log("=====================");
    console.log("\n");
}

function mostraEquipe () {
    if (time.length === 0) {
            return;
        }
        for (let i = 0; i < time.length; i++) {
            let jogador = time[i];
            console.log((i + 1) + ". " + jogador.nome + " | Função: " + jogador.funcao + " | Pontuação: " + jogador.pontuacao);
}
}

function cadastrarJogador () {
    let nomeJogador = prompt("Digite o nome do jogador: ");
    let funcaoJogador = prompt("Digite a função do jogador: ");
    let pontuacaoJogador = Number(prompt("Digite a pontuação do jogador: "));

    if (isNaN(pontuacaoJogador)) {
        console.log("Pontuação inválida. Por favor, digite um número.");
        return;
    } 
    else {
    let recruta = {
        nome: nomeJogador,
        funcao: funcaoJogador,
        pontuacao: pontuacaoJogador
    };

    time.push(recruta);
    console.log("Jogador " + nomeJogador + " cadastrado com sucesso!");
    }
}

function deletarJogador () {
    if (time.length === 0) {
            console.log("Nenhum jogador cadastrado");
            return;
        }

    let nomeDeletado = prompt("Digite o nome do jogador que deseja deletar: ");
    let indexDeletado = -1;

    for (let i=0; i < time.length; i++) {
        if (time[i].nome === nomeDeletado) {
            indexDeletado = i;
            break;
        }
    }

        if (indexDeletado === -1) {
            console.log("Jogador não encontrado");
            return;
        }

        time.splice(index, 1);
        console.log("Jogador deletado com sucesso! ");
    }

    function calcularMedia() {
        if (time.length === 0) {
            console.log("Nenhum jogador cadastrado.");
            return;
        }

        let pontosTotais = 0;

        for (let i = 0; i < time.length; i++) {
            pontosTotais += time[i].pontuacao;
        }
        let mediaPontos = pontosTotais / time.length;
        console.log("O time possui uma pontuação média de: ", mediaPontos);
    }
    function atualizarPontuacao() {
        jogadorAtualizado = prompt("Qual o nome do jogador que você quer atualizar? ");

        for (let i = 0; i < time.length; i++) {
            if (time[i].nome === jogadorAtualizado) {
                console.log("----- ATUALIZÇÃO DE RANKING -----");
                pontosAtualizados = Number(prompt("Quantos pontos o jogador ganhou? "));
                time[i].pontuacao += pontosAtualizados;
                console.log("SUCESSO! A pontuação do jogador " + jogadorAtualizado + " foi atualizada para: " + time[i].pontuacao);
                return;
                }
            }
        console.log("Jogador não encontrado.");
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
        calcularMedia();
    }
    else if (opcao === "5") {
        atualizarPontuacao();
    }
    else if (opcao === "6") {
        continuar = false;
    }
    else {
        console.log("Opção inválida! Tente novamente.");
    }
}