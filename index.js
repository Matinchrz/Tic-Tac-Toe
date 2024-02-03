let game = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let currentPlayer = "X";
function resetGame() {
  game = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  currentPlayer = "X";
  updateTurnInfo();
  const cells = document.querySelectorAll("#game-board div");
  cells.forEach((cell) => (cell.innerText = ""));
}
function announceWinner() {
  alert(`تیم ${currentPlayer}بازی را برد!`);
  resetGame();
}
function announceTie() {
  alert("مساوی!");
  resetGame();
}
function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateTurnInfo();
}
function updateTurnInfo() {
  document.getElementById(
    "turn-info"
  ).innerText = `${currentPlayer} نوبت بازیکن`;
}

function place(row, col) {
  if (game[row][col] === "") {
    game[row][col] = currentPlayer;
    document.getElementById(`cell-${row}-${col}`).innerText = currentPlayer;
    switchPlayer();
    checkWinner();
  }
}

function checkWinner() {
  for (let i = 0; i < 3; i++) {
    if (
      (game[i][0] === currentPlayer &&
        game[i][1] === currentPlayer &&
        game[i][2] === currentPlayer) ||
      (game[0][i] === currentPlayer &&
        game[1][i] === currentPlayer &&
        game[2][i] === currentPlayer)
    ) {
      announceWinner();
      return;
    }
  }

  if (
    (game[0][0] === currentPlayer &&
      game[1][1] === currentPlayer &&
      game[2][2] === currentPlayer) ||
    (game[0][2] === currentPlayer &&
      game[1][1] === currentPlayer &&
      game[2][0] === currentPlayer)
  ) {
    announceWinner();
    return;
  }

  if (!game.flat().includes("")) {
    announceTie();
    return;
  }
}
