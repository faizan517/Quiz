function logout() {
  var logout = document.getElementById("logout");
  if (logout) {
    location.replace("../Login/index.html");
  }
}

function add() {
  var add = document.getElementById("add")
  if (add) {
    location.href = "../CreateQuiz/index.html";
  }
}

function checkQuiz(quiz) {
  localStorage.setItem("slectedQuiz", JSON.stringify(quiz))
  location.href = "../QuizDetails/index.html";
  // console.log("🚀 ~ file: app.js ~ line 16 ~ checkQuiz ~ quiz", quiz.)
}

function deleteQuiz() {
  var deleteQuiz = document.getElementsByClassName("deleteQuiz");
  if (deleteWrapper) {
    wrapper.remove();
    // console.log(quiz)
  }
  else{
    console.log("delete")
  }
}
// const studentData = 

const data = JSON.parse(localStorage.getItem("slectedQuiz"))
// const studentData = 
// const studentName1 = 
// const studentName2 = JSON.parse(localStorage.getItem("assignName2"))
// const studentName3 = JSON.parse(localStorage.getItem("assignName3"))
// const dueDate = 

let quiz =[]

var quizes = localStorage.getItem('quizes') || []

quiz = [...JSON.parse(quizes)]


// let quiz = [{
//   title : "Quiz1",
//   totalQuestion : 1,
//   totalMarks : 5,
//   dueDate :  JSON.parse(localStorage.getItem("dueDate")),
//   studentName : JSON.parse(localStorage.getItem("assignName1")),
//   marksObtained : JSON.parse(localStorage.getItem("marks"))
// }
// ];
// var oldQuizData = Quiz.push(JSON.parse(localStorage.getItem("slectedQuiz")))
// var newQuizData = Quiz.push(...oldQuizData, JSON.parse(localStorage.getItem("slectedQuiz")))
//  console.log("🚀 ~ file: app.js ~ line 53 ~ Quiz", Quiz)
  
var mainWrapper = document.getElementById("main");
for (let i = 0; i < quiz.length; i++) {
  var wrapper = document.createElement("div");
  wrapper.setAttribute("class", "quizContainer");

  var title = document.createElement("p");
  title.setAttribute("class", "title");
  title.innerHTML = quiz[i].title;
  title.addEventListener("click",
  checkQuiz.bind(null, quiz[i]),
  false)
  wrapper.appendChild(title);

  var deleteWrapper = document.createElement("img");
  deleteWrapper.src = "../../assets/images/pngwing.com.png";
  deleteWrapper.setAttribute("class", "deleteQuiz");
  deleteWrapper.addEventListener(
    "click",
    deleteQuiz.bind(null, quiz[i]),
    false
  );
  wrapper.appendChild(deleteWrapper);

  mainWrapper.appendChild(wrapper);
}
