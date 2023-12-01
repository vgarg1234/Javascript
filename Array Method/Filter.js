<<<<<<< HEAD
// filter :-- The filter() method creates a new array filled with elements that pass a test provided by a function.

//The filter() method does not execute the function for empty elements.

//The filter() method does not change the original array.




let arr =[34,65,78,18,8,92];

let filterArr=arr.filter((item)=>{
    if(item<40){
        return true;
    }
})

=======
// filter :-- The filter() method creates a new array filled with elements that pass a test provided by a function.

//The filter() method does not execute the function for empty elements.

//The filter() method does not change the original array.




let arr =[34,65,78,18,8,92];

let filterArr=arr.filter((item)=>{
    if(item<40){
        return true;
    }
})

>>>>>>> bf7a196afbed9c990510321662ed26e8a51785cd
console.log(filterArr);