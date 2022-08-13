// Javascript for Blackjack Game
/*
    UPDATE REQUIRED:

    In Blackjack game ace can be treated as both 1 and 11,
    the user gets to choose according to their choice
*/

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = {
    name: "HR",
    chips: 175
};

document.getElementById("player-el").textContent = player.name + ": $" + player.chips;

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) +1;
    if(randomNumber === 1){
        return 11;
    }
    else if(randomNumber > 10){
        return 10;
    }
    else{
        return randomNumber;
    }

}

function startGame(){
    if(isAlive === false){
        isAlive = true;
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cards = [firstCard, secondCard];
        sum = firstCard + secondCard;
        renderGame();
    }
}

function renderGame(){
    document.getElementById("cards-el").textContent =  "Cards: ";
    for(let i=0; i<cards.length; i++){
        document.getElementById("cards-el").textContent += cards[i] + " "; 
    }

    document.getElementById("sum-el").textContent =  "Sum: " + sum;    //document.querySelector("#sum-el").textContent =  "Sum: " + sum;
        if(sum < 21){
        message = "Do you want to draw a new card?";
    }
    else if(sum === 21){
        message = "You've got Blackjack!";
        hasBlackJack = true;
        isAlive = false;
    }
    else{
        message = "You're out of the game!";
        isAlive = false;
    }
    document.getElementById("message-el").textContent = message;
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}
