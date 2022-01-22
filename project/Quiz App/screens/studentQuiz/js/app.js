function logout() {
  location.replace("../Login/index.html");
}

function tick() {
  var inputQuestion = document.getElementById("Input").value;
//   console.log("🚀 ~ file: app.js ~ line 6 ~ inputQuestion", inputQuestion)
//   if (!inputQuestion) {
//     console.log("error")
//     console.log("🚀 ~ file: app.js ~ line 6 ~ inputQuestion", inputQuestion)
//   }
//   else{
// console.log("🚀 ~ file: app.js ~ line 6 ~ inputQuestion", inputQuestion)
    location.replace("../studentHome/index.html");
//   }
}

function selectStudent() {
  var selectStudent = `<select class="inputs">
        <option class="values" value="">Faizan</option>
        <option class="values" value="">Sami</option>
        <option class="values" value="">Kaleem</option>
      </select>`;
  addName.innerHTML += selectStudent;
}

// function addMore() {
//   // var quizSection = document.getElementById("quizSection")
//   var html = `<input type="text" placeholder="Enter question" class="inputs" required id="Input"/>
//  <div class="row" id="requiredLength">
//    <input type="text" placeholder="Option 1" class="options" />
//    <input type="text" placeholder="Option 2" class="options" />
//  </div>  
//  <div class="row">
//    <input type="text" placeholder="Option 3" class="options" />
//    <input type="text" placeholder="Option 4" class="options" />
//  </div>
//  <input type="text" placeholder="Enter correct answer" class="inputs" />`;
//   addAgain.innerHTML += html;
// }

var quizSection = document.getElementById("quizSection");
// var questionInput = document.createElement("input")
var html = `<div id= "addAgain">
  <p class="inputs" id ="Input"> html full foam </p>
 <div class="row" id="requiredLength">
   <button class="options">option 1</button>
   <button class="options">option 2</button>
 </div>  
 <div class="row">
 <button class="options">option 3</button>
 <button class="options">option 4</button>
 </div>
 
     <div class="addQuizBtn" onclick="tick()">
       <img src="../../assets//images/tick.png" alt="Tick" class="tick" />;
 </div>`
 
//  <button class="addMore" onclick="addMore()">Add more</button>
//  <div class="headingContainer" >
//         <p class="label2">Select Students:</p>
//       </div>
//       <div id = "addName">
//       <select class="inputs" >
//         <option class="values" value="">Faizan</option>
//         <option class="values" value="">Sami</option>
//         <option class="values" value="">Kaleem</option>
//       </select>
      
//       </div>
//       <button onClick="selectStudent()" class="addMore">Add more</button>
//       <div class="headingContainer">
//         <p class="label2">Due Date:</p>
//       </div>
//       <div class="dueDate">
//       <input type="date" placeholder="Enter question" class="inputs" />
//       </div>
//     </div>
quizSection.innerHTML += html;
