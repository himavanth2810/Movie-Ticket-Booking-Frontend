const body = document.querySelector("body");

const apiUrl = "";

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
