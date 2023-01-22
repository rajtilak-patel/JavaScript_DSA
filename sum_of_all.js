// Find the sum of all elements/numbers of a given array?

let arr = [5,6,12,4,2,12];

let ans = arr.reduce((acc,it)=>{
      console.log(acc+it);
      return acc+it;
},0)

console.log(ans);