var userLogin = true;
setTimeout(function () {
  if (userLogin) {
    location.replace("./screens/Home/index.html");
  } else {
    location.replace("./screens/Login/index.html");
  }
}, 3000); //3 Seconds