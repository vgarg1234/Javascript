<<<<<<< HEAD
//closure:- Closure in JavaScript is a form of lexical scoping used to preserve variables 
//from the outer scope of a function in the inner scope of a function.  

function outer(){
    var a=30;
    function inner(){
        console.log(a);   
    }

    return inner;
}

var x = outer();

=======
//closure:- Closure in JavaScript is a form of lexical scoping used to preserve variables 
//from the outer scope of a function in the inner scope of a function.  

function outer(){
    var a=30;
    function inner(){
        console.log(a);   
    }

    return inner;
}

var x = outer();

>>>>>>> bf7a196afbed9c990510321662ed26e8a51785cd
x();