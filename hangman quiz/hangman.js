const hangmanimg=document.querySelector(".hang-man-box img")
const guesstext=document.querySelector(".guess-text b")
const keyboardDiv=document.querySelector(".keyboard")
const wordDisplay=document.querySelector(".word-display")
const gamemodal=document.querySelector(".game-modal")
const playagainbtn=document.querySelector(".play-again")

let currentWord,correctLetters,wrongGuesscount;
const maxguess=6

const resetgame=()=>{
    correctLetters=[]
    wrongGuesscount=0
    hangmanimg.src=`./hangman/hangman ${wrongGuesscount}.png`
    guesstext.innerHTML=`${wrongGuesscount} / ${maxguess}`
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled =false)
    wordDisplay.innerHTML= currentWord.split("").map(()=>` <li class="letter"></li>`).join("")
    gamemodal.classList.remove("show")
}
// bringing the quiz questions 
const getrandomword = () =>{
    const { word , hint} =QuizItems[Math.floor(Math.random() * QuizItems.length)]
    currentWord=word
    console.log( word);
    resetgame()
    document.querySelector(".hint-text b").innerText=hint;
}

const gameover=(isVictory) =>{ 
    //showing the game result with the image
    setTimeout(() => {
        const modalText=isVictory ? `you found the word:` :`the correct word is:`;
        gamemodal.querySelector("img").src=`/assets/you ${isVictory? 'won' : 'loose'}.gif`;
        gamemodal.querySelector("h4").innerText=` ${isVictory? 'Congrats!' : 'Game Over!'}`;
        gamemodal.querySelector("p").innerHTML=` ${modalText} <b>${currentWord}`;
        gamemodal.classList.add("show")
    }, 300);
}
const initGame=(button,clickedLetter)=> {
    //checking the clickedletter is exist on thecurrent word
    if(currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter,index)=>{
            if(letter===clickedLetter){
                correctLetters.push(letter)
                wordDisplay.querySelectorAll("li")[index].innerText=letter
                wordDisplay.querySelectorAll("li")[index].classList.add("gussed")
            }
        })
    }
    else{
        wrongGuesscount++; 
        hangmanimg.src=`./hangman/hangman ${wrongGuesscount}.png`
    }
    button.disabled =true;
    guesstext.innerHTML=`${wrongGuesscount} / ${maxguess}`

    if(wrongGuesscount === maxguess) return gameover(false);
    if(currentWord.length ===correctLetters.length) return gameover(true)
}
//creating keyboard buttons
for (let i=97;i<=122;i++){
    const button=document.createElement("button")
    button.innerText= String.fromCharCode(i)
    keyboardDiv.appendChild(button)
    button.addEventListener("click",e => initGame(e.target,String.fromCharCode(i)))
}

getrandomword()

playagainbtn.addEventListener("click",getrandomword)


