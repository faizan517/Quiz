function logout() {
  location.replace("../Login/index.html");
}

function selectStudent() {
  var selectStudent = `<select class="inputs" >
  <option class="values" id= "asignName1" value="">Faizan</option>
  <option class="values" id= "asignName2" value="">Sami</option>
  <option class="values" id= "asignName3" value="">Kaleem</option>
  </select>`;
  addName.innerHTML += selectStudent;
}

function addMore() {
  // var quizSection = document.getElementById("quizSection")
  var html = `<input type="text" placeholder="Enter question" class="inputs" id ="Input" />
  <div class="row" id="requiredLength">
   <input type="text" id="option1" placeholder="Option 1" class="options" />
   <input type="text" id="option2" placeholder="Option 2" class="options" />
 </div>  
 <div class="row">
   <input type="text" id="option3" placeholder="Option 3" class="options" />
   <input type="text" id="option4" placeholder="Option 4" class="options" />
   </div>
 <input type="text" placeholder="Enter correct answer" id="correctAnswer" class="inputs" />`;
  addAgain.innerHTML += html;
}

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
 
 <button class="addMore" onclick="addMore()">Add more</button>
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
      <button onClick="selectStudent()" class="addMore">Add more</button>
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
  var asignName2 = document.getElementById("asignName2").innerText;
  var asignName3 = document.getElementById("asignName3").innerText;
  var date = document.getElementById("date").value;
  const correctAnswer = document.getElementById("correctAnswer").value
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
