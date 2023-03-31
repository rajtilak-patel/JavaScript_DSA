
let name = "rajtilak"
 
let obj = {};

for(let i=0;i<name.length;i++){
    let key = name[i];
    if(obj[key]){
        obj[key]++;
    }
    else{
        obj[key] = 1;
    }
}
console.log(obj)