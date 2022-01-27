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

// function selectStudent() {
//   var selectStudent = `<select class="inputs">
//         <option class="values" value="">Faizan</option>
//         <option class="values" value="">Sami</option>
//         <option class="values" value="">Kaleem</option>
//       </select>`;
//   addName.innerHTML += selectStudent;
// }

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
const question = JSON.parse(localStorage.getItem("question"));
const option1 = JSON.parse(localStorage.getItem("option-1"));
const option2 = JSON.parse(localStorage.getItem("option-2"));
const option3 = JSON.parse(localStorage.getItem("option-3"));
const option4 = JSON.parse(localStorage.getItem("option-4"));
const correctAnswer = JSON.parse(localStorage.getItem("correctAnswer"));

var obtainedMarks = 0
function corrAnswerChecker1() {
  if (option1 == correctAnswer) {
    obtainedMarks = 5
    localStorage.setItem("marks",obtainedMarks)
    // console.log("🚀 ~ file: app.js ~ line 78 ~ obtainedMarks", obtainedMarks)
  } else {
    // obtainedMarks = ++5
    console.log("incorrect");
  }
}
function corrAnswerChecker2() {
  if (option2 == correctAnswer) {
    obtainedMarks = 5
    localStorage.setItem("marks",obtainedMarks)
  } else {
    console.log("incorrect");
  }
}
function corrAnswerChecker3() {
  if (option3 == correctAnswer) {
    obtainedMarks = 5
    localStorage.setItem("marks",obtainedMarks)
  } else {
    console.log("incorrect");
  }
}
function corrAnswerChecker4() {
  if (option4 == correctAnswer) {
    obtainedMarks = 5
    localStorage.setItem("marks",obtainedMarks)
  } else {
    console.log("incorrect");
  }
}

var quizSection = document.getElementById("quizSection");
// var questionInput = document.createElement("input")
var html = `<div id= "addAgain">
  <p class="inputs" id ="Input"> ${question} </p>
 <div class="row" id="requiredLength">
   <button onClick = "corrAnswerChecker1()" class="options">${option1}</button>
   <button onClick = "corrAnswerChecker2()" class="options">${option2}</button>
 </div>  
 <div class="row">
 <button onClick = "corrAnswerChecker3()" class="options">${option3}</button>
 <button onClick = "corrAnswerChecker4()" class="options">${option4}</button>
 </div>
 
     <div class="addQuizBtn" onclick="tick()">
       <img src="../../assets//images/tick.png" alt="Tick" class="tick" />;
 </div>`;

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
