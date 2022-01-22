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

function checkQuiz() {
  location.href = "../studentQuiz/index.html";
}

function deleteQuiz(quiz) {
  var deleteQuiz = document.getElementsByClassName("deleteQuiz");
  if (deleteWrapper) {
    wrapper.remove(quiz);
    console.log(quiz)
  }
  else{
    console.log("delete")
  }
}

var quiz = ["Quiz1", "Quiz2", "Quiz3", "Quiz4"];

var mainWrapper = document.getElementById("main");
for (let i = 0; i < quiz.length; i++) {
  var wrapper = document.createElement("div");
  wrapper.setAttribute("class", "quizContainer");

  var title = document.createElement("p");
  title.setAttribute("class", "title");
  title.innerHTML = quiz[i];
  title.addEventListener("click",
  checkQuiz.bind(null, quiz[i]),
  false)
  wrapper.appendChild(title);


  // wrapper.appendChild(deleteWrapper);

  mainWrapper.appendChild(wrapper);
}
