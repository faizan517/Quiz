// Q1
// var p = prompt('please enter your name');
// alert("hi," +" "+ p);


// Q2
// var table = prompt("what table you want", table);
// for (let i = 1; i <= 10; i++) {
//     if (table ) {

//         console.log(table, "x", i, "=", table * i);
//     }
//     else if (table ===  "") {
//         console.log(5, "x", i, "=", 5 * i);
//     }

// }


// Q3
// var city = prompt('please enter city name');
// if (city === "Karachi" || city === "karachi" ) {    
//     alert("Welcome to city of lights");
// }
// else{
//     alert("enter karachi")
// }


// Q4
// var gender = prompt('please enter your gender');
// if (gender === "male" || gender === "Male" ) {    
//     alert("Good Morning Sir.");
// }
// else if (gender === "Female" || gender === "female" ) {    
//     alert("Good Morning Ma’am.");
// }

// else{
//     alert("wrong")
// }


// Q5
// var traffic = prompt('please enter color of road traffic signal');
// if (traffic === "red" || traffic === "Red" ) {    
//     alert("vehicles must stop");
// }
// else if (traffic === "Yellow" || traffic === "yellow" ) {    
//     alert("vehicles should get ready to move");
// }
// else if (traffic === "green" || traffic === "Green" ) {    
//     alert("vehicles can move now");
// }



// Q6
// var maxAge = prompt('please enter max age');
// var currentAge = prompt('please enter current age');

// if (currentAge <= maxAge ) {    
//     alert("Welcome");
// }
// else{
//     alert("not welcome")
// }


// Q7
// var fuel = prompt('please enter remaining fuel in car');

// if (fuel <= 0.25 ) {    
//     alert("Please refill the fuel in your car");
// }

// Q8
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
//  if("car" < "cat"){
// alert("car is smaller than cat");
// }



// Q6

var subject = prompt('Enter obtained marks in three subject');
var obtainedMarks = subject; 
var totalMarks = 300;
var percentage = obtainedMarks/totalMarks*100;
// console.log(percentage.toFixed(2) + "%");
var grade ;
var remarks;
if (percentage >= 80 ) {    
    grade = "A-one"
    remarks = "Excellent"
}
else if (percentage >= 70 ) {    
    grade = "A"
    remarks = "Good"
}
else if (percentage >= 60 ) {    
    grade = "B"
    remarks = "You need to improve "
}
else if (percentage < 60 ) {    
    grade = "Fail"
    remarks = "Sorry"
}
if (obtainedMarks == "") {
    obtainedMarks = 0
}

console.log("Total marks:" +" "+ totalMarks)
console.log("Marks obtained:" +" "+ obtainedMarks)
console.log("Percentage:" +" "+ percentage.toFixed(2) + "%")
console.log("Grade:" +" "+ grade)
console.log("Remarks:" +" "+remarks)