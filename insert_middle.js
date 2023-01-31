function insertEl(){


    let arr = [1,2,3,4,5];
    let element = document.getElementById("element").value;
    element = parseInt(element)
    let position = document.getElementById("position").value;
    
    
    for(let i=arr.length-1;i>=0;i--){
        console.log("🚀 ~ file: insertMiddle.js:8 ~"+ arr[i])
    
        if(i>=position){
            arr[i+1] = arr[i];
        }
    
        if(i==position){
            arr[i] = element;
        }
    }
    console.log(arr);
}
    
let arr = [1,2,3,4,5];
arr.splice(2,0,100)

console.log(arr);
