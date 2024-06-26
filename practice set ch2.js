//Q1 age between 10 and 20
let a = 5
if(a>10&&a<20){
  console.log("your age lies between 10 and 20");
}
else{
  console.log("Your age doesnt lies between 10 and 20");
}
 // //q2 demonstrate use of switch statement
const exp = "papaya";
switch(exp){
    case'oranges':
    console.log("the orange costs 10 rupees");
    break;
      case'mangoes':
    case'papaya':
    console.log("the mangoes and papayas costs 20 rupees");
    break;
      default:
    console.log("this is invalid");
    break;
}
// //q3 number divisible by 2 and 3
let n = 2;
if(n%2==0&&n%3==0){
  console.log("number is divisible by 2 and 3");
}
else{
  console.log("number is not divisible by 2 and 3");
}
// //q4 number is divisible by 2 or 3
let num = 2;
if(num%2==0){
  console.log("number is divisible by 2 ");
}
  else if(num%3==0){
    console.log("number is divisible by 3");
  }
else{
  console.log("number is not divisible by 2 and 3");
}
//q5 ternary operator decise whether drive or not age os greater than 18
let age=20;
console.log("YOU CAN",age>18?"drive":"not drive");

