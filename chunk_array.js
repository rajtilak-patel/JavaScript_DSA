let arr = [1,4,12,3,2,6,-9,0];
let n = 4;

const chunks = (arr,n)=>{
    const chunked = [];

    for(let elem of arr){
        let last = chunked[chunked.length-1];

        if(!last ||last.length===n){
            chunked.push([elem]);
            console.log(chunked);
           
        }
        else{
            last.push(elem)
        }

    }
    return chunked;
}

console.log(chunks(arr,n));