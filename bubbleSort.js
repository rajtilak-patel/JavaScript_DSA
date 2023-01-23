function bubbleSort(array){
    
    for(let i=array.length;i>0;i--){
        for(let j=0;j<i-1;j++){
            if(array[j]>array[j+1]){
                [array[j],array[j+1]] =  [array[j+1],array[j]];
            }
        }
    }
    return array;
}

const ans = bubbleSort([5,6,4,2,1]);
console.log(ans);