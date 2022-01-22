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

var quiz = {
  title :["Quiz1", "Quiz2", "Quiz3", "Quiz4"],
  totalQuestion : 5,
  totalMarks : 50, 
};
  
var mainWrapper = document.getElementById("main");
for (let i = 0; i < quiz.title.length; i++) {
  var wrapper = document.createElement("div");
  wrapper.setAttribute("class", "quizContainer");

  var title = document.createElement("p");
  title.setAttribute("class", "title");
  title.innerHTML = quiz.title[i];
  title.addEventListener("click",
  checkQuiz.bind(null, quiz.title[i]),
  false)
  wrapper.appendChild(title);

  var deleteWrapper = document.createElement("img");
  deleteWrapper.src = "../../assets/images/pngwing.com.png";
  deleteWrapper.setAttribute("class", "deleteQuiz");
  deleteWrapper.addEventListener(
    "click",
    deleteQuiz.bind(null, quiz.title[i]),
    false
  );
  wrapper.appendChild(deleteWrapper);

  mainWrapper.appendChild(wrapper);
}
