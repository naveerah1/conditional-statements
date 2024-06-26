function oneplussum(x,y){
  return 1+(x+y);
}
let a = 10;
let b = 5;
let c = 15;
console.log("One plus sum of a and b is ", oneplussum(a,b));
console.log("One plus sum of b and c is ", oneplussum(a,b));
console.log("One plus sum of a and c is ", oneplussum(a,c));

//check if nyumbr is even and odd
function isEven(number) {
  if (number % 2 === 0) {
      return true;
  } else {
      return false;
  }
}

let num = 7;
if (isEven(num)) {
  console.log(num + " is even.");
} else {
  console.log(num + " is odd."); // Output: 7 is odd.
}
