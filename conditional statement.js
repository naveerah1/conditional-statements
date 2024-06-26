let a = -1; //to ask the user's age we can use function of prompt but its not supported here .
if(a<0){
console.log("This is an invalid age");
}
  //nested if else
  else if(a<9){
    console.log("You cannot even think of driving");
  }
    else if(a>9 && a<18){
      console.log("You can think of driving after 18");
    }
else{
  console.log("This is an invalid age");
}
//ternary operator
console.log("you can" ,a<18? "not drive":"drive");
// switch statement
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