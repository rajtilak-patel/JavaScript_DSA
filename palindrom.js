const palindrom = (str) =>{
    let st =  str.split('').reverse().join('');
    if(st===str){
        return true;
    }
    else{
        return false;
    }
}

console.log(palindrom("abbaabba"));