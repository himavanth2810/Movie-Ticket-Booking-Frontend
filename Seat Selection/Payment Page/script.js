function validate(){
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var expiryyear = document.getElementById("expiryyear").value;
    var expirymonth = document.getElementById("expirymonth").value;
    var password = document.getElementById("password").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 2){
      text = "Please Enter Card holder name";
      error_message.innerHTML = text;
      return false;
    }
    if(number.length < 16){
      text = "Please Enter Card number";
      error_message.innerHTML = text;
      return false;
    }
    if(expiryyear.length < 4){
      text = "Please Enter valid Expiry-year";
      error_message.innerHTML = text;
      return false;
    }
    if(password.length < 3){
      text = "Please Enter CVC";
      error_message.innerHTML = text;
      return false;
    }
    location.href="./Final Page/index.html";
    return true;
}