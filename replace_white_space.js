const replace_white_space = (str , n)=>{
    let newStr = "";

    for(let i=0;i<n;i++){
        if(str[i]===" "){
            newStr += "%20";
        }
        else{
            newStr += str[i];
        }
    }
    return newStr;
}

console.log( replace_white_space("my name is rajtilak patel ",26));