
let arr = [1,2,3,4,5,6,7,8];

function chunkCode(arr,chunk){
    for(let i=0;i<arr.length;i = i+chunk){
        let arrayList;
        arrayList = arr.slice(i , i+chunk);
        
        console.log(arrayList);
    }
    
}

chunkCode(arr,2);