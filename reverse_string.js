const reverseString= (str) =>{
   let st = "";

   for(let i=0;i<str.length;i++){
      st = str[i]+st ; 
   }
//    console.log(st);
   return st;
}

console.log(reverseString("rajtilak"));