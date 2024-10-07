const  text= document.querySelector(".sec-text")

const textLoad=()=>{
    setTimeout(()=>{
        text.textContent ="freelancer"
    },0)
    setTimeout(()=>{
        text.textContent ="Blogger"
    },4000)
    setTimeout(()=>{
        text.textContent ="IMG provider"
    },8000)
    setTimeout(()=>{
        text.textContent ="Youtuber"
    },12000)
}

textLoad()
setInterval(textLoad,24000)