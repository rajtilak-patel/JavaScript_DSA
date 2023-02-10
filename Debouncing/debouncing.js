console.log("debouncing")
let count = 0;
const getData = ()=>{
    console.log("Fetching the data on server...",count++)
}

const debouncing =(fn,d)=>{
    let timer;
    return function(){
        let context = this,
        args = arguments;
        clearTimeout(timer);
    
        timer = setTimeout(() => {
            fn.apply(context,arguments)
        }, d);
    }
   

}



const betterFunction = debouncing(getData,300);