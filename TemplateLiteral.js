function sides(literals, ...expressions) {
    
    let arr = [];
    let [a,b] = expressions;
    
    let s1 = (b+Math.sqrt(b**2-16*a))/4;
    let s2 = (b-Math.sqrt(b**2-16*a))/4;
    
    arr.push(s1)
    arr.push(s2);
    
    return arr.sort()
    
    
}

let ans = sides([10,14,10]);
console.log(ans)