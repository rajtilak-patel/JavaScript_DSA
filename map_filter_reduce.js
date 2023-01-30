const arr = [5,1,3,2,6];

// map :- it use to iterate every element and return a new arr; map pass the argument in array

// const output = arr.map((x)=>{
//     return x*2;
// })

// console.log(output);


// filter - filter is to use filter a function for sum condition;

const output = arr.filter(function(x){
     return x>3;
})

console.log(output);