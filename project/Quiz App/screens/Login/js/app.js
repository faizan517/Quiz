function button() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    if (!email) {
        alert("Enter your email")
    }
    if (!password) {
        alert("Enter your password")
    }
    location.replace("../Home/index.html")
    
}