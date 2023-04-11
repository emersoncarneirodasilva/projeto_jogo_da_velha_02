"use strict";

let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttonsContainer = document.querySelector("#buttons-container");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// Contador de jogadas
let player1 = 0;
let player2 = 0;

// Verificação se vai jogar com 2 players ou contra a IA
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    secondPlayer = this.getAttribute("id");

    for (let j = 0; j < buttons.length; j++) {
      buttons[j].style.display = "none";
    }

    setTimeout(() => {
      let container = document.querySelector("#container");
      container.classList.remove("hide");

      buttonsContainer.classList.add("hide");
    }, 500);
  });
}

// Verifica quem vai jogar
function checkEl(player1, player2) {
  let el;
  if (player1 == player2) {
    // Jogador1 "x"
    el = x;
  } else {
    // Jogador2 "o"
    el = o;
  }
  return el;
}

// Adicionando o evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {
  // Quando alguem clicar na caixa
  boxes[i].addEventListener("click", function () {
    // Aqui a arrow function (()=>) não funciona
    let el = checkEl(player1, player2);

    // Verifica se já há "x" ou "o"
    if (this.childNodes.length == 0) {
      let cloneEl = el.cloneNode(true);
      this.appendChild(cloneEl);

      // Computar jogada
      if (player1 == player2) {
        player1++;

        if (secondPlayer == "ai-player") {
          // Função para a jogada da ai
          computerPlayer();
          player2++;
        }
      } else {
        player2++;
      }

      // Checar quem venceu
      checkWinCondition();
    }
  });
}

// Função para checar quem venceu
function checkWinCondition() {
  let block1 = document.querySelector("#block-1");
  let block2 = document.querySelector("#block-2");
  let block3 = document.querySelector("#block-3");
  let block4 = document.querySelector("#block-4");
  let block5 = document.querySelector("#block-5");
  let block6 = document.querySelector("#block-6");
  let block7 = document.querySelector("#block-7");
  let block8 = document.querySelector("#block-8");
  let block9 = document.querySelector("#block-9");

  // Checando as condições de vitória horizontais
  // Primeira linha (1, 2, 3)
  if (
    block1.childNodes.length > 0 &&
    block2.childNodes.length > 0 &&
    block3.childNodes.length > 0
  ) {
    let b1Child = block1.childNodes[0].className;
    let b2Child = block2.childNodes[0].className;
    let b3Child = block3.childNodes[0].className;

    if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
      // Jogador1 "x" venceu
      declarewinner("x");
    } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
      // Jogador2 "o" venceu
      declarewinner("o");
    }
  }
  // Segunda linha (4, 5, 6)
  if (
    block4.childNodes.length > 0 &&
    block5.childNodes.length > 0 &&
    block6.childNodes.length > 0
  ) {
    let b4Child = block4.childNodes[0].className;
    let b5Child = block5.childNodes[0].className;
    let b6Child = block6.childNodes[0].className;

    if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
      // Jogador1 "x" venceu
      declarewinner("x");
    } else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
      // Jogador2 "o" venceu
      declarewinner("o");
    }
  }
  // Terceira linha (7, 8, 9)
  if (
    block7.childNodes.length > 0 &&
    block8.childNodes.length > 0 &&
    block9.childNodes.length > 0
  ) {
    let b7Child = block7.childNodes[0].className;
    let b8Child = block8.childNodes[0].className;
    let b9Child = block9.childNodes[0].className;

    if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
      // Jogador1 "x" venceu
      declarewinner("x");
    } else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
      // Jogador2 "o" venceu
      declarewinner("o");
    }
  }

  // Checando as condições de vitória verticais
  // Primeira coluna (1, 4, 7)
  if (
    block1.childNodes.length > 0 &&
    block4.childNodes.length > 0 &&
    block7.childNodes.length > 0
  ) {
    let b1Child = block1.childNodes[0].className;
    let b4Child = block4.childNodes[0].className;
    let b7Child = block7.childNodes[0].className;

    if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
      // Jogador1 "x" venceu
      declarewinner("x");
    } else if (b1Child == "o" && b4Child == "o" && b7Child == "o") {
      // Jogador2 "o" venceu
      declarewinner("o");
    }
  }
  // Segunda coluna (2, 5, 8)
  if (
    block2.childNodes.length > 0 &&
    block5.childNodes.length > 0 &&
    block8.childNodes.length > 0
  ) {
    let b2Child = block2.childNodes[0].className;
    let b5Child = block5.childNodes[0].className;
    let b8Child = block8.childNodes[0].className;

    if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
      // Jogador1 "x" venceu
      declarewinner("x");
    } else if (b2Child == "o" && b5Child == "o" && b8Child == "o") {
      // Jogador2 "o" venceu
      declarewinner("o");
    }
  }
  // Terceira coluna (3, 6, 9)
  if (
    block3.childNodes.length > 0 &&
    block6.childNodes.length > 0 &&
    block9.childNodes.length > 0
  ) {
    let b3Child = block3.childNodes[0].className;
    let b6Child = block6.childNodes[0].className;
    let b9Child = block9.childNodes[0].className;

    if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
      // Jogador1 "x" venceu
      declarewinner("x");
    } else if (b3Child == "o" && b6Child == "o" && b9Child == "o") {
      // Jogador2 "o" venceu
      declarewinner("o");
    }
  }

  // Checando condições de vitória nas diagonais
  // Diagonal (1, 5, 9)
  if (
    block1.childNodes.length > 0 &&
    block5.childNodes.length > 0 &&
    block9.childNodes.length > 0
  ) {
    let b1Child = block1.childNodes[0].className;
    let b5Child = block5.childNodes[0].className;
    let b9Child = block9.childNodes[0].className;

    if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
      // Jogador1 "x" venceu
      declarewinner("x");
    } else if (b1Child == "o" && b5Child == "o" && b9Child == "o") {
      // Jogador2 "o" venceu
      declarewinner("o");
    }
  }
  // Diagonal (7, 5, 3)
  if (
    block7.childNodes.length > 0 &&
    block5.childNodes.length > 0 &&
    block3.childNodes.length > 0
  ) {
    let b7Child = block7.childNodes[0].className;
    let b5Child = block5.childNodes[0].className;
    let b3Child = block3.childNodes[0].className;

    if (b7Child == "x" && b5Child == "x" && b3Child == "x") {
      // Jogador1 "x" venceu
      declarewinner("x");
    } else if (b7Child == "o" && b5Child == "o" && b3Child == "o") {
      // Jogador2 "o" venceu
      declarewinner("o");
    }
  }

  // Condição de empate
  let counter = 0;

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      counter++;
    }
  }
  if (counter == 9) {
    declarewinner("");
  }
}

