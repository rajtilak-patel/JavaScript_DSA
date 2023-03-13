var x = 100;

function alpha(){
    var x = 200;

    function beta(){
        console.log(x);
    }
    return beta;
}

var gama = alpha();
gama();