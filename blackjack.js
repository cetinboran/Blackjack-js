const startBtn = document.getElementById("start-btn");
const newCardBtn = document.getElementById("newcard-btn");
const infoText = document.getElementById("info-text");
const cardText = document.getElementById("card-text");
const sumText = document.getElementById("sum-text");

let cards = [];
let isAlive = false;
let hasBlackjack = false;
let sum = 0;
let message = "";

startBtn.addEventListener("click", function(){
    startGame();
});

newCardBtn.addEventListener("click", function(){
    newCard();
});

function getRandomCard(){
    let random = Math.floor(Math.random() * 13);

    if(random > 10){
        return 10;
    } else if(random == 1){
        return 11;
    } else if(random == 0){
        return 1;
    }
    else{
        return random;
    }
}

function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = secondCard + firstCard;
    isAlive = true;
    hasBlackjack = false;

    gameLogic();
}

function gameLogic(){
    render();
    if(sum < 21){
        message = "Do you want a new card?";
    } else if(sum == 21){
        message = "You got a Blackjack!";
        hasBlackjack = true;
    }
    else{
        message = "You're out!";
        isAlive = false;
        hasBlackjack = false;
    }
    console.log(isAlive);

    infoText.textContent = message;
}


function render(){
    cardText.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++){
        cardText.textContent += cards[i] + " ";
    }
    sumText.textContent = "Sum: " + sum;
}

function newCard(){
    if(isAlive && !hasBlackjack){
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        gameLogic();
    }
}