let arr = [1,8,4,5,6,7,9];
let arr1 = ["1","2"];

let ans = arr.reduce((acc,curr)=>{
     return acc+curr;
},0)

let ans1 = arr.reduce((acc,curr)=>{
     return acc*curr;
},1)

let ans2 = arr.reduce((acc,curr)=>{
     return acc-curr;
},1)


let ans3 = arr.sort((a,b)=> b-a).filter((item)=>item>5)

console.log(ans);
console.log(ans1);
console.log(ans2);
console.log(ans3);