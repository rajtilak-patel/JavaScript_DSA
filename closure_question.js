// example code
function toggler(x,y,z) {
        var a = x;
        function outer(){
            var b = y;
            function inner(){
                var c = z;
                console.log( a+b+c+20);
            }
            inner();
        }
        outer();
 }
const toggle = toggler(1,2,3)


// toggle()
// // 1
// toggle()
// // 2
// toggle()
// // 3