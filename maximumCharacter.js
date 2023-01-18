const maxCharacter = (str)=>{
    let maxAns = {};

    for(let char of str){
        (!maxAns[char])? maxAns[char] = 1 : maxAns[char]++;
    }
    console.log(maxAns);
    let maxNum = 0;
    let maxChar = '';

    for(let x in maxAns){
        if(maxAns[x] >= maxNum){
            maxNum = maxAns[x];
            maxChar = x;
        }
    }

    console.log(`the character ${maxChar} is apper ${maxNum} times`);

}

maxCharacter("rajpatelsirriwala")