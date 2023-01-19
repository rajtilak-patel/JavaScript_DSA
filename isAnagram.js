const isObj = (str)=>{
    const obj = {};

    for(let i of str){
        (!obj[i])? obj[i]=1: obj[i]++;
    }
    return obj;
}

const isAnagram = (str1 ,str2)=>{
     
    if(str1 === str2){
        return true;
    }
    else if(str1.length !== str2.length){
        return false;
    }
    else{
        let obj1 = isObj(str1);
        let obj2 = isObj(str2);

        for(let i in obj1){
            if(obj1[i] !== obj2[i]){
                return false;
            }
        }
    }
    return true;

}

console.log(isAnagram("abba","aab"));