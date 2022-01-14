function logout() {
  location.replace("../Login/index.html");
}

var inputQuestion = document.getElementById("Input");
console.log("🚀 ~ file: app.js ~ line 6 ~ inputQuestion", inputQuestion);
function tick() {
  location.replace("../Home/index.html");
}

function selectStudent() {
  var selectStudent = `<select class="inputs">
        <option class="values" value="">Faizan</option>
        <option class="values" value="">Sami</option>
        <option class="values" value="">Kaleem</option>
      </select>`;
  addName.innerHTML += selectStudent;
}

function addMore() {
  // var quizSection = document.getElementById("quizSection")
  var html = `<input type="text" placeholder="Enter question" class="inputs" required  id="Input"/>
 <div class="row" id="requiredLength">
   <input type="text" placeholder="Option 1" class="options" />
   <input type="text" placeholder="Option 2" class="options" />
 </div>  
 <div class="row">
   <input type="text" placeholder="Option 3" class="options" />
   <input type="text" placeholder="Option 4" class="options" />
 </div>
 <input type="text" placeholder="Enter correct answer" class="inputs" />`;
  addAgain.innerHTML += html;
}

var quizSection = document.getElementById("quizSection");
// var questionInput = document.createElement("input")
var html = `<div id= "addAgain">
  <input type="text" placeholder="Enter question" class="inputs" id = "Input" />
 <div class="row" id="requiredLength">
   <input type="text" placeholder="Option 1" class="options" />
   <input type="text" placeholder="Option 2" class="options" />
 </div>  
 <div class="row">
   <input type="text" placeholder="Option 3" class="options" />
   <input type="text" placeholder="Option 4" class="options" />
 </div>
 <input type="text" placeholder="Enter correct answer" class="inputs" />
 
 </div>
 
 <button class="addMore" onclick="addMore()">Add more</button>
 <div class="headingContainer" >
        <p class="label2">Select Students:</p>
      </div>
      <div id = "addName">
      <select class="inputs" >
        <option class="values" value="">Faizan</option>
        <option class="values" value="">Sami</option>
        <option class="values" value="">Kaleem</option>
      </select>
      
      </div>
      <button onClick="selectStudent()" class="addMore">Add more</button>
      <div class="headingContainer">
        <p class="label2">Due Date:</p>
      </div>
      <div class="dueDate">
      <input type="date" placeholder="Enter question" class="inputs" />
      </div>
    </div>
    <div class="addQuizBtn" onclick="tick()">
      <img src="../../assets//images/tick.png" alt="Tick" class="tick" />`;
quizSection.innerHTML += html;
