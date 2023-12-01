    var a=10;
      function fun(){
        var b=20;
        console.log(b);
        console.log(a);

      }
      fun()
    var p=30;


    var x=20;

    function outer(){
      var a= 10;  ///===
      console.log(a);


      function inner(){
        var b =30;
        //console .log(b);//
      }
      inner();
    }

    outer();

    // callback function :- A callback function is a function that is passed as an argument to another 
   // function and is executed when the outer function is completed.//

   function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }
  
  myFirst();
  mySecond();

  //scope:-  Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. 
  //The two types of scope are local and global: 
  //Global variables are those declared outside of a block. 
      
  myFunction();
  function myFunction() {
    carName = "Volvo";
  }


  //Local variables are those declared inside of a block

   function myFunction() {
      let carName = "Volvo";
    
  }
