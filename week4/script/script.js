// this lines take input from user
var num1 = Number(prompt("Please enter first number"));
var num2 = Number(prompt("Please enter second number"));

// tow input numbers added
var sum = num2 + num1;

// divide tow numbers to 100 in order to get percentage
var div = sum / 100;

// make 30% out of 100%
var tip = div * 15;

//result
var result = sum + tip;
window.alert("The sum of " + num1 + " and " + num2 + " is " + result  + " It has been added 30% tip to it!");

