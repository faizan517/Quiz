function logout() {
  location.replace("../Login/index.html");
}

// function selectStudent() {
//   var selectStudent = `<select class="inputs" >
//   <option class="values" id= "asignName1" value="">Faizan</option>
//   <option class="values" id= "asignName2" value="">Sami</option>
//   <option class="values" id= "asignName3" value="">Kaleem</option>
//   </select>`;
//   addName.innerHTML += selectStudent;
// }

// var addMoreNumber = 0
// function addMore() {
//   // var quizSection = document.getElementById("quizSection")
//   var html = `<input type="text" placeholder="Enter question" class="inputs" id ="Input" />
//   <div class="row" id="requiredLength">
//    <input type="text" id="option1" placeholder="Option 1" class="options" />
//    <input type="text" id="option2" placeholder="Option 2" class="options" />
//  </div>  
//  <div class="row">
//    <input type="text" id="option3" placeholder="Option 3" class="options" />
//    <input type="text" id="option4" placeholder="Option 4" class="options" />
//    </div>
//    <input type="text" placeholder="Enter correct answer" id="correctAnswer" class="inputs" />`;
//    addAgain.innerHTML += html;
   
//   //  if (addMoreNumber) {
//   //    ++addMoreNumber
//   //  }
// }

// for (let i = 0; i < addMore().length; i++) {
//   console.log(addMore())
  
// }

  var quizSection = document.getElementById("quizSection");
  // var questionInput = document.createElement("input")
  var html = `<div id= "addAgain">
  <input type="text" placeholder="Enter question" class="inputs" id ="Input" />
  <div class="row" id="requiredLength">
  <input type="text" id="option1" placeholder="Option 1" class="options" />
   <input type="text" id="option2" placeholder="Option 2" class="options" />
   </div>  
 <div class="row">
   <input type="text" id="option3" placeholder="Option 3" class="options" />
   <input type="text" id="option4" placeholder="Option 4" class="options" />
   </div>
   <input type="text" placeholder="Enter correct answer" id="correctAnswer" class="inputs" />
   
   </div>
   
   
 <div class="headingContainer" >
 <p class="label2">Select Students:</p>
 </div>
 <div id = "addName">
 <select class="inputs" >
 <option class="values" id= "asignName1" value="">Faizan</option>
 <option class="values" id= "asignName2" value="">Sami</option>
 <option class="values" id= "asignName3" value="">Kaleem</option>
 </select>
 
 </div>
 
 <div class="headingContainer">
 <p class="label2">Due Date:</p>
 </div>
 <div class="dueDate">
 <input type="date" placeholder="Enter question" id="date" class="inputs" />
      </div>
      </div>
      <div class="addQuizBtn" onclick="tick()">
      <img src="../../assets//images/tick.png" alt="Tick" class="tick" />`;
      quizSection.innerHTML += html;
      
      function tick() {
  var inputQuestion = document.getElementById("Input").value;
  var option1 = document.getElementById("option1").value;
  var option2 = document.getElementById("option2").value;
  var option3 = document.getElementById("option3").value;
  var option4 = document.getElementById("option4").value;
  var asignName1 = document.getElementById("asignName1").innerText;
  // var asignName2 = document.getElementById("asignName2").innerText;
  // var asignName3 = document.getElementById("asignName3").innerText;
  const correctAnswer = document.getElementById("correctAnswer").value
  var date = document.getElementById("date").value;
  localStorage.setItem("question",JSON.stringify(inputQuestion))
  localStorage.setItem("option-1",JSON.stringify(option1))
  localStorage.setItem("option-2",JSON.stringify(option2))
  localStorage.setItem("option-3",JSON.stringify(option3))
  localStorage.setItem("option-4",JSON.stringify(option4))
  localStorage.setItem("correctAnswer",JSON.stringify(correctAnswer))
  localStorage.setItem("dueDate",JSON.stringify(date))
  localStorage.setItem("assignName1",JSON.stringify(asignName1))


  if (inputQuestion) {
    if (option1 && option2 && option3 && option4 && correctAnswer) {
      if (asignName1 || asignName2 || asignName3) {
        if (date) {
          location.replace("../Home/index.html");
        }
      }
    }
  } else {
    console.log("error");
  }
}

tick = () => {
  var quizes = localStorage.getItem('quizes')
  // console.log("🚀 ~ file: app.js ~ line 115 ~ quizes", quizes)
  if(quizes == null) {
    localStorage.setItem('quizes',JSON.stringify([]))
  } else {
    var oldData = JSON.parse(localStorage.getItem('quizes'))
    var newQuiz = {
      title: 'Mia Khalifa',
      dueDate: JSON.parse(localStorage.getItem("dueDate")),
      marksObtained: JSON.parse(localStorage.getItem("marks")),
      studentsName: JSON.parse(localStorage.getItem("assignName1")),
      totalMarks: 50,
      totalQuestion: 1
    } 

    localStorage.setItem('quizes', JSON.stringify([...oldData, newQuiz]))
  }

  
}
    