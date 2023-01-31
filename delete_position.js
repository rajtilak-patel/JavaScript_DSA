function deleteEl(){
    let arr = [10,20,30,40,50];
    console.log(arr);
    let position = document.getElementById("position").value;
    position = parseInt(position);
    for(let i=position;i<arr.length;i++){
        arr[i] = arr[i+1];
    }
    // arr.pop();
    arr.length = arr.length-1;
    console.log(arr);
}
