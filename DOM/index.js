const LIs = document.querySelectorAll("li");

let lastLI = LIs[LIs.length - 1];
lastLI.innerHTML = "João Felipe";

LIs[1].style.backgroundColor = "cyan";

document.querySelector(".list a").style.color = "green";
document.querySelector(".list a").style.fontWeight = "bold";

document.querySelector(".btn").style.backgroundColor = "yellow";
document.querySelector(".btn").style.border = "dashed 1px";


const bigText = () => {
    document.querySelector("h1").classList.toggle("huge");
}

let button = document.querySelector(".btn");
button.addEventListener("click", bigText);

document.querySelector("a").setAttribute("href", "https://www.bing.com");