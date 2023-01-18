const palindrom = (str) =>{
    let st =  str.split('').reverse().join('');
    if(st===str){
        return true;
    }
    else{
        return false;
    }
}

const palindromicString = (str) =>{
     let i=0;
     let j = str.length-1;

     while(i<j){
        if(str[i]===str[j]){
            i++;
            j--;
        }
        else{
            return false;
        }
     }
     return true;
}
console.log(palindromicString("naman"));
console.log(palindrom("abbaabba"));