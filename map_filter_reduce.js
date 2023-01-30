const arr = [5,1,3,2,6];

// map :- it use to iterate every element and return a new arr; map pass the argument in array

// const output = arr.map((x)=>{
//     return x*2;
// })

// console.log(output);


// filter - filter is to use filter a function for sum condition;

// const output = arr.filter(function(x){
//      return x>3;
// })

// console.log(output);

// Reduce :- reduce is a function to pass the to argument and return the single value like sum of all array , maximun and minumum find;

// normal function without reducer function

const ans = (arr)=>{
      let sum = 0;
      for (let index = 0; index < arr.length; index++) {
         sum = sum +arr[index];
      }
      return sum;
}


console.log(ans(arr));


const output = arr.reduce((acc,curr)=>{
    return acc+curr;
})

console.log(output);

const obj = [

    {
        Fname:"rajtilak",
        Lname:"patel",
        age:22
    },
    {
        Fname:"raja",
        Lname:"patel",
        age:20
    },
    {
        Fname:"raj",
        Lname:"patel",
        age:21
    },
]


const getData = obj.map((arr)=>{
           return (arr.Fname +" "+ arr.Lname);
})

console.log(getData);