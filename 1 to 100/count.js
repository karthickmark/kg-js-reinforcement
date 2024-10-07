//getting DOM elements
const input=document.querySelector("input")
let guess=document.querySelector(".guess")
let checkbutton=document.querySelector("button")
let remainchances=document.querySelector(".chances")
let pop=document.getElementById("pops")
let popClose=document.getElementById("pop-close")
let shower=document.getElementById("shower")

//set focus on the input elements
input.focus()


let randomnum=Math.floor(Math.random()*100)
console.log(randomnum);
chance=10

checkbutton.addEventListener("click",()=>{

     chance--;
      let inputvalue=input.value
     
      
      if (inputvalue == randomnum){
        [guess.textContent,input.disabled]=["congratulations",true];
        [checkbutton.textContent, checkbutton.disabled]=["replay", "#red"];
        guess.style.color="green"
      
         pop.classList.add("pop-open")
         shower.classList.add("show-shower")
         popClose.addEventListener("click",()=>{
          pop.classList.remove("pop-open")
          window.location.reload()
         })
     
        
      }
      else if(inputvalue >randomnum && inputvalue<100){
        [guess.textContent,remainchances.textContent]=["your guess is high",chance]
        guess.style.color="red"
      }
      else if(inputvalue<randomnum && inputvalue>0){
        [guess.textContent,remainchances.textContent]=["your guess is low",chance]
        guess.style.color="blue"
      }
      else{
        [guess.textContent,remainchances.textContent]=["your guess is invalid",chance]
        guess.style.color="red"
      }
      if(chance==0){
        [checkbutton.textContent,input.disabled,inputvalue]=["REplay",true,""]
        [guess.textContent,guess.style.color]= ["you loose","red"]
      }
      if(chance<0){
        window.location.reload()
      }
})
