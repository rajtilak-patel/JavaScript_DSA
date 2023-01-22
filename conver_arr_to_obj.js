let arr = ["rajtilka",25,"male","indian"];

let arr1 = [
    ["id", "1"],
    ["name", "Test User"],
    ["age", "25"],
    ["profession", "Developer"],
  ];

//   fist way to convert arr to object
// assigns
  console.log(Object.assign({},arr));

//   second way to convert arr to object spread operator
console.log({...arr});


// third way to convert arr to object
 console.log(Object.fromEntries(arr1));

  console.log(arr);
  console.log(arr1);