
localStorage.setItem("email","admin@gmail.com")
localStorage.setItem("password","admin")
localStorage.setItem("studentEmail","faizanpervaiz517@gmail.com")
localStorage.setItem("studentPassword","fazi123")
var adminEmail = localStorage.getItem("email")
var adminPassword = localStorage.getItem("password")
var studentEmail = localStorage.getItem("studentEmail")
var studentPassword = localStorage.getItem("studentPassword")


function button() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    if (!email) {
        alert("Enter your email")
    }
    else if (!password) {
        alert("Enter your password")
    }
    else if (email == adminEmail && email == adminPassword) {
        location.replace("../Home/index.html")   
    }
    // else if (email != adminEmail ||email != studentEmail) {
    //     alert("Wrong email")   
    // }
    // else if (password != adminPassword || studentPassword) {
    //     alert("wrong password")   
    // }
    else if (email == studentEmail && password == studentPassword) {
        location.replace("../studentHome/index.html")
    }
    
}
