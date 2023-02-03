// We know that 1 kilometer is equal to 0.621371 miles.

function ans(kilo){
        let miles = kilo*0.621371
        return miles
}

function changeMiter(kilometer){
        let miles = kilometer*1000;
        return "change meter :- "+ miles
}

console.log(ans(10));
console.log(changeMiter(10));