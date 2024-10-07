const playBoard=document.querySelector(".play-board");
const scoreEle=document.querySelector(".score");
const HighscoreEle=document.querySelector(".high-score");
const pop=document.getElementById("img-pop")
const replay=document.getElementById("Replay")


let gameover= false
let foodX, foodY;
let snakeX=5 ,snakeY=10;
let snakeBody=[]
let velocityX=0,velocityY=0
let setIntervalId;
let score=0

//assigning high score
let highScore=localStorage.getItem("high-score") || 0
HighscoreEle.innerText=`High Score: ${highScore}`


const ChangeFoodPosition= ()=>{
    foodX = Math.floor(Math.random()*30) + 1;
    foodY = Math.floor(Math.random()*30) + 1;
    
}

const handleGameOver= () =>{
    clearInterval(setIntervalId)
    
    pop.classList.add("show")
    replay.addEventListener('click',()=>{
        location.reload()
    })
   
}

changeDirection =(e) =>{
    if(e.key==="ArrowUp" && velocityY !=1){
        velocityX=0
        velocityY=-1
    }
    else if(e.key === "ArrowDown" && velocityY !=-1){
        velocityX=0
        velocityY=1
    }
    else if(e.key === "ArrowLeft" && velocityX !=1){
        velocityX=-1
        velocityY=0
    }
    else if(e.key === "ArrowRight" && velocityX !=-1){
        velocityX=1
        velocityY=0
    }
    initGame()
}

const initGame=() =>{
    if(gameover) return handleGameOver()
    let  htmlMarkup=`<div class="food" style="grid-area: ${foodY} / ${foodX}"></div> `;
    if(snakeX ===foodX && snakeY === foodY){
        ChangeFoodPosition()
        snakeBody.push([foodX,foodY])
        score++
        highScore=score>=highScore? score : highScore;
        localStorage.setItem("high-score",highScore)
        scoreEle.innerText=`score ${score}`
        HighscoreEle.innerText=`High Score: ${highScore}`
        // console.log(snakeBody);
    }
    
    for (i =snakeBody.length-1;i>=0;i--){
        snakeBody[i] = snakeBody[i-1]
    }

    snakeBody[0]=[snakeX,snakeY]
    //updating snake head
     snakeX += velocityX
    snakeY += velocityY

    if(snakeX <=0 || snakeX >=31 || snakeY <=0 || snakeY >=31){
       gameover=true
    }

    for(let i=0;i <snakeBody.length;i++){
        htmlMarkup +=  `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div> `;
        if(i !==0 && snakeBody[0][1] ===snakeBody[i][1] && snakeBody[0][0]===snakeBody[i][0]){
            gameover=true
        }
    }

    playBoard.innerHTML= htmlMarkup;
}
ChangeFoodPosition();
setIntervalId=setInterval(initGame,125)
initGame();

document.addEventListener("keydown",changeDirection)
