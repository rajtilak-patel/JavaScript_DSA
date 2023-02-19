
let arr = [1,4,2,3];

function avgAns(arr) {
  if(arr.length === 1){
    return arr[0];
  }  
  let ans = arr.sort();
  let min = ans[0];
  let max = ans[ans.length - 1];
  let count = 0;

  for (let i = 1; i < ans.length; i++) {
    if (ans[0] === ans[i]) {
      min += ans[i];
      count++;
    } else {
      count++;
      break;
    }
  }

  for (let i = ans.length - 1; i >= 0; i--) {
    if (ans[ans.length - 1] === ans[i - 1]) {
      max += ans[i];
      count++;
    } else {
      count++;
      break;
    }
  }
  let totalAns = (min + max) / count;
  return totalAns;
}

console.log(avgAns(arr));