// Declara o vencedor atualizando o placar e reseta o jogo
function declarewinner(winner) {
  let scoreboardX = document.querySelector("#scoreboard-1");
  let scoreboardO = document.querySelector("#scoreboard-2");
  let msg = "";

  if (winner == "x") {
    scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
    msg = "O Jogador 1 foi o vencedor!";
  } else if (winner == "o") {
    scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
    msg = "O Jogador 2 foi o vencedor!";
  } else {
    msg = "Deu Empate!";
  }
  // Exibir a mensagem na tela
  messageText.innerHTML = msg;
  messageContainer.classList.remove("hide");

  // Esconder mensagem
  setTimeout(() => {
    messageContainer.classList.add("hide");
  }, 3000);

  // Resetando as jogadas
  player1 = 0;
  player2 = 0;

  let boxesToremove = document.querySelectorAll(".box div");

  for (let i = 0; i < boxesToremove.length; i++) {
    boxesToremove[i].parentNode.removeChild(boxesToremove[i]);
  }
}

// Executa a lógica da jogada da IA
let counter;
let filled;
function computerPlayer() {
  let cloneO = o.cloneNode(true);
  counter = 0;
  filled = 0;

  for (let i = 0; i < boxes.length; i++) {
    let randomNumber = Math.floor(Math.random() * 5);
    // Só será preenchido se o filho estiver vazio, ou seja, um espaço em branco no jogo
    if (boxes[i].childNodes[0] == undefined) {
      if (randomNumber <= 1) {
        boxes[i].appendChild(cloneO);
        counter++;
        break;
      }
      // Checagem de quantas estão preenchidas
    } else {
      filled++;
    }
  }
  if (counter == 0 && filled < 9) {
    computerPlayer();
  }
}
