const prompt = require("prompt-sync")();

console.log("----- Cadastro de novo recruta -----");
let novoNome =  prompt("Digite o nome do novo jogador: ");

let novaPontuacao = Number(prompt("Digite a pontuação do jogador: "));
console.log("Sucesso! jogador " + novoNome + " cadastrado com pontuação " + novaPontuacao);
