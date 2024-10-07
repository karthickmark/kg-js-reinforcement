const container=document.getElementById('login-container')
const loginbtn=document.getElementById('login')
const registerbtn =document.getElementById('register')
let signin=document.getElementById("sign-in")


registerbtn.addEventListener('click',()=>{
    container.classList.add("active")
})

loginbtn.addEventListener('click',()=>{
    container.classList.remove("active")
})

var signIn=function (){
    document.location.href="home.html"
}

