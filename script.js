const Gameboard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", ""];
  let btns = document.querySelectorAll("#main button");
  const assign = () => {
    let currentPlayer = "X";
    for (let i = 0; i < gameboard.length; i++) {
      gameboard[i] = btns[i].textContent;
    }
    btns.forEach((button, index) => {
      button.addEventListener("click", () => {
        if (gameboard[index] === "") {
          gameboard[index] = currentPlayer;
          button.textContent = currentPlayer;
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
        const winner = checkForWinner(gameboard);
        if (winner) {
          const main1 = document.getElementById("message");
          const para = document.createElement("p");
          para.setAttribute("id", "Para1");
          para.textContent = `${winner} wins! Congratulations on your victory`;
          main1.appendChild(para);

          main1.style.position = "fixed";
          main1.style.top = "45%";
          main1.style.left = "50%";
          main1.style.transform = "translate(-50%, -50%)";
          main1.style.width = "400px";
          main1.style.height = "250px";
          main1.style.backgroundColor = "#f5efe7";
          main1.style.padding = "20px";
          main1.style.marginTop="-35px";
          main1.style.color="#11009E";
          main1.style.fontSize = "50px";
          main1.style.fontWeight = "bolder";
        } else if (gameboard.every((All) => All !== "")) {
          const para = document.createElement("p");
          para.setAttribute("id", "Para1");
          para.textContent = "it's a draw";
          const main1 = document.getElementById("message");
          main1.appendChild(para);

          main1.style.position = "fixed";
          main1.style.top = "45%";
          main1.style.left = "50%";
          main1.style.transform = "translate(-50%, -50%)";
          main1.style.width = "400px";
          main1.style.height = "250px";
          main1.style.backgroundColor = "#f5efe7";
          main1.style.padding = "20px";
          main1.style.color="#FF2171";
          main1.style.fontSize = "50px";
          main1.style.fontWeight = "bolder";
        }
      });
    });
  };

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkForWinner = (gameboard) => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (gameboard[a] === gameboard[b] && gameboard[a] === gameboard[c]) {
        return gameboard[a];
      }
    }
  };
  const resetGame = (gameboard) => {
    for (let i = 0; i < gameboard.length; i++) {
      gameboard[i].textContent = "";
    }
  };

  const button = document.getElementById("restart");
  button.addEventListener("click", () => {
    resetGame(gameboard);
    btns.forEach((button) => {button.textContent = "";});
    const main1 = document.getElementById("message");
    main1.innerHTML='';
    main1.style='';
  });
  return {
    assign,
  };
})();
Gameboard.assign();
