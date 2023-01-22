// Tell the output of following code?
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i=1;i<=10;i++){
    setTimeout(() => {
        console.log(a[i]);
    }, 1000);
}



for(var i=1;i<=10;i++){
    setTimeout(() => {
        console.log(a[i]);
    }, 1000);
}