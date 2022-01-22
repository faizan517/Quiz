function logout() {
    var logout = document.getElementById("logout");
    if (logout) {
      location.replace("../Login/index.html");
    }
  }

var QuizDetails =document.getElementById("quizSection")
const data = JSON.parse(localStorage.getItem("slectedQuiz"))
var deatils =`
<div class="quizContainer">
<p class="title">Title: </p>
<p class="value">${data}</p>
</div>
<div class="quizContainer">
  <p class="title">Total Question: </p>
  <p class="value">${data}</p>
</div>
<div class="quizContainer">
  <p class="title">Total Marks:</p>
  <p class="value">50</p>
</div>
<div class="quizContainer">
  <p class="title">Due Date: </p>
  <p class="value">10-1-2022</p>
</div>
<h1 class="quizTitle">Students:</h1>
<div class="quizContainer">
  <p class="title">Faizan</p>
  <p class="value">30/50</p>
</div>
<div class="quizContainer">
  <p class="title">Faiz</p>
  <p class="value">30/50</p>
</div>
<div class="quizContainer">
  <p class="title">izan</p>
  <p class="value">30/50</p>
</div>`

QuizDetails.innerHTML += deatils