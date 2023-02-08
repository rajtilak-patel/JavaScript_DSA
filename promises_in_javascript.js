let promises = new Promise((resolve,reject)=>{
    if(1){
        resolve("200");
    }
    else{
        reject("404");
    }
})

promises.then((res)=>{
    console.log("this is our fulfilled state "+ res);
})
.catch((err)=>{
    console.log("this is our rejected state "+ err);
})