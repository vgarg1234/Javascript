//Map :--  map() creates a new array from calling a function for every array element.

//map() does not execute the function for empty elements.

//map() does not change the original array. 



let arr =[34,65,78,18,8,92];

let mapArr = arr.map((item)=>{
    return item-5;
})

console.log(mapArr);


