const body = document.querySelector("body");

const apiUrl = "https://movie-ticket-2810.herokuapp.com";

window.addEventListener("load",()=>{
    body.classList.add("visible");
});

document.querySelector(".login").addEventListener("click", function(){
    document.querySelector(".popup-login").style.display = "flex";
});

document.querySelector(".close1").addEventListener("click", function() {
    document.querySelector(".popup-login").style.display= "none";
});

document.querySelector(".signup").addEventListener("click", function(){
    document.querySelector(".popup-signup").style.display = "flex";
});

document.querySelector(".close2").addEventListener("click", function() {
    document.querySelector(".popup-signup").style.display= "none";
});

document.querySelector(".noaccount").addEventListener("click", function(){
    alert("Please signup first");
    document.querySelector(".popup-signup").style.display = "flex";
    document.querySelector(".popup-login").style.display= "none";
});

document.querySelector(".contactUs").addEventListener("click", function(){
    location.href = "./ContactUs/index.html";
});

document.querySelector(".authButton1").addEventListener("click",function(){
    location.href = "https://movie-ticket-2810.herokuapp.com/auth/google";
});

document.querySelector(".authButton2").addEventListener("click",function(){
    location.href = "https://movie-ticket-2810.herokuapp.com/auth/facebook";
});

document.querySelector(".authButton3").addEventListener("click",function(){
    location.href = "https://movie-ticket-2810.herokuapp.com/auth/google";
});

document.querySelector(".authButton4").addEventListener("click",function(){
    location.href = "https://movie-ticket-2810.herokuapp.com/auth/facebook";
});

const signIn = document.querySelector(".popup-login");

signIn.addEventListener("submit",(event)=>{
    event.preventDefault();
   
    const loginEmail = document.querySelector(".signin-email");
    const loginPassword = document.querySelector(".signin-password");

    const email = loginEmail.value;
    const password = loginPassword.value;

    fetch(`${apiUrl}/auth/signin`,{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        }, 
        body: JSON.stringify({email,password}),
       })
       .then((res) => res.json())
       .then((data) =>{
           const {token} = data;
          if(token){
              localStorage.setItem("jwt", token);
              location.href="./Movie Page/index.html";
          }
          else{
              alert("SignIn Again");
          }
       })
       .catch((err) =>{
          alert("Error Signing In!! Re-try....");
          console.log(err);
       });
       
});

const signUp= document.querySelector(".popup-signup");

signUp.addEventListener("submit",(event)=>{
    event.preventDefault();

     const email = document.querySelector(".signup-email").value;
     const name = document.querySelector(".signup-username").value;
     const contact = document.querySelector(".signup-contact").value;
     const password = document.querySelector(".signup-password").value;
     const retypepassword = document.querySelector(".signup-retype-password").value;
     if(password !== retypepassword){
         alert("Passwords don't match");
         return;
     }
    
     fetch(`${apiUrl}/auth/signup`,{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify({name,email,password}),
     })
     .then((res) => res.json())
     .then((data) =>{
         const {token} = data;
        if(token){
            localStorage.setItem("jwt", token);
            location.href="./Movie Page/index.html";
        }
        else{
            alert("SignUp Again");
        }
     })
     .catch((err) =>{
        alert("Error Signing Up!! Re-try....");
        console.log(err);
     });
});