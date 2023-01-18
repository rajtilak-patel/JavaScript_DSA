const getData = (str)=>{
    
    for(let i=1;i<=str;i++){
        if(i%3==0 && i%5==0){
            console.log("Fizz-Buzz");
        }
        else if(i%5==0){
            console.log("Buzz");
        }
        else if(i%3==0){
            console.log("Fizz");
        }
        else{
            console.log(i);
        }
    }
}

getData(15);