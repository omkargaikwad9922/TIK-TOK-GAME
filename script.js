let boxs = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let h2 = document.querySelector("h2");
let newGame = document.querySelector(".newgame");

let turnO = true;

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  h2.innerText = "";
  reset.style.display = "block";
  for (const box of boxs) {
    box.disabled = false;
    box.innerText = "";
  }
};

boxs.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style.color = "green";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
      box.style.color = "red";
    }
    box.disabled = true;

    checkWinner();
  });
});

// const disabledbtn = () => {
//   for (let box of boxs) {
//     box.disabled = true;
//   }
// };

// const enabledbtn = () => {
//   for (let box of boxs) {
//     box.disabled = false;
//     box.innerText = "";
//   }
// };

// const showWinner = (winner) => {
//   h2.innerText = `Winner is ${winner}`;
//   for (let box of boxs) {
//     box.disabled = true;
//   }
// };

const checkWinner = () => {
  for (const pattern of winPatterns) {
    let pos1 = boxs[pattern[0]].innerText;
    let pos2 = boxs[pattern[1]].innerText;
    let pos3 = boxs[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        h2.innerText = `winner is ${pos1}`;
        if (turnO) {
          h2.style.color = "red";
        } else {
          h2.style.color = "green";
        }
        reset.style.display = "none";
        for (const box of boxs) {
          box.disabled = true;
        }
      }
    }
  }
};

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
