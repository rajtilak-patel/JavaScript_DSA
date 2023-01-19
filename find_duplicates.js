const dublicate = (arr)=>{
    const dublicates = arr.filter((elem,index,arr)=>arr.indexOf(elem)!==index);
    console.log(dublicates);
}

dublicate([1,2,3,5,2,4,5])