let api = ["apple","ball","cat"];

function first(api,callback){
    //some code
    console.log("first");
    callback();
}
function second(api){
    console.log("Second");
           function third(){
             console.log("third")
                function fourth(){
                    console.log("fourth");
                    function fifth(){
                        console.log("fifth");
                    }
                    fifth()
                }
            fourth();
        }
       third()
}

first(api,second);