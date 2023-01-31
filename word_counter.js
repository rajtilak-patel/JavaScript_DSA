let arr = ["apple","ball","cat","apple","dog","cat"];


function counter(arr){
    let obj = {};
    arr.forEach(element => {
        if(obj[element]){
            obj[element]++;
        }
        else{
            obj[element]=1;
        }
    })
    return obj
}

console.log(counter(arr));