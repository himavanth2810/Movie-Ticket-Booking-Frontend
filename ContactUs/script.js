const body = document.querySelector("body");

window.addEventListener("load",()=>{
    body.classList.add("visible");
});

document.querySelector(".button").addEventListener("click", function(){
    validate();
});

function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 2){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 5){
      text = "Please Enter Subject";
      error_message.innerHTML = text;
      return false;
    }
    if(phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 10){
      text = "Please Enter Message";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully! We will reach you shortly..");
    return true;
}