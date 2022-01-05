function logout() {
  var logout = document.getElementById("logout");
  if (logout) {
    location.replace("../Login/index.html");
  }
}

function checkQuiz(quiz) {
  location.href = "../QuizDetails/index.html";
}

function deleteQuiz() {
  var deleteQuiz = document.getElementById("deleteQuiz");
  console.log("delete");
}

var quiz = ["quiz1", "quiz2", "quiz3", "quiz4",];

var mainWrapper = document.getElementById("main")
for (let i = 0; i < quiz.length; i++) {
    var wrapper = document.createElement("div")
    wrapper.setAttribute("class","quizContainer")

    var title = document.createElement("p")
    title.setAttribute("class","title")
    title.innerHTML= quiz[i]
    wrapper.appendChild(title)

    var deleteWrapper = document.createElement("img")
    deleteWrapper.src ="../../assets/images/pngwing.com.png"
    deleteWrapper.setAttribute("class","delete")
    deleteWrapper.addEventListener("click",deleteQuiz.bind(null, quiz[i]),false)
    wrapper.appendChild(deleteWrapper)
    
    mainWrapper.appendChild(wrapper)

    
}