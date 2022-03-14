const sounds = ["green", "red", "yellow", "blue"];
let randomSoundPicker = Math.round(Math.random() * 3);

let soundToPlay;
let soundSequence = [];
let inputSequence = [];

let counter = 0;
let level = 1;


const randomSound = () => {
    let randomSoundPicker = Math.round(Math.random() * 3);

    soundToPlay = sounds[randomSoundPicker];
    soundSequence.push(soundToPlay);
}

const buttonClickSound = (buttonColor) => {
    const activeButton = $(`#${buttonColor}`);
    
    activeButton.addClass("pressed");
    new Audio(`sounds/${buttonColor}.mp3`).play();
    
    setTimeout(() => {
        activeButton.removeClass("pressed");
    }, 100);
}

const nextSound = (sound) => {
    new Audio(`sounds/${sound}.mp3`).play();
    $(`#${sound}`).fadeOut(150);
    $(`#${sound}`).fadeIn(150);
}

const gameOver = () => {
    $("body").addClass("game-over");
    new Audio("sounds/wrong.mp3").play();

    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 200);

    $("#level-title").html("Game Over, Press Any Key to Restart");

    counter = 0;
    level = 1;
    soundSequence = [];
    inputSequence = [];
}

const startGame = () => {
    $("body").on("keypress", () => {
        $("body").off("keypress");
        $("#level-title").html(`Level ${level}`);
        randomSound();
        nextSound(soundToPlay);
    });
}

const checkSequence = (currentLevel) => {
    if (inputSequence[counter] === soundSequence[counter]){
        counter++;
        
        if (counter === currentLevel){
            counter = 0;
            level++;
            
            inputSequence = [];
            return true;
        }
    } else{
        gameOver();
        startGame();
    }
}

startGame();

$(".btn").on("click", event => {
    let buttonClicked = event.target.id;
    buttonClickSound(buttonClicked);
    inputSequence.push(buttonClicked);
    
    if (checkSequence(level)){
        setTimeout(() => {
            $("#level-title").html(`Level ${level}`);
            randomSound();
            nextSound(soundToPlay);
        }, 1000);
    }
});