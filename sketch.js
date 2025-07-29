let tela = "intro";
let xJogador = [0, 0, 0, 0];
let yJogador = [75, 150, 225, 300];
let jogador = ["🍊", "🌽", "🍓", "🥕"];
let teclas = ["a", "s", "d", "f"];
let quantidade = jogador.length;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (tela === "intro") {
    mostrarIntroducao();
  } else if (tela === "jogo") {
    jogar();
  }
}         

function mostrarIntroducao() {
  background(250, 115, 140); // Fundo roxo
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(18);
  text("Iniciar a corrida clique na cor pessêgo,", width / 2, 50);
  text("quando ficar verde significa que foi dada a largada.", width / 2, 75);

  textSize(14);
  text("Para o jogador que quer usar a laranja (🍊)", width / 2, 120);
  text("fica clicando na tecla (a) o mais rápido possível para ganhar.", width / 2, 140);

  text("Para o jogador que quer usar o milho (🌽)", width / 2, 170);
  text("fica clicando na tecla (s) o mais rápido possível para ganhar.", width / 2, 190);

  text("Para o jogador que quer usar o morango(🍓)", width / 2, 220);
  text("fica clicando na tecla (d) o mais rápido possível para ganhar.", width / 2, 240);

  text("Para o jogador que quer usar a cenoura (🥕)", width / 2, 270);
  text("fica clicando na tecla (f) o mais rápido possível para ganhar.", width / 2, 290);

  textSize(16);
  text("No final da corrida irá aparecer o emoji do ganhador dizendo que ganhou.", width / 2, 330);

  textSize(20);
  fill(255, 255, 0);
  text("PARA COMEÇAR APERTA ESPAÇO!!", width / 2, 370);
}

function jogar() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused) {
    background("#2E878B"); // Amarelo quando a corrida começa
  } else {
    background("#67F771"); // Roxa antes da largada
  }
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  stroke(0);
  line(350, 50, 350, 350);
}

function verificaVencedor() {
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] >= 350) {
      textSize(32);
      fill(255);
    text (jogador [ i ] + "venceu", 50, 200 )
      noLoop();
    }
  }
}


function keyPressed() {
  if (tela === "intro" && key === " ") {
    tela = "jogo";
  } else {
    for (let i = 0; i < quantidade; i++) {
      if (key === teclas[i]) {
        xJogador[i] += 10; // Move o jogador ao pressionar a tecla correspondente
      }
    }
  }
}