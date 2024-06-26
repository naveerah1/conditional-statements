
let sum =0;
let n=4;
for(let i=0;i<n;i++){
  sum+=(i+1);
  console.log((i+1),"+");
}
console.log("Sum of first "+n+" natural numbers is "+sum);

//for in loop
let obj = {
  ALex : 10,
  Bob : 20,
  Pippa : 19,
  Lupin : 78,
  Assane : 90
}
for (let a in obj){
  console.log("Marks of "+a+" are "+obj[a]);
}

//for of loop
for (let b of "Lupin"){
  console.log(b);
}