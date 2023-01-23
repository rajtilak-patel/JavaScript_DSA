
// intersection
const arr1 = [1,2,3,4,5];
const arr2 = [3,4,5,6,7];

const ans = arr1.filter((curEle)=>{
    return arr2.includes(curEle);
})
console.log(ans);
// for(let i of ans){
//     console.log(i);;
// }
// union

const unionArr = [...new Set([...arr1,...arr2])];
console.log(unionArr);