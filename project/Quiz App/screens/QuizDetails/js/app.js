function logout() {
    var logout = document.getElementById("logout");
    if (logout) {
      location.replace("../Login/index.html");
    }
  }

var QuizDetails =document.getElementById("quizSection")
const data = JSON.parse(localStorage.getItem("slectedQuiz"))
const studentData = JSON.parse(localStorage.getItem("marks"))
const studentName1 = JSON.parse(localStorage.getItem("assignName1"))
const studentName2 = JSON.parse(localStorage.getItem("assignName2"))
const studentName3 = JSON.parse(localStorage.getItem("assignName3"))
// const dueDate = JSON.parse(localStorage.getItem("dueDate"))


console.log("🚀 ~ file: app.js ~ line 11 ~ studentData", studentData)
var deatils =`
<div class="quizContainer">
<p class="title">Title: </p>
<p class="value">${data.title}</p>
</div>
<div class="quizContainer">
  <p class="title">Total Question: </p>
  <p class="value">${data.totalQuestion}</p>
</div>
<div class="quizContainer">
  <p class="title">Total Marks:</p>
  <p class="value">${data.totalMarks}</p>
</div>
<div class="quizContainer">
  <p class="title">Due Date: </p>
  <p class="value">${data.dueDate}</p>
</div>
<h1 class="quizTitle">Students:</h1>
<div class="quizContainer">
  <p class="title">${data.studentName}</p>
  <p class="value">${data.studentData}/${data.totalMarks}</p>
</div>`

QuizDetails.innerHTML += deatils