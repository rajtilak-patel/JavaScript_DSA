const reverseString= (str) =>{
   let st = "";

   for(let i=0;i<str.length;i++){
      st = str[i]+st ; 
   }
//    console.log(st);
   return st;
}

const reverseNew= (str) =>{
    console.log(str.split(''))
    console.log(str.split('').reverse())
    console.log(str.split('').reverse().join(''))
   return str.split('').reverse().join('');
}

console.log(reverseString("rajtilak"));
console.log(reverseNew("rajtilak"));