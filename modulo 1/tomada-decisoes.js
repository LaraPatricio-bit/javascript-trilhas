const prompt = require("prompt-sync")();

let nome = prompt("Digite o nome do jogador: ");
let pontuacao = Number(prompt("Digite a pontuação do jogador: "));
let pontuacaoMinima = 1000;

if (pontuacao >= pontuacaoMinima) {
    console.log("APROVADO!!! ", nome, "tem nível para a equipe principal.");
} else {
    let pontosFaltantes = pontuacaoMinima - pontuacao;
    console.log("REPROVADO!!! faltam ", pontosFaltantes, " pontos para entrar no time ");
}