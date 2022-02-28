const dicee = document.querySelectorAll("img");
const result = document.querySelector(".result");

let pl1 = Math.floor(Math.random() * 6) + 1;
let pl2 = Math.floor(Math.random() * 6) + 1;

console.log(pl1, pl2);

if (pl1 === pl2){
    result.textContent = "DRAW!";
} else if (pl1 > pl2){
    result.textContent = "🚩 Player 1 Wins!";
} else {
    result.textContent = "Player 2 Wins! 🚩";
}

dicee[0].setAttribute("src", `images/dice${pl1}.png`);
dicee[1].setAttribute("src", `images/dice${pl2}.png`);