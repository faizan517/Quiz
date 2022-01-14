
localStorage.setItem("email","faizanpervaiz517@gmail.com")
localStorage.setItem("password","fazi123")
var userEmail = localStorage.getItem("email")
var userPassword = localStorage.getItem("password")


function button() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    if (!email) {
        alert("Enter your email")
    }
    else if (!password) {
        alert("Enter your password")
    }
    else if (email == userEmail && password == userPassword) {
        location.replace("../Home/index.html")   
    }
    else if (email != userEmail) {
        alert("Wrong email")   
    }
    else if (password != userPassword) {
        alert("wrong password")   
    }
    
}
