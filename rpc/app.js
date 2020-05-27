const game = ()=>{
let pScore=0;
let cScore=0;

const startgame = ()=> {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match =document.querySelector(".match");
    
    playBtn.addEventListener("click",()=>{
        introScreen.classList.add("fadeOut");
        match.classList.add('fadeIn');
    });
};


//play match 
const playMatch = () => {
    const options = document.querySelectorAll(".options button");
const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");
const hands = document.querySelectorAll(".hands img");

hands.forEach(hand=>{
    hand.addEventListener("animationend",function(){
        this.style.animation="";
    });

});

//computer options
const computerOptions=["rock", "paper", "scissors"];

options.forEach (option=>{
    option.addEventListener("click",function() {
        //comp choice
        const computerNumber = Math.floor(Math.random()*3);
const computerChoice = computerOptions[computerNumber];

setTimeout(()=>{
    compareHands(this.textContent,computerChoice);

//image update
playerHand.src = `./assets/${this.textContent}.png`;
computerHand.src =`./assets/${computerChoice}.png`;
}, 2000);

//animation
playerHand.style.animation = "shakePlayer 2s ease";
computerHand.style.animation ="shakePlayer 2s ease";
    });
});



};


const updateScore= ()=>{
const playerScore = document.querySelector(".player-score p");
const computerScore = document.querySelector(".computer-score p");
playerScore.textContent = pScore;
computerScore.textContent =cScore;};

const compareHands =( playerChoice,computerChoice)=>{
const winner = document.querySelector(".winner");
if(playerChoice === computerChoice){
    winner.textContent = "it is a tie";
    return;
}
//for rock 
if (playerChoice === 'rock'){
    if(computerChoice === 'scissors'){
        winner.textContent = "player wins"
        pScore++;
        updateScore();
        return;
    }else{
winner.textContent = 'computer Wins';
cScore++;
updateScore();
return;

    }
}
//for paper
if (playerChoice === 'paper'){
    if(computerChoice === 'scissors'){
        winner.textContent = "computer wins"
        cScore++;
        updateScore();
        return;
    }else{
winner.textContent = 'player Wins';
pScore++;
updateScore();
return;

    }
}

//for scissors
if (playerChoice === 'scissors'){
    if(computerChoice === 'rock'){
        winner.textContent = "computer wins"
        cScore++;
        updateScore();
        return;
    }else{
winner.textContent = 'player Wins';
pScore++;
updateScore();
return;

    }
}








};


startgame();
playMatch();
};




game();