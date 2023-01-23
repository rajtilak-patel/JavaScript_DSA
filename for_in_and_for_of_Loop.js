const arr = [1,2,34,5,6];

let s = '';
// print the index number 
for(let i in arr){
    console.log(i);
}

// print the value
for(let i of arr){
    console.log(i);
    s += i +" ";
}
console.log(s);

const obj = {a:1,b:2,c:3};

for(key of Object.keys(obj)){
    console.log(key)
    console.log("file: for_in_and_for_of_Loop.js:20 ~ " + key );
} 

const  a = "rajtilak";