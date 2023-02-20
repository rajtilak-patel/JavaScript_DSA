function getSecondLargest(nums) {
    // Complete the function
       nums.sort((a,b)=> a-b)
      let secondLargest;
    //   console.log(ans)
      
      
      for(let i=nums.length-1;i>=0;i--){
           if(nums[nums.length-1] !==nums[i-1]){
               secondLargest = nums[i-1];
               break;
           }
      }
      return secondLargest
}

let arr = [1,5,4,6,8,9,1,1,8,4];

console.log(getSecondLargest(arr));