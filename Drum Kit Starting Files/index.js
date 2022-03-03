let individualDrum = document.querySelectorAll(".drum");


const makeSound = (event) => {
    switch(event){
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;

        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;

        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;

        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;

        case "j":
            new Audio("sounds/snare.mp3").play();
            break;

        case "k":
            new Audio("sounds/crash.mp3").play();
            break;

        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;

        default:
            console.log(buttonInnerHTML);
    }
}


const buttonAnimation = (currentKey) => {
    let activeButton = document.querySelector(`.${currentKey}`);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}


for (let i = 0; i < individualDrum.length; i++){
    individualDrum[i].addEventListener('click', event => {

        const buttonInnerHTML = event.target.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}

document.addEventListener("keypress", event => {
    makeSound(event.key);
    buttonAnimation(event.key);
});
